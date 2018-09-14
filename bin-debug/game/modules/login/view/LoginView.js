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
 * 登陆界面
 */
var LoginView = (function (_super) {
    __extends(LoginView, _super);
    function LoginView($controller, $layer) {
        var _this = _super.call(this, $controller, $layer) || this;
        _this.skinName = SkinName.LoginSkin;
        _this.setResources(["login"]);
        return _this;
    }
    /** 对面板进行显示初始化，用于子类继承 */
    LoginView.prototype.initUI = function () {
        _super.prototype.initUI.call(this);
        var self = this;
    };
    /** 对面板数据的初始化，用于子类继承 */
    LoginView.prototype.initData = function () {
        _super.prototype.initData.call(this);
        var self = this;
        var vertexSrc = "attribute vec2 aVertexPosition;\n" +
            "attribute vec2 aTextureCoord;\n" +
            "attribute vec2 aColor;\n" +
            "uniform vec2 projectionVector;\n" +
            "varying vec2 vTextureCoord;\n" +
            "varying vec4 vColor;\n" +
            "const vec2 center = vec2(-1.0, 1.0);\n" +
            "void main(void) {\n" +
            "   gl_Position = vec4( (aVertexPosition / projectionVector) + center , 0.0, 1.0);\n" +
            "   vTextureCoord = aTextureCoord;\n" +
            "   vColor = vec4(aColor.x, aColor.x, aColor.x, aColor.x);\n" +
            "}";
        var fragmentSrc3 = [
            "precision lowp float;\n" +
                "varying vec2 vTextureCoord;",
            "varying vec4 vColor;\n",
            "uniform sampler2D uSampler;",
            "uniform vec2 center;",
            "uniform vec3 params;",
            "uniform float time;",
            "void main()",
            "{",
            "vec2 uv = vTextureCoord.xy;",
            "vec2 texCoord = uv;",
            "float dist = distance(uv, center);",
            "if ( (dist <= (time + params.z)) && (dist >= (time - params.z)) )",
            "{",
            "float diff = (dist - time);",
            "float powDiff = 1.0 - pow(abs(diff*params.x), params.y);",
            "float diffTime = diff  * powDiff;",
            "vec2 diffUV = normalize(uv - center);",
            "texCoord = uv + (diffUV * diffTime);",
            "}",
            "gl_FragColor = texture2D(uSampler, texCoord);",
            "}"
        ].join("\n");
        var customFilter3 = new egret.CustomFilter(vertexSrc, fragmentSrc3, {
            center: { x: 0.5, y: 0.5 },
            params: { x: 10, y: 0.8, z: 0.1 },
            time: 0
        });
        App.TimerManager.doFrame(0, 0, function () {
            customFilter3.uniforms.time += 0.01;
            if (customFilter3.uniforms.time > 1) {
                customFilter3.uniforms.time = 0.0;
            }
        }, self);
        self.bgImg.filters = [customFilter3];
    };
    /** 面板开启执行函数，用于子类继承 */
    LoginView.prototype.open = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        _super.prototype.open.call(this, param);
    };
    LoginView.prototype.addEvents = function () {
        _super.prototype.addEvents.call(this);
        var self = this;
        self.btn_random.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onRandomName, self);
        self.btn_enter.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onLogin, self);
        self.setBtnEffect(["btn_random", "btn_enter"]);
    };
    LoginView.prototype.removeEvents = function () {
        _super.prototype.removeEvents.call(this);
        var self = this;
        self.btn_random.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onRandomName, self);
        self.btn_enter.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onLogin, self);
    };
    /** 面板关闭执行函数，用于子类继承 */
    LoginView.prototype.close = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        _super.prototype.close.call(this, param);
    };
    /** 请求登陆处理 */
    LoginView.prototype.onLogin = function () {
        var self = this;
        if (self.txt_input.text == "") {
            return;
        }
        App.SceneManager.clear();
        // App.SceneManager.runScene(SceneConsts.BATTLE, [10000, 10000]);
        App.SceneManager.runScene(SceneConsts.HALL);
        // this.applyFunc(LoginConst.LOGIN_SEND_SERVER, self.txt_input.text);
    };
    /** 随机用户名 */
    LoginView.prototype.onRandomName = function () {
        var self = this;
    };
    /** 登陆成功处理 */
    LoginView.prototype.loginSuccess = function () {
        //TODO 登陆成功处理
    };
    return LoginView;
}(BaseEuiView));
__reflect(LoginView.prototype, "LoginView");
//# sourceMappingURL=LoginView.js.map