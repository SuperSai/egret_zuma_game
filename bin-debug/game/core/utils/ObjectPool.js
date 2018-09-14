var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 对象池类
 */
var ObjectPool = (function () {
    /**
     * 构造函数
     */
    function ObjectPool() {
        this._objs = new Array();
    }
    /**
     * 放回一个对象
     * @param obj
     */
    ObjectPool.prototype.pushObj = function (obj) {
        this._objs.push(obj);
    };
    /**
     * 取出一个对象
     * @returns {*}
     */
    ObjectPool.prototype.popObj = function () {
        if (this._objs.length > 0) {
            return this._objs.pop();
        }
        else {
            return null;
        }
    };
    /**
     * 清除所有缓存对象
     */
    ObjectPool.prototype.clear = function () {
        while (this._objs.length > 0) {
            this._objs.pop();
        }
    };
    /**
     * 取出一个对象
     * @param classZ Class
     * @return Object
     *
     */
    ObjectPool.pop = function (refKey) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!ObjectPool._content[refKey]) {
            ObjectPool._content[refKey] = [];
        }
        var list = ObjectPool._content[refKey];
        if (list.length) {
            return list.pop();
        }
        else {
            var classZ = egret.getDefinitionByName(refKey);
            var argsLen = args.length;
            var obj;
            if (argsLen == 0) {
                obj = new classZ();
            }
            else if (argsLen == 1) {
                obj = new classZ(args[0]);
            }
            else if (argsLen == 2) {
                obj = new classZ(args[0], args[1]);
            }
            else if (argsLen == 3) {
                obj = new classZ(args[0], args[1], args[2]);
            }
            else if (argsLen == 4) {
                obj = new classZ(args[0], args[1], args[2], args[3]);
            }
            else if (argsLen == 5) {
                obj = new classZ(args[0], args[1], args[2], args[3], args[4]);
            }
            obj.ObjectPoolKey = refKey;
            return obj;
        }
    };
    /**
     * 取出一个对象
     * @param refKey Class
     * @param extraKey 标识值
     * @returns {any}
     */
    ObjectPool.popWithExtraKey = function (refKey, extraKey) {
        if (!ObjectPool._content[refKey]) {
            ObjectPool._content[refKey] = [];
        }
        var obj;
        var list = ObjectPool._content[refKey];
        if (list.length) {
            for (var i = 0; i < list.length; i++) {
                if (list[i].extraKey == extraKey) {
                    obj = list[i];
                    list.splice(i, 1);
                    break;
                }
            }
        }
        if (!obj) {
            var classZ = egret.getDefinitionByName(refKey);
            obj = new classZ(extraKey);
            obj.extraKey = extraKey;
            obj.ObjectPoolKey = refKey;
        }
        return obj;
    };
    /**
     * 放入一个对象
     * @param obj
     *
     */
    ObjectPool.push = function (obj) {
        if (obj == null) {
            return false;
        }
        var refKey = obj.ObjectPoolKey;
        //保证只有pop出来的对象可以放进来，或者是已经清除的无法放入
        if (!ObjectPool._content[refKey]) {
            return false;
        }
        ObjectPool._content[refKey].push(obj);
        return true;
    };
    /**
     * 清除所有对象
     */
    ObjectPool.clear = function () {
        ObjectPool._content = {};
    };
    /**
     * 清除某一类对象
     * @param classZ Class
     * @param clearFuncName 清除对象需要执行的函数
     */
    ObjectPool.clearClass = function (refKey, clearFuncName) {
        if (clearFuncName === void 0) { clearFuncName = null; }
        var list = ObjectPool._content[refKey];
        while (list && list.length) {
            var obj = list.pop();
            if (clearFuncName) {
                obj[clearFuncName]();
            }
            obj = null;
        }
        ObjectPool._content[refKey] = null;
        delete ObjectPool._content[refKey];
    };
    /**
     * 缓存中对象统一执行一个函数
     * @param classZ Class
     * @param dealFuncName 要执行的函数名称
     */
    ObjectPool.dealFunc = function (refKey, dealFuncName) {
        var list = ObjectPool._content[refKey];
        if (list == null) {
            return;
        }
        var i = 0;
        var len = list.length;
        for (i; i < len; i++) {
            list[i][dealFuncName]();
        }
    };
    ObjectPool._content = {};
    return ObjectPool;
}());
__reflect(ObjectPool.prototype, "ObjectPool");
//# sourceMappingURL=ObjectPool.js.map