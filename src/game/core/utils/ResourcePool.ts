class ResourcePool {
    public constructor() {
        this.main = {};
        this.main[ResourcePool.SKE] = {};
        this.main[ResourcePool.BITMAPTEXT] = {};
        this.main[ResourcePool.BITMAP] = {};
    }
    //UI 里面的骨骼动画
    public static SKE: string = "Animation";
    //游戏里面的位图字体，比如伤害数字，恢复数字等
    public static BITMAPTEXT: string = "BitmapText";
    //需要缓存的位图， 如暴击的位图，低HP的警告位图
    public static BITMAP: string = "Bitmap";
    //存储所有对象的主容器
    private main: Object;

    private static _ins: ResourcePool;
    public static get Intance(): ResourcePool {
        if (!this._ins) this._ins = new ResourcePool();
        return this._ins;
    }

    private static Trace_ID: string = "tx_01";

    private static createOneByType(type: string, resId: string): any {
        if (resId == ResourcePool.Trace_ID) Log.trace("ResourcePool . {0} : {1}", "createOneByType", resId);
        switch (type) {
            case ResourcePool.SKE:
                let ske = new BoneAnimation(resId);
                let info = BoneConfig.copyValueFromTemplate(ske, resId);
                ske.name = resId;
                ske.load();
                return ske;
            case ResourcePool.BITMAPTEXT:
                let text: egret.BitmapText = new egret.BitmapText();
                text.name = resId;
                text.font = RES.getRes(resId);
                return text;
            case ResourcePool.BITMAP:
                let bitmap: egret.Bitmap = new egret.Bitmap();
                bitmap.name = resId;
                bitmap.texture = RES.getRes(resId);
                return bitmap;

        }
        LogManager.errorFormat("Can't Create Instance of : " + type + "with ResId: " + resId);
    }

    private getPoolByType(type: string): any {
        switch (type) {
            case ResourcePool.SKE:
                return this.main[ResourcePool.SKE];
            case ResourcePool.BITMAPTEXT:
                return this.main[ResourcePool.BITMAPTEXT];
            case ResourcePool.BITMAP:
                return this.main[ResourcePool.BITMAP];
        }
        return null;
    }
    private static prepareItem(item: any, type: string): void {
        switch (type) {
            case ResourcePool.SKE:
                if (item instanceof BoneAnimation) {
                    item.initBone();
                } else {
                    LogManager.errorFormat("item type not match!!" + item.name + "  type :" + type);
                }
                break;
        }
    }
    /*获取对象
    * @resId 需要获取的对象的ID
    * @type 获取对象的类型 例如：ResourcePool.SKE
    */
    public pop(resId: string, type: string): any {
        let pool = this.getPoolByType(type);
        if (pool[resId] == null) {
            pool[resId] = [];
        }
        if (resId == ResourcePool.Trace_ID) Log.trace("ResourcePool . {0} : {1}", "pop", resId);
        let list: Array<any> = pool[resId];
        if (list.length > 0) {
            let item: any = list.pop();
            ResourcePool.prepareItem(item, type);
            return item;
        }
        return ResourcePool.createOneByType(type, resId);
    }


	/**
     * 回收对象
     * @obj 需要回收的对象
     */
    public push(obj: any, type: string): void {
        if (obj == null) return;
        let pool = this.getPoolByType(type);
        if (pool[obj.name] == null) {
            Log.trace("回收对象的数组不存在", obj.name);
            return;
        }
        if (obj.name == ResourcePool.Trace_ID) Log.trace("ResourcePool . {0} : {1}", "push", obj.name);
        pool[obj.name].push(obj);
        //remove item
        let container: egret.DisplayObjectContainer = obj.parent as egret.DisplayObjectContainer;
        if (container != null) container.removeChild(obj);
        //reset item
        App.DisplayUtils.resetDisplay(obj);
        if (obj["resetForPool"]) {
            obj["resetForPool"]();
        }
    }
    /**
     * 创建对象(用于将要大量使用前，预先创建，防止使用时大量创建卡顿)
     * @className 对象类定义
     * @num 创建数量
     * @args 构造函数传参
     */
    public create(resId: string, type: string, num: number = 1) {
        let i;
        const list = [];
        if (resId == ResourcePool.Trace_ID) Log.trace("ResourcePool . {0} : {1}  {2}", "create", resId, num);
        for (i = 0; i < num; i++) {
            list.push(this.pop(resId, type));
        }
        for (i = 0; i < num; i++) {
            this.push(list.pop(), type);
        }
    }

    public hasItem(obj: any, type: string): boolean {
        if (obj == null) return false;
        let pool = this.getPoolByType(type);
        if (pool[obj.name] == null) return false;
        let list: Array<any> = pool[obj.name];
        return list.indexOf(obj) >= 0;
    }

    /**
     * 获取对象池对象数量
     * @className 对象类定义
     * @return 对象数量
     */
    public getLen(resId: string, type: string): number {
        let pool = this.getPoolByType(type);
        if (pool[resId]) {
            return pool[resId].length;
        }
        return 0;
    }

    /**
     * 清理对象
     * @resId 需要清理的对象的类型id 如果为空字符串则会清理传入的类型的所有对象
　　  * @type 清理前执行指定函数
     * @funName 默认会调用dispose方法
     */
    public clear(resId: string, type: string, funName: string = "dispose") {
        let pool = this.getPoolByType(type);
        if (resId == ResourcePool.Trace_ID) Log.trace("ResourcePool . {0} : {1}  {2}", "clear", resId, type);
        if (resId == "") {
            for (let key in pool) {
                clearItem(pool[key]);
            }
        } else {
            clearItem(pool[resId]);
        }

        function clearItem(item: any) {
            if (item != null) {
                funName && this.dealFun(item.name, type, funName);
                item = null;
                delete pool[item.name];
            }
        }
    }

    /**
     * 对象池所有对象执行指定函数
     * @className 对象类定义
     * @funName 函数名
     */
    public dealFun(resId: string, type: string, funName: string) {
        let pool = this.getPoolByType(type);
        if (pool[resId]) {
            let list: any[] = pool[resId];
            let len = list.length;
            for (let i = 0; i < len; i++) {
                list[i][funName] && list[i][funName]();
            }
        }
    }

    public printAll() {
        Log.trace("Start Print All Resource-------------");
        let allCount: number = 0;
        for (let key in this.main) {
            Log.trace("Start Print All Resource by type : " + key + "==================");
            for (let pKey in this.main[key]) {
                let length: number = this.main[key][pKey].length;
                Log.trace("key :" + pKey + "  count:" + length);
                allCount += length;
            }
        }
        Log.trace("Start Print All Resource count : " + allCount + "==================");
    }
}