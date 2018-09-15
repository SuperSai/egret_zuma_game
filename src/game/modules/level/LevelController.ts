/**
 * 关卡控制器
 */
class LevelController extends BaseController {

	private _levelView: LevelView;
	private _levelModel: LevelModel;

	public constructor() {
		super();
		let self = this;

		self._levelView = new LevelView(self, LayerManager.GAME_MAP_LAYER);
		App.ViewManager.register(ViewConst.Level, this._levelView);

		//Model初始化
		this._levelModel = new LevelModel(this);

		//注册模块消息
		this.registerFunc(LevelConst.LEVEL_INIT, this.onLevelInit, this);
	}

	private onLevelInit(mapId: number) {
		let self = this;
		self._levelModel.levelMapVO = GlobleData.getData(GlobleData.LevelMapVO, mapId);
		App.ViewManager.open(ViewConst.Level, self._levelModel);
	}
}