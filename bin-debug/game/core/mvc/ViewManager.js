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
var ViewManager = (function (_super) {
    __extends(ViewManager, _super);
    /**
     * 构造函数
     */
    function ViewManager() {
        var _this = _super.call(this) || this;
        _this._views = {};
        _this._opens = [];
        return _this;
    }
    /**
     * 清空处理
     */
    ViewManager.prototype.clear = function () {
        this.closeAll();
        this._views = {};
    };
    /**
     * 面板注册
     * @param key 面板唯一标识
     * @param view 面板
     */
    ViewManager.prototype.register = function (key, view) {
        if (view == null) {
            return;
        }
        if (this._views[key]) {
            return;
        }
        this._views[key] = view;
    };
    /**
     * 面板解除注册
     * @param key
     */
    ViewManager.prototype.unregister = function (key) {
        if (!this._views[key]) {
            return;
        }
        this._views[key] = null;
        delete this._views[key];
    };
    /**
     * 销毁一个面板
     * @param key 唯一标识
     * @param newView 新面板
     */
    ViewManager.prototype.destroy = function (key, newView) {
        if (newView === void 0) { newView = null; }
        var oldView = this.getView(key);
        if (oldView) {
            this.unregister(key);
            oldView.destroy();
            oldView = null;
        }
        this.register(key, newView);
    };
    /**
     * 开启面板
     * @param key 面板唯一标识
     * @param param 参数
     *
     */
    ViewManager.prototype.open = function (key) {
        var param = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            param[_i - 1] = arguments[_i];
        }
        var view = this.getView(key);
        if (view == null) {
            Log.trace("UI_" + key + "不存在");
            return;
        }
        if (view.isShow()) {
            view.open.apply(view, param);
            return view;
        }
        if (view.isInit()) {
            view.addToParent();
            view.open.apply(view, param);
        }
        else {
            App.GameLoading.showLoading();
            view.loadResource(function () {
                view.setVisible(false);
                view.addToParent();
            }.bind(this), function () {
                view.initUI();
                view.open.apply(view, param);
                view.initData();
                view.setVisible(true);
                App.GameLoading.hideLoading();
            }.bind(this));
        }
        this._opens.push(key);
        return view;
    };
    /**
     * 关闭面板
     * @param key 面板唯一标识
     * @param param 参数
     *
     */
    ViewManager.prototype.close = function (key) {
        var param = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            param[_i - 1] = arguments[_i];
        }
        if (!this.isShow(key)) {
            return;
        }
        var view = this.getView(key);
        if (view == null) {
            return;
        }
        var viewIndex = this._opens.indexOf(key);
        if (viewIndex >= 0) {
            this._opens.splice(viewIndex, 1);
        }
        view.removeFromParent();
        view.close.apply(view, param);
    };
    /**
     * 关闭面板
     * @param view
     * @param param
     */
    ViewManager.prototype.closeView = function (view) {
        var param = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            param[_i - 1] = arguments[_i];
        }
        var keys = Object.keys(this._views);
        for (var i = 0, len = keys.length; i < len; i++) {
            var key = parseInt(keys[i]);
            if (this._views[key] == view) {
                this.close(key, param);
                return;
            }
        }
    };
    /**
     * 根据唯一标识获取一个UI对象
     * @param key
     * @returns {any}
     */
    ViewManager.prototype.getView = function (key) {
        return this._views[key];
    };
    /**
     * 关闭所有开启中的UI
     */
    ViewManager.prototype.closeAll = function () {
        while (this._opens.length) {
            this.close(this._opens[0]);
        }
    };
    /**
     * 当前ui打开数量
     * @returns {number}
     */
    ViewManager.prototype.currOpenNum = function () {
        return this._opens.length;
    };
    /**
     * 检测一个UI是否开启中
     * @param key
     * @returns {boolean}
     */
    ViewManager.prototype.isShow = function (key) {
        return this._opens.indexOf(key) != -1;
    };
    return ViewManager;
}(BaseClass));
__reflect(ViewManager.prototype, "ViewManager");
//# sourceMappingURL=ViewManager.js.map