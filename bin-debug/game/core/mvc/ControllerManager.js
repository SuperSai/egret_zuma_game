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
 * Controller管理类
 */
var ControllerManager = (function (_super) {
    __extends(ControllerManager, _super);
    /**
     * 构造函数
     */
    function ControllerManager() {
        var _this = _super.call(this) || this;
        _this._modules = {};
        return _this;
    }
    /**
     * 清空处理
     */
    ControllerManager.prototype.clear = function () {
        this._modules = {};
    };
    /**
     * 动态添加的Controller
     * @param key 唯一标识
     * @param manager Manager
     *
     */
    ControllerManager.prototype.register = function (key, control) {
        if (this.isExists(key))
            return;
        this._modules[key] = control;
    };
    /**
     * 动态移除Controller
     * @param key 唯一标识
     *
     */
    ControllerManager.prototype.unregister = function (key) {
        if (!this.isExists(key))
            return;
        this._modules[key] = null;
        delete this._modules[key];
    };
    /**
     * 是否已经存在Controller
     * @param key 唯一标识
     * @return Boolean
     *
     */
    ControllerManager.prototype.isExists = function (key) {
        return this._modules[key] != null;
    };
    /**
     * 跨模块消息传递
     * @param controllerD Controller唯一标识
     * @param key 消息唯一标识
     *
     */
    ControllerManager.prototype.applyFunc = function (controllerD, key) {
        var param = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            param[_i - 2] = arguments[_i];
        }
        var manager = this._modules[controllerD];
        if (manager) {
            var params = [];
            for (var i = 1; i < arguments.length; i++) {
                params[i - 1] = arguments[i];
            }
            return manager.applyFunc.apply(manager, params);
        }
        else {
            Log.trace("模块" + controllerD + "不存在");
            return null;
        }
    };
    /**
     * 获取指定Controller的Model对象
     * @param controllerD Controller唯一标识
     * @returns {BaseModel}
     */
    ControllerManager.prototype.getControllerModel = function (controllerD) {
        var manager = this._modules[controllerD];
        if (manager) {
            return manager.getModel();
        }
        return null;
    };
    return ControllerManager;
}(BaseClass));
__reflect(ControllerManager.prototype, "ControllerManager");
//# sourceMappingURL=ControllerManager.js.map