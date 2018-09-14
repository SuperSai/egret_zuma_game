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
var LoginProxy = (function (_super) {
    __extends(LoginProxy, _super);
    function LoginProxy($controller) {
        var _this = _super.call(this, $controller) || this;
        //注册从服务器返回消息的监听
        _this.receiveServerMsg(HttpConst.USER_LOGIN, _this.loginSuccess, _this);
        return _this;
    }
    /**
     * 用户登陆
     * @param userName
     * @param pwd
     */
    LoginProxy.prototype.login = function (userName) {
        var paramObj = {
            "uName": userName,
        };
        this.sendHttpMsg(HttpConst.USER_LOGIN, paramObj);
    };
    /**
     * 用户登陆成功返回
     */
    LoginProxy.prototype.loginSuccess = function (obj) {
        this.applyFunc(LoginConst.LOGIN_SUCCESS, obj);
    };
    return LoginProxy;
}(BaseProxy));
__reflect(LoginProxy.prototype, "LoginProxy");
//# sourceMappingURL=LoginProxy.js.map