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
var LoadingView = (function (_super) {
    __extends(LoadingView, _super);
    function LoadingView($controller, $layer) {
        var _this = _super.call(this, $controller, $layer) || this;
        _this.skinName = SkinName.LoadingUISkin;
        return _this;
    }
    LoadingView.prototype.setProgress = function (current, total) {
        this.txtMsg.text = "资源加载中..." + current + "/" + total;
    };
    return LoadingView;
}(BaseEuiView));
__reflect(LoadingView.prototype, "LoadingView");
//# sourceMappingURL=LoadingView.js.map