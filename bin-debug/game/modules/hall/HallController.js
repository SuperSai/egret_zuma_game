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
var HallController = (function (_super) {
    __extends(HallController, _super);
    function HallController() {
        var _this = _super.call(this) || this;
        var self = _this;
        //View初始化
        _this._hall = new modules.hall.HallView(_this, LayerManager.GAME_MAP_LAYER);
        App.ViewManager.register(ViewConst.Hall, _this._hall);
        _this._hallModel = new HallModel(_this);
        //注册模块消息
        _this.registerFunc(HallConst.HALL_INIT, _this.onHallInit, _this);
        return _this;
    }
    HallController.prototype.onHallInit = function (param) {
        var self = this;
        App.ViewManager.open(ViewConst.Hall, self._hallModel);
    };
    return HallController;
}(BaseController));
__reflect(HallController.prototype, "HallController");
//# sourceMappingURL=HallController.js.map