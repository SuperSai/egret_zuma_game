class BoneConfig {
	public constructor() {
	}

	public static SKE_END_TAG: string = "_ske_json";
	public static TEXTUREDATA_END_TAG: string = "_tex_json";
	public static TEXTURE_END_TAG: string = "_tex_png";

	public static copyValueFromTemplate(target: BoneAnimation, id: string) {
		let list: BoneAnimationVO[] = GlobleData.getDataByFilter(GlobleData.BoneAnimationVO, "skename", id);
		if (list.length > 0) {
			let template: BoneAnimationVO = list[0];
			ObjectUtils.copyValue(target, template);
		}
	}
}