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
var LevelView = (function (_super) {
    __extends(LevelView, _super);
    function LevelView($controller, $layer) {
        var _this = _super.call(this, $controller, $layer) || this;
        _this.skinName = SkinName.LevelViewSkin;
        _this.setResources(["level"]);
        return _this;
    }
    /** 对面板进行显示初始化，用于子类继承 */
    LevelView.prototype.initUI = function () {
        _super.prototype.initUI.call(this);
        var self = this;
        self.btn_up.initUI();
        self.btn_next.initUI();
    };
    /** 对面板数据的初始化，用于子类继承 */
    LevelView.prototype.initData = function () {
        _super.prototype.initData.call(this);
    };
    LevelView.prototype.initMap = function () {
        var self = this;
        self._map = new LevelMap();
        self._map.init(self._levelModel);
        self.levelMapGroup.addChild(self._map);
    };
    /** 面板开启执行函数，用于子类继承 */
    LevelView.prototype.open = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        _super.prototype.open.call(this, param);
        var self = this;
        self._levelModel = param[0];
        self.initMap();
    };
    LevelView.prototype.addEvents = function () {
        _super.prototype.addEvents.call(this);
        var self = this;
        self.btn_stars.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onGetStarReward, self);
        self.setBtnEffect(["btn_stars"]);
    };
    LevelView.prototype.removeEvents = function () {
        _super.prototype.removeEvents.call(this);
        var self = this;
        self.btn_stars.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onGetStarReward, self);
    };
    /** 获取星星奖励 */
    LevelView.prototype.onGetStarReward = function () {
        var self = this;
    };
    return LevelView;
}(BaseEuiView));
__reflect(LevelView.prototype, "LevelView");
//# sourceMappingURL=LevelView.js.map