class LevelView extends BaseEuiView {

	public levelMapGroup: eui.Group;
	public btn_stars: eui.Group;
	public txt_starCount: eui.Label;
	public btn_up: ChapterUpButton;
	public btn_next: ChapterNextButton;

	private _map: LevelMap;
	private _levelModel: LevelModel;

	public constructor($controller: BaseController, $layer: number) {
		super($controller, $layer);
		this.skinName = SkinName.LevelViewSkin;
		this.setResources(["level"]);
	}

	/** 对面板进行显示初始化，用于子类继承 */
	public initUI(): void {
		super.initUI();
		let self = this;
		self.btn_up.initUI();
		self.btn_next.initUI();
	}

	/** 对面板数据的初始化，用于子类继承 */
	public initData(): void {
		super.initData();
	}

	private initMap(): void {
		let self = this;
		self._map = new LevelMap();
		self._map.init(self._levelModel);
		self.levelMapGroup.addChild(self._map);
	}

	/** 面板开启执行函数，用于子类继承 */
	public open(...param: any[]): void {
		super.open(param);
		let self = this;
		self._levelModel = param[0];
		self.initMap();
	}

	public addEvents(): void {
		super.addEvents();
		let self = this;
		self.btn_stars.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onGetStarReward, self);
		self.setBtnEffect(["btn_stars"]);
	}

	public removeEvents(): void {
		super.removeEvents();
		let self = this;
		self.btn_stars.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onGetStarReward, self);
	}

	/** 获取星星奖励 */
	private onGetStarReward(): void {
		let self = this;
	}
}