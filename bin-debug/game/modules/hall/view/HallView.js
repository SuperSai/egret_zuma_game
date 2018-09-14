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
var modules;
(function (modules) {
    var hall;
    (function (hall) {
        /**
         * 大厅主界面
         */
        var HallView = (function (_super) {
            __extends(HallView, _super);
            function HallView($controller, $layer) {
                var _this = _super.call(this, $controller, $layer) || this;
                _this.skinName = SkinName.HallViewSkin;
                return _this;
            }
            /** 对面板进行显示初始化，用于子类继承 */
            HallView.prototype.initUI = function () {
                _super.prototype.initUI.call(this);
                var self = this;
                self.currency.initUI();
            };
            /** 对面板数据的初始化，用于子类继承 */
            HallView.prototype.initData = function () {
                _super.prototype.initData.call(this);
            };
            /** 面板开启执行函数，用于子类继承 */
            HallView.prototype.open = function () {
                var param = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    param[_i] = arguments[_i];
                }
                _super.prototype.open.call(this, param);
                var self = this;
                var model = param[0];
            };
            HallView.prototype.addEvents = function () {
                _super.prototype.addEvents.call(this);
                var self = this;
                self.btn_checkpoint.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onGotoCheckpoint, self);
                self.setBtnEffect(["btn_checkpoint"]);
            };
            HallView.prototype.removeEvents = function () {
                _super.prototype.removeEvents.call(this);
                var self = this;
                self.btn_checkpoint.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onGotoCheckpoint, self);
            };
            /** 进入关卡选择界面 */
            HallView.prototype.onGotoCheckpoint = function () {
                var self = this;
            };
            return HallView;
        }(BaseEuiView));
        hall.HallView = HallView;
        __reflect(HallView.prototype, "modules.hall.HallView");
    })(hall = modules.hall || (modules.hall = {}));
})(modules || (modules = {}));
//# sourceMappingURL=HallView.js.map