var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var BoneConfig = (function () {
    function BoneConfig() {
    }
    BoneConfig.copyValueFromTemplate = function (target, id) {
        var list = GlobleData.getDataByFilter(GlobleData.BoneAnimationVO, "skename", id);
        if (list.length > 0) {
            var template = list[0];
            ObjectUtils.copyValue(target, template);
        }
    };
    BoneConfig.SKE_END_TAG = "_ske_json";
    BoneConfig.TEXTUREDATA_END_TAG = "_tex_json";
    BoneConfig.TEXTURE_END_TAG = "_tex_png";
    return BoneConfig;
}());
__reflect(BoneConfig.prototype, "BoneConfig");
//# sourceMappingURL=BoneConfig.js.map