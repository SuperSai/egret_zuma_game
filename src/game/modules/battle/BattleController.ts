/**
 * 战斗控制类
 */
class BattleController extends BaseController {

	private _battleView: BattleView;
	private _battleUIView: BattleUIView;
	private _battleModel: BattleModel;

	public constructor() {
		super();
		let self = this;
		//View初始化
		this._battleView = new BattleView(this, LayerManager.GAME_MAP_LAYER);
		App.ViewManager.register(ViewConst.Battle, this._battleView);

		self._battleUIView = new BattleUIView(self, LayerManager.GAME_UI_LAYER);
		App.ViewManager.register(ViewConst.BattleUI, this._battleUIView);

		//Model初始化
		this._battleModel = new BattleModel(this);

		//注册模块消息
		this.registerFunc(BattleConst.BATTLE_INIT, this.onBattleInit, this);
	}

	private onBattleInit(param: any[]) {
		let self = this;
		self._battleModel.levelVO = GlobleData.getData(GlobleData.LevelVO, param[0]);
		self._battleModel.roleId = param[1];
		App.ViewManager.open(ViewConst.Battle, self._battleModel);
		App.ViewManager.open(ViewConst.BattleUI, self._battleModel);
	}
}