/**
 * 战斗地图
 */
class BattleMap extends egret.Sprite {

	//地图列表
	private _mapList: any[];
	private _mapContainer: egret.DisplayObjectContainer;
	private _path: egret.Sprite;
	private _battleModel: BattleModel;
	//每一步的长度
	private _stepLength: number = 2;

	public constructor() {
		super();
	}

	/** 初始化地图 */
	public init(battleModel: BattleModel) {
		let self = this;
		self._battleModel = battleModel;
		self._mapContainer = new egret.DisplayObjectContainer();
		this._mapContainer.touchChildren = false;
		self._mapContainer.touchEnabled = false;
		self.addChild(self._mapContainer);
		self.updateMap();
		self.initMapData();
	}

	private initMapData(): void {
		let self = this;
		self._path = new egret.Sprite();
		self._mapList = self._battleModel.levelVO.mapData;
		self._path.graphics.lineStyle(2, 0xFFFFFF);
		self._path.graphics.moveTo(self._mapList[0][0], self._mapList[0][1]);
		for (var i: number = 1; i < self._mapList.length - 2; ++i) {
			let xc: number = (self._mapList[i][0] + self._mapList[i + 1][0]) / 2;
			let yc: number = (self._mapList[i][1] + self._mapList[i + 1][1]) / 2;
			self._path.graphics.curveTo(self._mapList[i][0], self._mapList[i][1], xc, yc);
		}
		self._path.graphics.curveTo(self._mapList[self._mapList.length - 2][0], self._mapList[self._mapList.length - 2][1], self._mapList[self._mapList.length - 2 + 1][0], self._mapList[self._mapList.length - 2 + 1][1]);
		for (let j: number = 0; j < self._mapList.length - 2; ++j) {
			let p0: egret.Point = (j == 0) ? new egret.Point(self._mapList[0][0], self._mapList[0][1]) : new egret.Point((self._mapList[j][0] + self._mapList[j + 1][0]) / 2, (self._mapList[j][1] + self._mapList[j + 1][1]) / 2);
			let p1: egret.Point = new egret.Point(self._mapList[j + 1][0], self._mapList[j + 1][1]);
			let p2: egret.Point = (j <= self._mapList.length - 4) ? new egret.Point((self._mapList[j + 1][0] + self._mapList[j + 2][0]) / 2, (self._mapList[j + 1][1] + self._mapList[j + 2][1]) / 2) : new egret.Point(self._mapList[j + 2][0], self._mapList[j + 2][1]);
			let steps: number = Bezier.init(p0, p1, p2, self._stepLength);
			for (let m: number = 1; m <= steps; ++m) {
				let data: any[] = Bezier.getAnchorPoint(m);
				BattleConst.MapData.push(data);
			}
		}
		let l: number = BattleConst.MapData.length;
		self._path.graphics.beginFill(0xFF3300);
		self._path.graphics.drawCircle(BattleConst.MapData[l - 9][0], BattleConst.MapData[l - 9][1], 18);
		self._path.graphics.endFill();
		self.addChild(self._path);
	}

	/** 更新地图 */
	public updateMap(): void {
		let self = this;
		let path: string = PathConfig.MapPath.replace("{0}", self._battleModel.levelVO.icon + "");
		App.DisplayUtils.removeAllChildren(self._mapContainer);
		App.DisplayUtils.addAsyncBimapToContainer(path, self._mapContainer);
	}

}