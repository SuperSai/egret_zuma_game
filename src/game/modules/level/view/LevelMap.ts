/**
 * 关卡地图
 */
class LevelMap extends egret.Sprite {

	private _mapContainer: egret.DisplayObjectContainer;
	private _levelModel: LevelModel;

	public constructor() {
		super();
	}

	/** 初始化地图 */
	public init(levelModel: LevelModel) {
		let self = this;
		self._levelModel = levelModel;
		self._mapContainer = new egret.DisplayObjectContainer();
		this._mapContainer.touchChildren = false;
		self._mapContainer.touchEnabled = false;
		self.addChild(self._mapContainer);
		self.updateMap();
	}

	private updateMap(): void {
		let self = this;
		let path: string = PathConfig.LevelPath.replace("{0}", self._levelModel.levelMapVO.icon + "");
		App.DisplayUtils.removeAllChildren(self._mapContainer);
		App.DisplayUtils.addAsyncBimapToContainer(path, self._mapContainer);
	}
}