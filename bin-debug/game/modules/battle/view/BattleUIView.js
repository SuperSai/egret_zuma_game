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
/**
 * 战斗场景中的EUI界面
 */
var BattleUIView = (function (_super) {
    __extends(BattleUIView, _super);
    function BattleUIView($controller, $layer) {
        var _this = _super.call(this, $controller, $layer) || this;
        _this.skinName = SkinName.BattleUIViewSkin;
        return _this;
    }
    /** 对面板进行显示初始化，用于子类继承 */
    BattleUIView.prototype.initUI = function () {
        _super.prototype.initUI.call(this);
        var self = this;
    };
    /** 对面板数据的初始化，用于子类继承 */
    BattleUIView.prototype.initData = function () {
        _super.prototype.initData.call(this);
    };
    /** 面板开启执行函数，用于子类继承 */
    BattleUIView.prototype.open = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        _super.prototype.open.call(this, param);
        var self = this;
        var model = param[0];
    };
    BattleUIView.prototype.addEvents = function () {
        _super.prototype.addEvents.call(this);
        var self = this;
        self.registerFunc(BattleConst.UPDATE_MAXCOBOM, self.onUpdateMaxCobom, self);
    };
    BattleUIView.prototype.removeEvents = function () {
        _super.prototype.removeEvents.call(this);
        var self = this;
    };
    /** 更新最大连击数 */
    BattleUIView.prototype.onUpdateMaxCobom = function (maxCobom) {
        var self = this;
        self.txt_maxCobom.text = maxCobom + "";
    };
    /** 面板关闭执行函数，用于子类继承 */
    BattleUIView.prototype.close = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        _super.prototype.close.call(this, param);
    };
    return BattleUIView;
}(BaseEuiView));
__reflect(BattleUIView.prototype, "BattleUIView");
//# sourceMappingURL=BattleUIView.js.map