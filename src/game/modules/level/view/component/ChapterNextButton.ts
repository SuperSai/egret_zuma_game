class ChapterNextButton extends BaseEuiView {

	public lockImg: eui.Image;
	public txt_chapter: eui.Label;

	public constructor($controller: BaseController, $layer: number) {
		super($controller, $layer);
		this.skinName = SkinName.ChapterNextButtonSkin;
	}
}