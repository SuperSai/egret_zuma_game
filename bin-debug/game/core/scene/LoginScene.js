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
 * 登陆场景层
 */
var LoginScene = (function (_super) {
    __extends(LoginScene, _super);
    /**
     * 构造函数
     */
    function LoginScene() {
        return _super.call(this) || this;
    }
    /**
     * 进入Scene调用
     */
    LoginScene.prototype.onEnter = function () {
        _super.prototype.onEnter.call(this);
        //初始打开Login页面
        App.ViewManager.open(ViewConst.Login);
    };
    /**
     * 退出Scene调用
     */
    LoginScene.prototype.onExit = function () {
        _super.prototype.onExit.call(this);
    };
    return LoginScene;
}(BaseScene));
__reflect(LoginScene.prototype, "LoginScene");
//# sourceMappingURL=LoginScene.js.map