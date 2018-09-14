var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var TSDictionary = (function () {
    function TSDictionary() {
        /**
         * 字典这个数据结构，其本质是一个个键值对<key,value>形成的数据集合，
         * 但为了能查找到正确的数据，key值必须保证唯一性。我们可以通过使用
         * Typescript中的两个数组来分别存储key值和value值来模拟实现这种结构。
         * 数据存储时把key和value分别存储在两个数组相同的索引位置，
         * 这样在查找数据时就可以通过这个索引把数据关联起来，找到对应的值。。
         *
         */
        this.keys = [];
        this.values = [];
        this._len = 0;
    }
    TSDictionary.prototype.Add = function (key, value) {
        var self = this;
        self.keys.push(key);
        self.values.push(value);
        self._len++;
    };
    TSDictionary.prototype.Remove = function (key) {
        var self = this;
        var index = self.keys.indexOf(key, 0);
        if (index != -1) {
            self.keys.splice(index, 1);
            self.values.splice(index, 1);
            self._len--;
        }
    };
    /**获取字典中对应key的值，不存在则返回null */
    TSDictionary.prototype.TryGetValue = function (key) {
        var self = this;
        var index = self.keys.indexOf(key, 0);
        if (index != -1) {
            return self.values[index];
        }
        return null;
    };
    TSDictionary.prototype.TryGetKey = function (value) {
        var self = this;
        var index = self.values.indexOf(value, 0);
        if (index != -1) {
            return self.keys[index];
        }
        return null;
    };
    /**
     * 通过判断条件获取相关列表
     * @param value 判断条件例如：
     * this.TryGetListByCondition(function(VT){
     *      if(VT.xx==xx){
     *          return true
     *
     *      return false;
     * });
     * cache.TryGetListByCondition((bean:Type)=>bean.xxx==xxx);
     * 获取列表全部cache.TryGetListByCondition((bean:Type)=>true);
     */
    TSDictionary.prototype.TryGetListByCondition = function (value) {
        var self = this;
        var list = [];
        for (var _i = 0, _a = self.values; _i < _a.length; _i++) {
            var o = _a[_i];
            if (value(o)) {
                list[list.length] = o;
            }
        }
        return list;
    };
    TSDictionary.prototype.TryGetAnyByCondition = function (value) {
        var self = this;
        var dic = {};
        for (var _i = 0, _a = self.keys; _i < _a.length; _i++) {
            var s = _a[_i];
            var index = self.keys.indexOf(s, 0);
            if (value(self.values[index])) {
                dic[s] = self.values[index];
            }
        }
        return dic;
    };
    /**
     * 通过判断条件获取相关列表
     * @param value 判断条件例如：
     * this.TryGetListByCondition(function(VT){
     *      if(VT.xx==xx){
     *          return true
     *
     *      return false;
     * });
     * cache.TryGetListByCondition((bean:Type)=>bean.xxx==xxx);
     * 获取列表全部cache.TryGetListByCondition((bean:Type)=>true);
     */
    TSDictionary.prototype.TryGetKeyListByCondition = function (value) {
        var self = this;
        var list = [];
        for (var i = 0; i < self.keys.length; i++) {
            if (value(self.keys[i])) {
                list[list.length] = self.values[i];
            }
        }
        return list;
    };
    /**判断字典中是否存在对应key的值，返回boolean */
    TSDictionary.prototype.ContainsKey = function (key) {
        var self = this;
        var ks = self.keys;
        for (var i = 0; i < ks.length; ++i) {
            if (ks[i] == key) {
                return true;
            }
        }
        return false;
    };
    /**虽然可以通过上面的TryGetValue()函数获取到字典里的引用数据，
     * 再对数据进行修改更新，但当数据是值类型时是无法实现修改保存的。
     * 为了更方便的修改字典里的数据，增加一个修改数据的函数:(并在返回值中返回是否修改成功) */
    TSDictionary.prototype.SetDicValue = function (key, value) {
        var index = this.keys.indexOf(key, 0);
        if (index != -1) {
            this.keys[index] = key;
            this.values[index] = value;
            return true;
        }
        this.Add(key, value);
        return true;
    };
    /**key为number的，可以按从小到大的顺序重新排序 */
    TSDictionary.prototype.SortByKey = function () {
        var self = this;
        for (var j = self.keys.length - 1; j > 0; j--) {
            for (var i = 0; i < j; i++) {
                if (Number(self.keys[i]) > Number(self.keys[i + 1])) {
                    var temKey = self.keys[i];
                    var temValue = self.values[i];
                    self.keys[i] = self.keys[i + 1];
                    self.values[i] = self.values[i + 1];
                    self.keys[i + 1] = temKey;
                    self.values[i + 1] = temValue;
                }
            }
        }
        return true;
    };
    TSDictionary.prototype.GetLenght = function () {
        return this._len;
    };
    TSDictionary.prototype.getValueByIndex = function (index) {
        var self = this;
        if (index < 0 || index >= self._len) {
            return;
        }
        var value = self.values[index];
        return value;
    };
    TSDictionary.prototype.getKeyByIndex = function (index) {
        var self = this;
        if (index < 0 || index >= self._len) {
            return;
        }
        var value = self.keys[index];
        return value;
    };
    TSDictionary.prototype.getValues = function () {
        return this.values;
    };
    TSDictionary.prototype.getkeys = function () {
        return this.keys;
    };
    TSDictionary.prototype.clear = function () {
        var self = this;
        while (self.keys.length > 0) {
            self.keys.pop();
        }
        while (self.values.length > 0) {
            var vt = self.values.pop();
            vt = null;
        }
        self.keys.length = 0;
        self.values.length = 0;
        self._len = 0;
    };
    return TSDictionary;
}());
__reflect(TSDictionary.prototype, "TSDictionary");
//# sourceMappingURL=TSDictionary.js.map