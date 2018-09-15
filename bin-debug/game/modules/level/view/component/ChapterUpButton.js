var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var ChapterUpButton = (function (_super) {
    __extends(ChapterUpButton, _super);
    function ChapterUpButton($controller, $layer) {
        var _this = _super.call(this, $controller, $layer) || this;
        _this.skinName = SkinName.ChapterUpButtonSkin;
        return _this;
    }
    return ChapterUpButton;
}(BaseEuiView));
__reflect(ChapterUpButton.prototype, "ChapterUpButton");
//# sourceMappingURL=ChapterUpButton.js.map