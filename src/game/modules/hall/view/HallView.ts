module modules.hall {
	/**
	 * 大厅主界面
	 */
	export class HallView extends BaseEuiView {

		public currency: CurrencyView;
		/** 关卡按钮 */
		public btn_checkpoint: eui.Button;

		public constructor($controller: BaseController, $layer: number) {
			super($controller, $layer);
			this.skinName = SkinName.HallViewSkin;
			this.setResources(["hall"]);
		}

		/** 对面板进行显示初始化，用于子类继承 */
		public initUI(): void {
			super.initUI();
			let self = this;
			self.currency.initUI();
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
			self.btn_checkpoint.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onGotoCheckpoint, self);
			self.setBtnEffect(["btn_checkpoint"]);
		}

		public removeEvents(): void {
			super.removeEvents();
			let self = this;
			self.btn_checkpoint.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onGotoCheckpoint, self);
		}

		/** 进入关卡选择界面 */
		private onGotoCheckpoint(): void {
			let self = this;
			App.SceneManager.runScene(SceneConsts.LEVEL, 10000);
		}
	}
}