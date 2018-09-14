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
 * Created by yangsong on 15-1-26.
 * 键盘工具类
 */
var KeyboardUtils = (function (_super) {
    __extends(KeyboardUtils, _super);
    /**
     * 构造函数
     */
    function KeyboardUtils() {
        var _this = _super.call(this) || this;
        _this.key_ups = new Array();
        _this.key_downs = new Array();
        if (App.DeviceUtils.IsHtml5) {
            var self = _this;
            document.addEventListener("keyup", function (e) {
                for (var i = 0, len = self.key_ups.length; i < len; i++) {
                    var func = self.key_ups[i][0];
                    var target = self.key_ups[i][1];
                    if (target) {
                        func.call(target, e["keyCode"]);
                    }
                    else {
                        func(e["keyCode"]);
                    }
                }
            });
            document.addEventListener("keydown", function (e) {
                for (var i = 0, len = self.key_downs.length; i < len; i++) {
                    var func = self.key_downs[i][0];
                    var target = self.key_downs[i][1];
                    if (target) {
                        func.call(target, e["keyCode"]);
                    }
                    else {
                        func(e["keyCode"]);
                    }
                }
            });
        }
        return _this;
    }
    /**
     * 添加KeyUp事件
     * @param callback 回调函数
     * @param target 回调函数对应的对象
     */
    KeyboardUtils.prototype.addKeyUp = function (callback, target) {
        this.key_ups.push([callback, target]);
    };
    /**
     * 添加KeyDown事件
     * @param callback 回调函数
     * @param target 回调函数对应的对象
     */
    KeyboardUtils.prototype.addKeyDown = function (callback, target) {
        this.key_downs.push([callback, target]);
    };
    /**
     * 移除KeyUp事件
     * @param callback 回调函数
     * @param target 回调函数对应的对象
     */
    KeyboardUtils.prototype.removeKeyUp = function (callback, target) {
        for (var i = 0; i < this.key_ups.length; i++) {
            if (this.key_ups[i][0] == callback && this.key_ups[i][1] == target) {
                this.key_ups.splice(i, 1);
                i--;
            }
        }
    };
    /**
     * 移除KeyDown事件
     * @param callback 回调函数
     * @param target 回调函数对应的对象
     */
    KeyboardUtils.prototype.removeKeyDown = function (callback, target) {
        for (var i = 0; i < this.key_downs.length; i++) {
            if (this.key_downs[i][0] == callback && this.key_downs[i][1] == target) {
                this.key_downs.splice(i, 1);
                i--;
            }
        }
    };
    return KeyboardUtils;
}(BaseClass));
__reflect(KeyboardUtils.prototype, "KeyboardUtils");
//# sourceMappingURL=KeyboardUtils.js.map