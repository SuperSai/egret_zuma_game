class ChapterUpButton extends BaseEuiView {

	public txt_chapter: eui.Label;

	public constructor($controller: BaseController, $layer: number) {
		super($controller, $layer);
		this.skinName = SkinName.ChapterUpButtonSkin;
	}
}