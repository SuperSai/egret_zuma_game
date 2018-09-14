var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ResourcePool = (function () {
    function ResourcePool() {
        this.main = {};
        this.main[ResourcePool.SKE] = {};
        this.main[ResourcePool.BITMAPTEXT] = {};
        this.main[ResourcePool.BITMAP] = {};
    }
    Object.defineProperty(ResourcePool, "Intance", {
        get: function () {
            if (!this._ins)
                this._ins = new ResourcePool();
            return this._ins;
        },
        enumerable: true,
        configurable: true
    });
    ResourcePool.createOneByType = function (type, resId) {
        if (resId == ResourcePool.Trace_ID)
            LogManager.logFormat("ResourcePool . {0} : {1}", "createOneByType", resId);
        switch (type) {
            case ResourcePool.SKE:
                var ske = new BoneAnimation(resId);
                var info = BoneConfig.copyValueFromTemplate(ske, resId);
                ske.name = resId;
                ske.load();
                return ske;
            case ResourcePool.BITMAPTEXT:
                var text = new egret.BitmapText();
                text.name = resId;
                text.font = RES.getRes(resId);
                return text;
            case ResourcePool.BITMAP:
                var bitmap = new egret.Bitmap();
                bitmap.name = resId;
                bitmap.texture = RES.getRes(resId);
                return bitmap;
        }
        LogManager.errorFormat("Can't Create Instance of : " + type + "with ResId: " + resId);
    };
    ResourcePool.prototype.getPoolByType = function (type) {
        switch (type) {
            case ResourcePool.SKE:
                return this.main[ResourcePool.SKE];
            case ResourcePool.BITMAPTEXT:
                return this.main[ResourcePool.BITMAPTEXT];
            case ResourcePool.BITMAP:
                return this.main[ResourcePool.BITMAP];
        }
        return null;
    };
    ResourcePool.prepareItem = function (item, type) {
        switch (type) {
            case ResourcePool.SKE:
                if (item instanceof BoneAnimation) {
                    item.initBone();
                }
                else {
                    LogManager.errorFormat("item type not match!!" + item.name + "  type :" + type);
                }
                break;
        }
    };
    /*获取对象
    * @resId 需要获取的对象的ID
    * @type 获取对象的类型 例如：ResourcePool.SKE
    */
    ResourcePool.prototype.pop = function (resId, type) {
        var pool = this.getPoolByType(type);
        if (pool[resId] == null) {
            pool[resId] = [];
        }
        if (resId == ResourcePool.Trace_ID)
            LogManager.logFormat("ResourcePool . {0} : {1}", "pop", resId);
        var list = pool[resId];
        if (list.length > 0) {
            var item = list.pop();
            ResourcePool.prepareItem(item, type);
            return item;
        }
        return ResourcePool.createOneByType(type, resId);
    };
    /**
     * 回收对象
     * @obj 需要回收的对象
     */
    ResourcePool.prototype.push = function (obj, type) {
        if (obj == null)
            return;
        var pool = this.getPoolByType(type);
        if (pool[obj.name] == null) {
            console.log("回收对象的数组不存在", obj.name);
            return;
        }
        if (obj.name == ResourcePool.Trace_ID)
            LogManager.logFormat("ResourcePool . {0} : {1}", "push", obj.name);
        pool[obj.name].push(obj);
        //remove item
        var container = obj.parent;
        if (container != null)
            container.removeChild(obj);
        //reset item
        App.DisplayUtils.resetDisplay(obj);
        if (obj["resetForPool"]) {
            obj["resetForPool"]();
        }
    };
    /**
     * 创建对象(用于将要大量使用前，预先创建，防止使用时大量创建卡顿)
     * @className 对象类定义
     * @num 创建数量
     * @args 构造函数传参
     */
    ResourcePool.prototype.create = function (resId, type, num) {
        if (num === void 0) { num = 1; }
        var i;
        var list = [];
        if (resId == ResourcePool.Trace_ID)
            LogManager.logFormat("ResourcePool . {0} : {1}  {2}", "create", resId, num);
        for (i = 0; i < num; i++) {
            list.push(this.pop(resId, type));
        }
        for (i = 0; i < num; i++) {
            this.push(list.pop(), type);
        }
    };
    ResourcePool.prototype.hasItem = function (obj, type) {
        if (obj == null)
            return false;
        var pool = this.getPoolByType(type);
        if (pool[obj.name] == null)
            return false;
        var list = pool[obj.name];
        return list.indexOf(obj) >= 0;
    };
    /**
     * 获取对象池对象数量
     * @className 对象类定义
     * @return 对象数量
     */
    ResourcePool.prototype.getLen = function (resId, type) {
        var pool = this.getPoolByType(type);
        if (pool[resId]) {
            return pool[resId].length;
        }
        return 0;
    };
    /**
     * 清理对象
     * @resId 需要清理的对象的类型id 如果为空字符串则会清理传入的类型的所有对象
    * @type 清理前执行指定函数
     * @funName 默认会调用dispose方法
     */
    ResourcePool.prototype.clear = function (resId, type, funName) {
        if (funName === void 0) { funName = "dispose"; }
        var pool = this.getPoolByType(type);
        if (resId == ResourcePool.Trace_ID)
            LogManager.logFormat("ResourcePool . {0} : {1}  {2}", "clear", resId, type);
        if (resId == "") {
            for (var key in pool) {
                clearItem(pool[key]);
            }
        }
        else {
            clearItem(pool[resId]);
        }
        function clearItem(item) {
            if (item != null) {
                funName && this.dealFun(item.name, type, funName);
                item = null;
                delete pool[item.name];
            }
        }
    };
    /**
     * 对象池所有对象执行指定函数
     * @className 对象类定义
     * @funName 函数名
     */
    ResourcePool.prototype.dealFun = function (resId, type, funName) {
        var pool = this.getPoolByType(type);
        if (pool[resId]) {
            var list = pool[resId];
            var len = list.length;
            for (var i = 0; i < len; i++) {
                list[i][funName] && list[i][funName]();
            }
        }
    };
    ResourcePool.prototype.printAll = function () {
        LogManager.logFormat("Start Print All Resource-------------");
        var allCount = 0;
        for (var key in this.main) {
            LogManager.logFormat("Start Print All Resource by type : " + key + "==================");
            for (var pKey in this.main[key]) {
                var length_1 = this.main[key][pKey].length;
                LogManager.logFormat("key :" + pKey + "  count:" + length_1);
                allCount += length_1;
            }
        }
        LogManager.logFormat("Start Print All Resource count : " + allCount + "==================");
    };
    //UI 里面的骨骼动画
    ResourcePool.SKE = "Animation";
    //游戏里面的位图字体，比如伤害数字，恢复数字等
    ResourcePool.BITMAPTEXT = "BitmapText";
    //需要缓存的位图， 如暴击的位图，低HP的警告位图
    ResourcePool.BITMAP = "Bitmap";
    ResourcePool.Trace_ID = "tx_01";
    return ResourcePool;
}());
__reflect(ResourcePool.prototype, "ResourcePool");
//# sourceMappingURL=ResourcePool.js.map