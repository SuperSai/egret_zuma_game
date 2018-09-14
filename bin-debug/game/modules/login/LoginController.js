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
var LoginController = (function (_super) {
    __extends(LoginController, _super);
    function LoginController() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    LoginController.prototype.init = function () {
        var self = this;
        //初始化Model
        self._loginModel = new LoginModel(self);
        //初始化UI界面
        self._loginView = new LoginView(self, LayerManager.GAME_UI_LAYER);
        App.ViewManager.register(ViewConst.Login, self._loginView);
        //初始化Proxy
        this._loginProxy = new LoginProxy(this);
        //注册登陆消息
        self.registerMessage();
    };
    /** 注册消息 */
    LoginController.prototype.registerMessage = function () {
        var self = this;
        //注册C2S消息
        this.registerFunc(LoginConst.LOGIN_SEND_SERVER, this.onLogin, this);
        //注册S2C消息
        this.registerFunc(LoginConst.LOGIN_SUCCESS, this.loginSuccess, this);
    };
    /**
     * 请求登陆处理
     * @param userName
     * @param pwd
     */
    LoginController.prototype.onLogin = function (userName) {
        this._loginProxy.login(userName);
    };
    /**
     * 登陆成功处理
     */
    LoginController.prototype.loginSuccess = function (userInfo) {
        var self = this;
        //保存数据
        self._loginModel.userInfo = userInfo;
        //本模块UI处理
        self._loginView.loginSuccess();
        //UI跳转
        App.ViewManager.close(ViewConst.Login);
        var model = self.getControllerModel(ControllerConst.Login);
    };
    return LoginController;
}(BaseController));
__reflect(LoginController.prototype, "LoginController");
//# sourceMappingURL=LoginController.js.map