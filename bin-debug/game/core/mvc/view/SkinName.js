var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SkinName = (function () {
    function SkinName() {
    }
    SkinName.LoadingUISkin = "resource/skins/loading/LoadingUISkin.exml";
    SkinName.LoginSkin = "resource/skins/login/LoginSkin.exml";
    SkinName.BattleUIViewSkin = "resource/skins/battle/BattleUIViewSkin.exml";
    SkinName.CurrencyViewSkin = "resource/skins/hall/CurrencyViewSkin.exml";
    SkinName.HallViewSkin = "resource/skins/hall/HallViewSkin.exml";
    SkinName.ChapterNextButtonSkin = "resource/skins/level/ChapterNextButtonSkin.exml";
    SkinName.ChapterUpButtonSkin = "resource/skins/level/ChapterUpButtonSkin.exml";
    SkinName.LevelViewSkin = "resource/skins/level/LevelViewSkin.exml";
    return SkinName;
}());
__reflect(SkinName.prototype, "SkinName");
//# sourceMappingURL=SkinName.js.map