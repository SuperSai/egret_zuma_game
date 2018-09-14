var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Controller基类
 */
var BaseController = (function () {
    /**
     * 构造函数
     */
    function BaseController() {
        this._messages = {};
    }
    /**
     * 注册本模块消息
     * @param key 唯一标识
     * @param callbackFunc 侦听函数
     * @param callbackObj 侦听函数所属对象
     */
    BaseController.prototype.registerFunc = function (key, callbackFunc, callbackObj) {
        this._messages[key] = [callbackFunc, callbackObj];
    };
    /**
     * 触发本模块消息
     * @param key 唯一标识
     * @param param 所需参数
     *
     */
    BaseController.prototype.applyFunc = function (key) {
        var param = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            param[_i - 1] = arguments[_i];
        }
        var listen = this._messages[key];
        if (listen) {
            return listen[0].apply(listen[1], param);
        }
        else {
            Log.trace("消息" + key + "不存在侦听");
            return null;
        }
    };
    /**
     * 触发其他模块消息
     * @param controllerKey 模块标识
     * @param key 唯一标识
     * @param param 所需参数
     *
     */
    BaseController.prototype.applyControllerFunc = function (controllerKey, key) {
        var param = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            param[_i - 2] = arguments[_i];
        }
        return App.ControllerManager.applyFunc.apply(App.ControllerManager, arguments);
    };
    /**
     * 设置该模块使用的Model对象
     * @param model
     */
    BaseController.prototype.setModel = function (model) {
        this._model = model;
    };
    /**
     * 获取该模块的Model对象
     * @returns {BaseModel}
     */
    BaseController.prototype.getModel = function () {
        return this._model;
    };
    /**
     * 获取指定Controller的Model对象
     * @param controllerD Controller唯一标识
     * @returns {BaseModel}
     */
    BaseController.prototype.getControllerModel = function (controllerD) {
        return App.ControllerManager.getControllerModel(controllerD);
    };
    return BaseController;
}());
__reflect(BaseController.prototype, "BaseController");
//# sourceMappingURL=BaseController.js.map