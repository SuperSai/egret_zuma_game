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
 * Created by yangsong on 2014/11/22.
 * View基类，继承自egret.Sprite
 */
var BaseSpriteView = (function (_super) {
    __extends(BaseSpriteView, _super);
    /**
     * 构造函数
     * @param $controller 所属模块
     * @param $parent 父级
     */
    function BaseSpriteView($controller, $layer) {
        var _this = _super.call(this) || this;
        _this._resources = null;
        _this._controller = $controller;
        _this._myParent = App.LayerManager.getLayerByType($layer);
        _this._isInit = false;
        App.StageUtils.getStage().addEventListener(egret.Event.RESIZE, _this.onResize, _this);
        return _this;
    }
    /**
     * 设置初始加载资源
     * @param resources
     */
    BaseSpriteView.prototype.setResources = function (resources) {
        this._resources = resources;
    };
    Object.defineProperty(BaseSpriteView.prototype, "myParent", {
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
     * 是否已经初始化
     * @returns {boolean}
     */
    BaseSpriteView.prototype.isInit = function () {
        return this._isInit;
    };
    /**
     * 注册本模块消息
     * @param key 唯一标识
     * @param callbackFunc 侦听函数
     * @param callbackObj 侦听函数所属对象
     */
    BaseSpriteView.prototype.registerFunc = function (key, callbackFunc, callbackObj) {
        this._controller.registerFunc(key, callbackFunc, callbackObj);
    };
    /**
     * 触发本模块消息
     * @param key 唯一标识
     * @param param 参数
     *
     */
    BaseSpriteView.prototype.applyFunc = function (key) {
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
    BaseSpriteView.prototype.applyControllerFunc = function (controllerKey, key) {
        var param = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            param[_i - 2] = arguments[_i];
        }
        return this._controller.applyControllerFunc.apply(this._controller, arguments);
    };
    /**
     * 面板是否显示
     * @return
     *
     */
    BaseSpriteView.prototype.isShow = function () {
        return this.stage != null && this.visible;
    };
    /**
     * 添加到父级
     */
    BaseSpriteView.prototype.addToParent = function () {
        this._myParent.addChild(this);
    };
    /**
     * 从父级移除
     */
    BaseSpriteView.prototype.removeFromParent = function () {
        App.DisplayUtils.removeFromParent(this);
    };
    /**
     *对面板进行显示初始化，用于子类继承
     *
     */
    BaseSpriteView.prototype.initUI = function () {
        this._isInit = true;
    };
    /**
     *对面板数据的初始化，用于子类继承
     *
     */
    BaseSpriteView.prototype.initData = function () {
        this.addEvents();
    };
    /**
     * 面板开启执行函数，用于子类继承
     * @param param 参数
     */
    BaseSpriteView.prototype.open = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
    };
    /**
     * 添加监听事件
     */
    BaseSpriteView.prototype.addEvents = function () { };
    /**
     * 移除监听事件
     */
    BaseSpriteView.prototype.removeEvents = function () { };
    /**
     * 面板关闭执行函数，用于子类继承
     * @param param 参数
     */
    BaseSpriteView.prototype.close = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
    };
    /**
     * 销毁
     */
    BaseSpriteView.prototype.destroy = function () {
        this.removeEvents();
        this._controller = null;
        this._myParent = null;
        this._resources = null;
    };
    /**
     * 屏幕尺寸变化时调用
     */
    BaseSpriteView.prototype.onResize = function () {
    };
    /**
     * 加载面板所需资源
     * @param loadComplete
     * @param initComplete
     */
    BaseSpriteView.prototype.loadResource = function (loadComplete, initComplete) {
        if (this._resources && this._resources.length > 0) {
            App.ResUtil.loadGroup(this._resources, function () {
                loadComplete();
                initComplete();
            }, this);
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
    BaseSpriteView.prototype.setVisible = function (value) {
        this.visible = value;
    };
    Object.defineProperty(BaseSpriteView.prototype, "controller", {
        get: function () {
            return this._controller;
        },
        enumerable: true,
        configurable: true
    });
    return BaseSpriteView;
}(egret.DisplayObjectContainer));
__reflect(BaseSpriteView.prototype, "BaseSpriteView", ["IBaseView"]);
//# sourceMappingURL=BaseSpriteView.js.map