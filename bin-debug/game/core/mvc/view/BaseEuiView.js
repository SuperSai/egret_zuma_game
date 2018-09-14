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
 * View基类，继承自eui.Component
 */
var BaseEuiView = (function (_super) {
    __extends(BaseEuiView, _super);
    /**
     * 构造函数
     * @param $controller 所属模块
     * @param $parent 父级
     */
    function BaseEuiView($controller, $layer) {
        var _this = _super.call(this) || this;
        _this._resources = null;
        _this._btnEffect = null;
        _this._controller = $controller;
        _this._myParent = App.LayerManager.getLayerByType($layer);
        _this._isInit = false;
        _this.percentHeight = 100;
        _this.percentWidth = 100;
        return _this;
    }
    Object.defineProperty(BaseEuiView.prototype, "myParent", {
        /**
         * 获取我的父级
         * @returns {egret.DisplayObjectContainer}
         */
        get: function () {
            return this._myParent;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 设置初始加载资源
     * @param resources
     */
    BaseEuiView.prototype.setResources = function (resources) {
        this._resources = resources;
    };
    /**
     * 是否已经初始化
     * @returns {boolean}
     */
    BaseEuiView.prototype.isInit = function () {
        return this._isInit;
    };
    /**
     * 注册本模块消息
     * @param key 唯一标识
     * @param callbackFunc 侦听函数
     * @param callbackObj 侦听函数所属对象
     */
    BaseEuiView.prototype.registerFunc = function (key, callbackFunc, callbackObj) {
        this._controller.registerFunc(key, callbackFunc, callbackObj);
    };
    /**
     * 触发本模块消息
     * @param key 唯一标识
     * @param param 参数
     */
    BaseEuiView.prototype.applyFunc = function (key) {
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
     */
    BaseEuiView.prototype.applyControllerFunc = function (controllerKey, key) {
        var param = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            param[_i - 2] = arguments[_i];
        }
        return this._controller.applyControllerFunc.apply(this._controller, arguments);
    };
    /**
     * 面板是否显示
     */
    BaseEuiView.prototype.isShow = function () {
        return this.stage != null && this.visible;
    };
    /**
     * 添加到父级
     */
    BaseEuiView.prototype.addToParent = function () {
        this._myParent.addChild(this);
    };
    /**
     * 从父级移除
     */
    BaseEuiView.prototype.removeFromParent = function () {
        App.DisplayUtils.removeFromParent(this);
    };
    /**
     *对面板进行显示初始化，用于子类继承
     */
    BaseEuiView.prototype.initUI = function () {
        this._isInit = true;
        this.addEvents();
    };
    /**
     * 对面板数据的初始化，用于子类继承
     */
    BaseEuiView.prototype.initData = function () { };
    /**
     * 设置按钮效果
     */
    BaseEuiView.prototype.setBtnEffect = function (btnName) {
        var self = this;
        if (self._btnEffect == null) {
            self._btnEffect = new UI.BtnEffectComponent(self, btnName);
        }
    };
    /**
     * 添加监听事件
     */
    BaseEuiView.prototype.addEvents = function () { };
    /**
     * 移除监听事件
     */
    BaseEuiView.prototype.removeEvents = function () { };
    /**
     * 销毁
     */
    BaseEuiView.prototype.destroy = function () {
        this.removeEvents();
        if (this._btnEffect)
            this._btnEffect.dispose();
        this._btnEffect = null;
        this._controller = null;
        this._myParent = null;
        this._resources = null;
    };
    /**
     * 面板开启执行函数，用于子类继承
     * @param param 参数
     */
    BaseEuiView.prototype.open = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
    };
    /**
     * 面板关闭执行函数，用于子类继承
     * @param param 参数
     */
    BaseEuiView.prototype.close = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
    };
    /**
     /**
     * 加载面板所需资源
     */
    BaseEuiView.prototype.loadResource = function (loadComplete, initComplete) {
        if (this._resources && this._resources.length > 0) {
            App.ResUtil.loadGroup(this._resources, loadComplete, this);
            this.once(eui.UIEvent.CREATION_COMPLETE, initComplete, this);
        }
        else {
            loadComplete();
            initComplete();
        }
    };
    /**
     * 设置是否隐藏
     * @param value
     */
    BaseEuiView.prototype.setVisible = function (value) {
        this.visible = value;
    };
    return BaseEuiView;
}(eui.Component));
__reflect(BaseEuiView.prototype, "BaseEuiView", ["IBaseView"]);
//# sourceMappingURL=BaseEuiView.js.map