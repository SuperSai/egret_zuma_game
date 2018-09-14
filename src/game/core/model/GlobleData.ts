/**
 * json数据解析类
 */
class GlobleData extends egret.DisplayObject {

	private _hasParasComplete: boolean = false;
	private _totalStepCsvList: TSDictionary<string, any> = new TSDictionary<string, any>();
	private _needParseCount: number = 0;
	private _currParseCount: number = 0;
	private _csvZipData: JSZip;
	private static AllCacheData: TSDictionary<string, TSDictionary<number, any>> = new TSDictionary<string, TSDictionary<number, any>>();

	public get hasParasComplete(): boolean {
		return this._hasParasComplete;
	}

	public setup(): void {
		let self = this;
		self.initModel();
		self.initStep();
	}

	public static ServerConfigVO: string = "ServerConfig_json";
	public static BoneAnimationVO: string = "BoneAnimation_json";
	public static LevelVO: string = "Level_json";


	private initModel(): void {
		let self = this;
		self._totalStepCsvList.Add(GlobleData.LevelVO, LevelVO);
		self._totalStepCsvList.Add(GlobleData.BoneAnimationVO, BoneAnimationVO);
	}

	// 解析初始数据表
	private initStep(): void {
		let self = this;
		self._needParseCount = self._totalStepCsvList.GetLenght();
		RES.getResAsync("json_zip", this.onloadDataComplete, self);
		LogManager.logFormat("dataFile is json_zip");
	}
	private onloadDataComplete(data: any, key: string): void {
		let self = this;
		self._csvZipData = new JSZip(data);
		LogManager.logFormat("onloadDataComplete is json_zip:" + key);
		self.addEventListener(egret.Event.ENTER_FRAME, self.onEnterFrameLoader, self);
	}

	private onEnterFrameLoader(): void {
		let self = this;
		if (self._currParseCount >= self._needParseCount) {
			self.removeEventListener(egret.Event.ENTER_FRAME, self.onEnterFrameLoader, self);
			this._hasParasComplete = true;
			GameEnterManager.Instance.setup();
		}
		else {
			//一次解析两个文件
			self.getCsvFile();
			self.getCsvFile();
		}
	}

	private getCsvFile(): void {
		let self = this;
		if (self._currParseCount < self._needParseCount) {
			let key: string = self._totalStepCsvList.getKeyByIndex(self._currParseCount);
			key = key.replace('_', '.');
			let data: any = self._csvZipData.file(key);
			if (data == null) {
				LogManager.errorFormat("can't get key from key :" + key);
			}
			let csvStr: string = self._csvZipData.file(key).asText();
			self.starSingleParse(csvStr);
		}
	}

	private starSingleParse(csvStr: string): void {
		let self = this;
		let key: string = self._totalStepCsvList.getKeyByIndex(self._currParseCount);
		let DataClass: any = self._totalStepCsvList.getValueByIndex(self._currParseCount);
		let dic: TSDictionary<number, any> = CSVParser.ParseJsonData(DataClass, csvStr);
		GlobleData.AllCacheData.Add(key, dic);
		self._currParseCount++;
	}

	private static _instance: GlobleData;
	public constructor() { super(); }
	public static get getInstance(): GlobleData {
		if (!this._instance) {
			this._instance = new GlobleData();
		}
		return this._instance;
	}

	public static getData(type: string, key: number): any {
		let dic: TSDictionary<number, any> = GlobleData.AllCacheData.TryGetValue(type);
		return dic.TryGetValue(key);
	}

	public static getDataByFilter(type: string, filterType: any, filterValue: any): any[] {
		let dic: TSDictionary<number, any> = GlobleData.AllCacheData.TryGetValue(type);
		let filterd: any[] = dic.TryGetListByCondition((bean) => bean[filterType] == filterValue);
		return filterd
	}

	public static getAllValue(type: string): Array<any> {
		let dic: TSDictionary<number, any> = GlobleData.AllCacheData.TryGetValue(type);
		return dic.getValues();
	}

	public static getDataByCondition(type: string, value: (value: any) => boolean): Array<any> {
		let dic: TSDictionary<number, any> = GlobleData.AllCacheData.TryGetValue(type);
		let arr: any[] = dic.TryGetListByCondition(value);
		return arr;
	}
}