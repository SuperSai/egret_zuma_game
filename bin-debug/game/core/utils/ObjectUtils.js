var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ObjectUtils = (function () {
    function ObjectUtils() {
    }
    /**
     * 拷贝数据
     * @param obj			需要赋值的对象
     * @param value			拥有数据的对象
     */
    ObjectUtils.copyValue = function (obj, value) {
        for (var key in value) {
            var attrValue = value[key];
            var attrType = egret.getQualifiedClassName(attrValue);
            var baseType = this.isBaseType(value[key]);
            if (baseType) {
                obj[key] = value[key];
            }
            else {
                this.copyValue(obj[key], value[key]);
            }
        }
    };
    /**
     * 判断对象是否为基础类型
     * @param obj			对象
     * @return				true为基础类型，false为复杂类型
     */
    ObjectUtils.isBaseType = function (obj) {
        var type = egret.getQualifiedClassName(obj);
        var index = ObjectUtils.BASETYPES.indexOf(type);
        return index != -1;
    };
    /**
      * 拷贝数据
      * @param obj            需要赋值的对象
      * @param value            拥有数据的对象
      */
    ObjectUtils.copyValue2 = function (obj, value) {
        if (value == null)
            return;
        for (var key in obj) {
            if (key == "__class__")
                continue;
            if (key == "__types__")
                continue;
            var attrValue = value[key];
            if (attrValue != undefined) {
                obj[key] = value[key];
            }
        }
    };
    /** 数据列表拷贝 */
    ObjectUtils.copyListToAnyInfo = function (values1, classZ, className) {
        if (!values1 || values1.length < 1)
            return null;
        var newList = [];
        values1.forEach(function (value, index) {
            var obj = ObjectPool.pop(classZ, className);
            ObjectUtils.copyValue2(obj, value);
            newList.push(obj);
        });
        return newList;
    };
    ObjectUtils.removeFromArray = function (target, array) {
        var index = array.indexOf(target);
        if (index >= 0)
            array.splice(index, 1);
        return array;
    };
    ObjectUtils.splitToNumber = function (value, sprelator) {
        if (sprelator === void 0) { sprelator = ","; }
        var result = [];
        var sArray = value.split(sprelator);
        for (var i = 0; i < sArray.length; i++) {
            result.push(parseInt(sArray[i]));
        }
        return result;
    };
    ObjectUtils.splitToString = function (value, sprelator) {
        if (sprelator === void 0) { sprelator = ","; }
        var result = [];
        var sArray = value.split(sprelator);
        for (var i = 0; i < sArray.length; i++) {
            result.push(sArray[i]);
        }
        return result;
    };
    ObjectUtils.splitMapData = function (value) {
        var result = [];
        var sArray = value.split("#");
        for (var i = 0; i < sArray.length; i++) {
            var newAry = ObjectUtils.splitToNumber(sArray[i].toString());
            result.push(newAry);
        }
        return result;
    };
    ObjectUtils.splitLevelMapPoints = function (value, separater) {
        if (separater === void 0) { separater = "#"; }
        if (value == null)
            return [];
        var points = [];
        var sValue = ObjectUtils.splitToString(value);
        for (var i = 0; i < sValue.length; i++) {
            points.push(ObjectUtils.converToPoint(sValue[i]));
        }
        return points;
    };
    ObjectUtils.converToPoint = function (value, separater) {
        if (separater === void 0) { separater = ","; }
        if (value == null)
            return null;
        var sValue = String(value).split(separater);
        return new egret.Point(parseFloat(sValue[0]), parseFloat(sValue[1]));
    };
    ObjectUtils.converToRectangle = function (value) {
        if (value == null)
            return null;
        var values = value.toString().split(",");
        return new egret.Rectangle(parseFloat(values[0]), parseFloat(values[1]), parseFloat(values[2]), parseFloat(values[3]));
    };
    /** 移除数组中所有元素 */
    ObjectUtils.removeAllArrayItem = function (array) {
        for (var i = 0; i < array.length; i++) {
            array.pop();
        }
    };
    /** 替换数组中的数据 */
    ObjectUtils.replaceItemToArray = function (array, inde, item) {
        array.splice(inde, 1, item);
    };
    ObjectUtils.getRandomFromIn = function (array) {
        if (array == null || array.length < 1) {
            return 0;
        }
        var random = array[0] + Math.random() * (array[1] - array[0]);
        var index = Math.floor(random);
        return index;
    };
    ObjectUtils.getRandomStr = function (str, strSplit) {
        if (strSplit === void 0) { strSplit = "#"; }
        var arr = str.split(strSplit);
        return ObjectUtils.getRandomItem(arr);
    };
    ObjectUtils.getRandomItem = function (array) {
        if (array == null || array.length < 1) {
            return null;
        }
        var random = Math.random() * array.length;
        var index = Math.floor(random);
        return array[index];
    };
    ObjectUtils.shuffle = function (arr) {
        var len = arr.length;
        var i = len;
        while (i--) {
            var ran = Math.floor(Math.random() * len);
            if (i != ran) {
                var tem = arr[i];
                arr[i] = arr[ran];
                arr[ran] = tem;
            }
        }
    };
    ObjectUtils.charExchange = function (nums) {
        var newNums = nums;
        var result = "";
        for (var i = 0; i < newNums.length; i++) {
            var str = newNums.substr(i, 1);
        }
        return newNums;
    };
    ObjectUtils.splitToPoints = function (value) {
        var result = [];
        var strValue = String(value);
        if (strValue == "0")
            return result;
        var pointStr = strValue.split("|");
        for (var i = 0; i < pointStr.length; i++) {
            var points = pointStr[i].split(",");
            result.push(new egret.Point(parseFloat(points[0]), parseFloat(points[1])));
        }
        return result;
    };
    /** 点是否在区域中 */
    ObjectUtils.pointIsInArea = function (rect, x, y) {
        return rect.contains(x, y);
    };
    ObjectUtils.BASETYPES = ["boolean", "number", "string", "null"];
    ObjectUtils.BIGNUMBERKEY = ["baseCost", "baseAttack", "baseLife"];
    return ObjectUtils;
}());
__reflect(ObjectUtils.prototype, "ObjectUtils");
//# sourceMappingURL=ObjectUtils.js.map