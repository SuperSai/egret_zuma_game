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
 * 控制器注册管理类
 */
var RegisterManager = (function (_super) {
    __extends(RegisterManager, _super);
    function RegisterManager() {
        return _super.call(this) || this;
    }
    /**
     * 初始化所有模块控制器
     */
    RegisterManager.prototype.initModules = function () {
        App.ControllerManager.register(ControllerConst.Loading, new LoadingController());
        App.ControllerManager.register(ControllerConst.Login, new LoginController());
        App.ControllerManager.register(ControllerConst.Battle, new BattleController());
        App.ControllerManager.register(ControllerConst.Hall, new HallController());
    };
    return RegisterManager;
}(BaseClass));
__reflect(RegisterManager.prototype, "RegisterManager");
//# sourceMappingURL=RegisterManager.js.map