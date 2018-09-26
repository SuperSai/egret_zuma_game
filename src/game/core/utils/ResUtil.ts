/**
 * 资源加载工具类，
 * 支持多个resource.json文件加载
 * 支持一次性加载多个groups
 */
class ResUtil extends BaseClass {
	public static PRIORITY_H = 10;
	public static PRIORITY_M = 5;
	public static PRIORITY_L = 1;

	private _configs: Array<any>;
	private _onConfigComplete: Function;
	private _onConfigCompleteTarget: any;
	private _loadingGroups: Array<string> = [];
	/**保存资源组名*/
	private _groups: any;

	/** 构造函数 */
	public constructor() {
		super();
		this._configs = new Array<any>();
		this._groups = {};
		RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
		RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceLoadProgress, this);
		RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
	}
    /**
     * 添加一个配置文件
     * @param jsonPath resource.json路径
     * @param filePath 访问资源路径
     */
	public addConfig(jsonPath: string, filePath: string): void {
		this._configs.push([jsonPath, filePath]);
	}
    /**
     * 开始加载配置文件
     * @param $onConfigComplete 加载完成执行函数
     * @param $onConfigCompleteTarget 加载完成执行函数所属对象
     */
	public loadConfig($onConfigComplete: Function, $onConfigCompleteTarget: any): void {
		this._onConfigComplete = $onConfigComplete;
		this._onConfigCompleteTarget = $onConfigCompleteTarget;
		this.loadNextConfig();
	}
	/** 加载 */
	private loadNextConfig(): void {
		//加载完成
		if (this._configs.length == 0) {
			this._onConfigComplete.call(this._onConfigCompleteTarget);
			this._onConfigComplete = null;
			this._onConfigCompleteTarget = null;
			return;
		}
		var arr: any = this._configs.shift();
		RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigCompleteHandle, this);
		RES.loadConfig(arr[0], arr[1]);
	}
	/** 加载完成 */
	private onConfigCompleteHandle(event: RES.ResourceEvent): void {
		RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigCompleteHandle, this);
		this.loadNextConfig();
	}
    /**
     * 加载资源组，静默加载(无回调函数)
     * @group 资源组(支持字符串和数组)
     */
	public loadGroupQuiet(group, priority: number = 1, progress: any = null) {
		var groupName: string = this.combGroupName(group);
		if (this._loadingGroups.indexOf(groupName) < 0) {
			this._loadingGroups.push(groupName);
			RES.loadGroup(groupName, priority, progress);
		}
	}
    /**
     * 加载资源组，带加载完成回调
     * @group 资源组(支持字符串和数组)
     * @onComplete 加载完成回调
     * @thisObject 回调执行对象
     * @priority 优先级
     */
	public loadGroup(group, onComplete: Function, thisObject: any, priority: number = 1, progress: any = null) {
		var groupName: string = this.combGroupName(group);
		this.createGroupInfo(groupName, onComplete, null, thisObject);
		if (this._loadingGroups.indexOf(groupName) < 0) {
			this._loadingGroups.push(groupName);
			RES.loadGroup(groupName, priority, progress);
		}
	}
    /**
     * 加载资源组，带加载进度
     * @group 资源组(支持字符串和数组)
     * @onComplete 加载完成回调
     * @onProgress 加载进度回调
     * @thisObject 回调执行对象
     */
	public loadGroupWithPro(group, onComplete: Function, onProgress: Function, thisObject: any): void {
		var groupName: string = this.combGroupName(group);
		this.createGroupInfo(groupName, onComplete, onProgress, thisObject);
		if (this._loadingGroups.indexOf(groupName) < 0) {
			this._loadingGroups.push(groupName);
			RES.loadGroup(groupName);
		}
	}
	/** 组合资源组名。单个资源组直接返回。多个资源组则重新命名。 */
	private combGroupName(group) {
		if (typeof (group) == "string") {
			return group;
		} else {
			var len = group.length;
			var groupName: string = "";
			for (var i = 0; i < len; i++) {
				groupName += group[i];
			}
			RES.createGroup(groupName, group, false); //是否覆盖已经存在的同名资源组,默认 false
			return groupName;
		}
	}

	private createGroupInfo(groupName: string, onComplete: Function = null, onProgress: Function = null, thisObject: any = null): any {
		//采用数组存储，原因是有时候会出现多个相同的资源连着开始加载，但是回调函数却属于不同的对象这种情况
		if (!this._groups[groupName]) this._groups[groupName] = [];
		this._groups[groupName].push({ onComplete: onComplete, thisObject: thisObject, onProgress: onProgress });
	}
	/** 资源组加载完成 */
	private onResourceLoadComplete(event: RES.ResourceEvent): void {
		var groupName: string = event.groupName;
		if (!RES.isGroupLoaded(groupName)) {
			return;
		}
		let index: number = this._loadingGroups.indexOf(groupName);
		if (index >= 0) {
			this._loadingGroups.splice(index, 1);
		}
		if (this._groups[groupName]) {
			for (let i: number = 0; i < this._groups[groupName].length; i++) {
				var loadComplete: Function = this._groups[groupName][i].onComplete;
				var loadCompleteTarget: any = this._groups[groupName][i].thisObject;
				if (loadComplete != null) {
					loadComplete.call(loadCompleteTarget);
				}
			}
			this._groups[groupName] = null;
			delete this._groups[groupName];
		}
	}
	/** 资源组加载进度 */
	private onResourceLoadProgress(event: RES.ResourceEvent): void {
		var groupName: string = event.groupName;
		if (this._groups[groupName]) {
			for (let i: number = 0; i < this._groups[groupName].length; i++) {
				var loadProgress: Function = this._groups[groupName][i].onProgress;
				var loadProgressTarget: any = this._groups[groupName][i].thisObject;
				if (loadProgress != null) {
					loadProgress.call(loadProgressTarget, event);
				}
			}
		}
	}
	/** 资源组加载失败 */
	private onResourceLoadError(event: RES.ResourceEvent): void {
		this.onResourceLoadComplete(event);
	}
	/** 外部加载声音 */
	public async loadAsyncSound(path: string, backcall: Function = null) {
		RES.getResByUrl(PathConfig.SoundPath + path, () => {
			if (backcall) backcall();
		}, this, RES.ResourceItem.TYPE_SOUND);
	}
}