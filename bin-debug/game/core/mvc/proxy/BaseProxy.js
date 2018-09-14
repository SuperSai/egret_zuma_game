var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Proxy基类
 */
var BaseProxy = (function () {
    /**
     * 构造函数
     * @param $controller 所属模块
     */
    function BaseProxy($controller) {
        this._controller = $controller;
    }
    /**
     * 触发本模块消息
     * @param key 唯一标识
     * @param param 参数
     *
     */
    BaseProxy.prototype.applyFunc = function (key) {
        var param = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            param[_i - 1] = arguments[_i];
        }
        return this._controller.applyFunc.apply(this._controller, arguments);
    };
    /**
     * 触发其他模块消息
     * @param controllerKey 模块标识
     * @param key 唯一标识
     * @param param 所需参数
     *
     */
    BaseProxy.prototype.applyControllerFunc = function (controllerKey, key) {
        var param = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            param[_i - 2] = arguments[_i];
        }
        return this._controller.applyControllerFunc.apply(this._controller, arguments);
    };
    /**
     * 注册从服务器返回消息的监听
     * @param key 消息标识
     * @param callbackFunc 处理函数
     * @param callbackObj 处理函数所属对象
     */
    BaseProxy.prototype.receiveServerMsg = function (key, callbackFunc, callbackObj) {
        App.MessageCenter.addListener(key, callbackFunc, callbackObj);
    };
    /**
     * 注册从服务器返回消息的监听，仅一次，执行完成后删除
     * @param key 消息标识
     * @param callbackFunc 处理函数
     * @param callbackObj 处理函数所属对象
     */
    BaseProxy.prototype.receiveServerMsgOnce = function (key, callbackFunc, callbackObj) {
        var callback = function (param) {
            this.removeServerMsg(key, callback, this);
            callbackFunc.apply(callbackObj, param);
        };
        this.receiveServerMsg(key, callback, this);
    };
    /**
     * 注册从Http服务端返回的Update消息
     * @param key 消息标识
     * @param callbackFunc 处理函数
     * @param callbackObj 处理函数所属对象
     */
    BaseProxy.prototype.receiveServerHttpUpdateMsg = function (key, callbackFunc, callbackObj) {
        this.receiveServerMsg(key + "_HttpUpdate", callbackFunc, callbackObj);
    };
    /**
     * 注册从Http服务端返回的Update消息，仅一次，执行完成后删除
     * @param key 消息标识
     * @param callbackFunc 处理函数
     * @param callbackObj 处理函数所属对象
     */
    BaseProxy.prototype.receiveServerHttpUpdateMsgOnce = function (key, callbackFunc, callbackObj) {
        this.receiveServerMsgOnce(key + "_HttpUpdate", callbackFunc, callbackObj);
    };
    /**
     * 移除服务端返回消息的监听
     * @param key 消息标识
     * @param callbackFunc 处理函数
     * @param callbackObj 处理函数所属对象
     */
    BaseProxy.prototype.removeServerMsg = function (key, callbackFunc, callbackObj) {
        App.MessageCenter.removeListener(key, callbackFunc, callbackObj);
    };
    /**
     * 移除从Http服务端返回的Update消息
     * @param key 消息标识
     * @param callbackFunc 处理函数
     * @param callbackObj 处理函数所属对象
     */
    BaseProxy.prototype.removeServerHttpUpdateMsg = function (key, callbackFunc, callbackObj) {
        this.removeServerMsg(key + "_HttpUpdate", callbackFunc, callbackObj);
    };
    /**
     * 发送消息到Socket服务器
     */
    BaseProxy.prototype.sendSocketMsg = function (msg) {
        // App.Socket.send(msg);
    };
    /**
     * 发送消息到Http服务端
     * @param type 消息标识 例如: User.login
     * @param paramObj 消息参数 例如: var paramObj:any = {"uName":uName, "uPass":uPass};
     */
    BaseProxy.prototype.sendHttpMsg = function (type, paramObj) {
        if (paramObj === void 0) { paramObj = null; }
        App.Http.send(type, this.getURLVariables(type, paramObj));
    };
    /**
     * 将参数转换为URLVariables
     * @param t_type
     * @param t_paramObj
     * @returns {egret.URLVariables}
     */
    BaseProxy.prototype.getURLVariables = function (t_type, t_paramObj) {
        var typeArr = t_type.split(".");
        var paramObj = {};
        paramObj["mod"] = typeArr[0];
        paramObj["do"] = typeArr[1];
        if (t_paramObj != null) {
            paramObj["p"] = t_paramObj;
        }
        var param = JSON.stringify(paramObj);
        var variables = new egret.URLVariables("data=" + param + "&h=" + App.ProxyUserFlag);
        return variables;
    };
    return BaseProxy;
}());
__reflect(BaseProxy.prototype, "BaseProxy");
//# sourceMappingURL=BaseProxy.js.map