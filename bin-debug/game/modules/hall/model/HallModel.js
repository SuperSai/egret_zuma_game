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
var HallModel = (function (_super) {
    __extends(HallModel, _super);
    function HallModel($controller) {
        return _super.call(this, $controller) || this;
    }
    return HallModel;
}(BaseModel));
__reflect(HallModel.prototype, "HallModel");
//# sourceMappingURL=HallModel.js.map