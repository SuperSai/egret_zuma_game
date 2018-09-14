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
var LoginModel = (function (_super) {
    __extends(LoginModel, _super);
    /**
     * 构造函数
     * @param $controller 所属模块
     */
    function LoginModel($controller) {
        return _super.call(this, $controller) || this;
    }
    return LoginModel;
}(BaseModel));
__reflect(LoginModel.prototype, "LoginModel");
//# sourceMappingURL=LoginModel.js.map