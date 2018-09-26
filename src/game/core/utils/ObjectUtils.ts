class ObjectUtils {
    public constructor() {
    }
    public static BASETYPES = ["boolean", "number", "string", "null"];

    public static BIGNUMBERKEY = ["baseCost", "baseAttack", "baseLife"]
    /**
     * 拷贝数据
     * @param obj			需要赋值的对象
     * @param value			拥有数据的对象
     */
    public static copyValue(obj: Object, value: Object): void {
        for (var key in value) {
            var attrValue = value[key];
            var attrType: string = egret.getQualifiedClassName(attrValue);
            var baseType: boolean = this.isBaseType(value[key]);
            if (baseType) {
                obj[key] = value[key];
            }
            else {
                this.copyValue(obj[key], value[key]);
            }
        }
    }

    /**
     * 判断对象是否为基础类型
     * @param obj			对象
     * @return				true为基础类型，false为复杂类型
     */
    public static isBaseType(obj: Object): boolean {
        var type: string = egret.getQualifiedClassName(obj);
        var index: number = ObjectUtils.BASETYPES.indexOf(type);
        return index != -1;
    }

    /**
      * 拷贝数据
      * @param obj            需要赋值的对象
      * @param value            拥有数据的对象
      */
    public static copyValue2(obj: Object, value: Object): void {
        if (value == null) return;
        for (let key in obj) {
            if (key == "__class__") continue;
            if (key == "__types__") continue;
            const attrValue = value[key];
            if (attrValue != undefined) {
                obj[key] = value[key];
            }
        }
    }

    /** 数据列表拷贝 */
    public static copyListToAnyInfo(values1: any[], classZ: any, className: string): any[] {
        if (!values1 || values1.length < 1) return null;
        let newList: any[] = [];
        values1.forEach((value: any, index: number) => {
            let obj: any = ObjectPool.pop(classZ, className);
            ObjectUtils.copyValue2(obj, value);
            newList.push(obj);
        });
        return newList;
    }

    public static removeFromArray(target: any, array: any[]): any[] {
        let index = array.indexOf(target);
        if (index >= 0) array.splice(index, 1);
        return array;
    }

    public static splitToNumber(value, sprelator: string = ","): number[] {
        let result: number[] = [];
        let sArray: string[] = value.split(sprelator);
        for (let i: number = 0; i < sArray.length; i++) {
            result.push(parseInt(sArray[i]));
        }
        return result;
    }

    public static splitToString(value, sprelator: string = ","): any[] {
        let result: string[] = [];
        let sArray: string[] = value.split(sprelator);
        for (let i: number = 0; i < sArray.length; i++) {
            result.push(sArray[i]);
        }
        return result;
    }

    public static splitMapData(value): any[] {
        let result: any[] = [];
        let sArray: any[] = value.split("#");
        for (let i: number = 0; i < sArray.length; i++) {
            let newAry: any[] = ObjectUtils.splitToNumber(sArray[i].toString());
            result.push(newAry);
        }
        return result;
    }

    public static splitLevelMapPoints(value: any, separater: string = "#"): egret.Point[] {
        if (value == null) return [];
        let points: egret.Point[] = [];
        let sValue: string[] = ObjectUtils.splitToString(value);
        for (let i: number = 0; i < sValue.length; i++) {
            points.push(ObjectUtils.converToPoint(sValue[i]));
        }
        return points;
    }

    public static converToPoint(value: any, separater: string = ","): egret.Point {
        if (value == null) return null;
        let sValue: string[] = String(value).split(separater);
        return new egret.Point(parseFloat(sValue[0]), parseFloat(sValue[1]));
    }

    public static converToRectangle(value: any): egret.Rectangle {
        if (value == null) return null;
        let values: string[] = value.toString().split(",");
        return new egret.Rectangle(parseFloat(values[0]), parseFloat(values[1])
            , parseFloat(values[2]), parseFloat(values[3]));
    }

    /** 移除数组中所有元素 */
    public static removeAllArrayItem(array: any[]) {
        for (let i: number = 0; i < array.length; i++) {
            array.pop();
        }
    }

    /** 替换数组中的数据 */
    public static replaceItemToArray(array: any[], inde: number, item: any) {
        array.splice(inde, 1, item);
    }

    public static getRandomFromIn(array: number[]): number {
        if (array == null || array.length < 1) {
            return 0;
        }
        let random: number = array[0] + Math.random() * (array[1] - array[0]);
        let index: number = Math.floor(random);
        return index;
    }

    public static getRandomStr(str: string, strSplit: string = "#"): string {
        let arr: string[] = str.split(strSplit);
        return ObjectUtils.getRandomItem(arr);
    }

    public static getRandomItem(array: any[]): any {
        if (array == null || array.length < 1) {
            return null;
        }
        let random: number = Math.random() * array.length
        let index: number = Math.floor(random);
        return array[index];
    }

    public static shuffle(arr: any[]): void {
        let len: number = arr.length;
        let i: number = len;
        while (i--) {
            let ran: number = Math.floor(Math.random() * len);
            if (i != ran) {
                let tem: any = arr[i];
                arr[i] = arr[ran];
                arr[ran] = tem;
            }
        }
    }

    public static charExchange(nums: string): string {
        let newNums: string = nums;
        let result: string = "";
        for (let i: number = 0; i < newNums.length; i++) {
            let str: string = newNums.substr(i, 1);
        }
        return newNums;
    }

    public static splitToPoints(value): egret.Point[] {
        let result: egret.Point[] = [];
        let strValue: string = String(value);
        if (strValue == "0") return result;
        let pointStr: string[] = strValue.split("|");
        for (let i: number = 0; i < pointStr.length; i++) {
            let points: string[] = pointStr[i].split(",");
            result.push(new egret.Point(parseFloat(points[0]), parseFloat(points[1])))
        }
        return result;
    }

    /** 点是否在区域中 */
    public static pointIsInArea(rect: egret.Rectangle, x: number, y: number): boolean {
        return rect.contains(x, y);
    }
}