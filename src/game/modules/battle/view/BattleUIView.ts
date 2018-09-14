/**
 * 战斗场景中的EUI界面
 */
class BattleUIView extends BaseEuiView {

	public txt_maxCobom: eui.Label;
	public btn_back: eui.Button;

	public constructor($controller: BaseController, $layer: number) {
		super($controller, $layer);
		this.skinName = SkinName.BattleUIViewSkin;
	}

	/** 对面板进行显示初始化，用于子类继承 */
	public initUI(): void {
		super.initUI();
		let self = this;

	}

	/** 对面板数据的初始化，用于子类继承 */
	public initData(): void {
		super.initData();
	}

	/** 面板开启执行函数，用于子类继承 */
	public open(...param: any[]): void {
		super.open(param);
		let self = this;
		let model: BattleModel = param[0];
	}

	public addEvents(): void {
		super.addEvents();
		let self = this;
		self.registerFunc(BattleConst.UPDATE_MAXCOBOM, self.onUpdateMaxCobom, self);
		self.btn_back.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onBackHall, self);
	}

	public removeEvents(): void {
		super.removeEvents();
		let self = this;
		self.btn_back.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onBackHall, self);
	}

	/** 更新最大连击数 */
	private onUpdateMaxCobom(maxCobom: number): void {
		let self = this;
		self.txt_maxCobom.text = maxCobom + "";
	}

	/** 返回大厅 */
	private onBackHall(): void {
		let self = this;
		App.SceneManager.runScene(SceneConsts.HALL);
	}

	/** 面板关闭执行函数，用于子类继承 */
	public close(...param: any[]): void {
		super.close(param);
	}
}