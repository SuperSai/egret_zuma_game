class HallController extends BaseController {

	private _hall: modules.hall.HallView;
	private _hallModel: HallModel;

	public constructor() {
		super();
		let self = this;

		//View初始化
		this._hall = new modules.hall.HallView(this, LayerManager.GAME_MAP_LAYER);
		App.ViewManager.register(ViewConst.Hall, this._hall);

		this._hallModel = new HallModel(this);

		//注册模块消息
		this.registerFunc(HallConst.HALL_INIT, this.onHallInit, this);
	}

	private onHallInit(param: any[]): void {
		let self = this;
		App.ViewManager.open(ViewConst.Hall, self._hallModel);
	}
}