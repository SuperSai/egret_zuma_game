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
var DisplayLayer = (function (_super) {
    __extends(DisplayLayer, _super);
    function DisplayLayer() {
        var _this = _super.call(this) || this;
        _this.layerName = "";
        _this.layerType = -1;
        var self = _this;
        return _this;
    }
    return DisplayLayer;
}(eui.UILayer));
__reflect(DisplayLayer.prototype, "DisplayLayer");
//# sourceMappingURL=DisplayLayer.js.map