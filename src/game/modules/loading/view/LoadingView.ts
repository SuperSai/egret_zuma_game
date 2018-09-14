class LoadingView extends BaseEuiView {
	public constructor($controller: BaseController, $layer: number) {
		super($controller, $layer);
		this.skinName = SkinName.LoadingUISkin;
	}

	public txtMsg: eui.Label;

	public setProgress(current: number, total: number): void {
		this.txtMsg.text = "资源加载中..." + current + "/" + total;
	}
}