var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Http数据更新类
 */
var ProxyUpdate = (function () {
    function ProxyUpdate(cache) {
        this._cache = cache;
    }
    ProxyUpdate.prototype.isArray = function (key) {
        return key instanceof Array;
    };
    ProxyUpdate.prototype.isObject = function (key) {
        return key.indexOf("object") > -1;
    };
    ProxyUpdate.prototype.isNormal = function (key) {
        var isAt = key.indexOf("@") > -1;
        var isDot = key.indexOf(".") > -1;
        var isUnderline = key.indexOf("_") > -1;
        return (!isAt && !isDot && !isUnderline);
    };
    ProxyUpdate.prototype.isAddToArray = function (key) {
        return (key == "@a");
    };
    ProxyUpdate.prototype.isRemoveToArray = function (key) {
        var arr = key.split("_");
        return (arr.length <= 3 && arr[0] == "@d");
    };
    ProxyUpdate.prototype.isFilter = function (key) {
        var arr = key.split("_");
        return (arr[0] == "@f");
    };
    ProxyUpdate.prototype.isNumeric = function (v) {
        return parseFloat(v).toString() == v.toString();
    };
    ProxyUpdate.prototype._updateObject = function (name, value, cacheData) {
        var arr = name.split(".");
        if (arr[0] == "@a" || arr[0] == "@s") {
            cacheData[arr[1]] = value;
        }
        else if (arr[0] == "@d") {
            delete cacheData[arr[1]];
        }
    };
    ProxyUpdate.prototype._getFilterObject = function (filter, cacheData) {
        if (cacheData) {
            var arr = filter.split("_");
            if (arr.length == 3 && arr[0] == "@f" && this.isArray(cacheData)) {
                var key = arr[1];
                var value = arr[2];
                for (var i = 0; i < cacheData.length; i++) {
                    var v = cacheData[i];
                    if (arr.length == 3 && this.isObject(v.toString())) {
                        var cacheValue = v[key];
                        if (cacheValue) {
                            if (value[0] == "@") {
                                value = value.replace("@", "");
                            }
                            if (value == cacheValue) {
                                return v;
                            }
                        }
                    }
                }
            }
        }
        return null;
    };
    ProxyUpdate.prototype._addObjectToArray = function (cacheData, changeValue) {
        if (this.isArray(changeValue)) {
            for (var i = 0; i < changeValue.length; i++) {
                cacheData.push(changeValue[i]);
            }
        }
        else {
            cacheData.push(changeValue);
        }
    };
    ProxyUpdate.prototype._removeObjectFromArray = function (cacheData, key, changeValue) {
        var arr = key.split("_");
        if (arr.length <= 3 && arr[0] == "@d") {
            if (this.isArray(cacheData)) {
                var count = cacheData.length;
                for (var i = count - 1; i >= 0; i--) {
                    var cacheDataItem = cacheData[i];
                    if (arr.length == 3) {
                        if (cacheDataItem.hasOwnProperty(arr[1])) {
                            var val = arr[2];
                            if (val[0] == "@") {
                                val = val.replace("@", "");
                            }
                            if (val == cacheDataItem[arr[1]]) {
                                cacheData.splice(i, 1);
                            }
                        }
                    }
                    else if (arr.length == 2 && cacheDataItem.hasOwnProperty(arr[1])) {
                        if (changeValue == cacheDataItem[arr[1]]) {
                            cacheData.splice(i, 1);
                        }
                    }
                    else if (arr.length == 1) {
                        if (changeValue == cacheDataItem) {
                            cacheData.splice(i, 1);
                        }
                    }
                }
            }
        }
    };
    ProxyUpdate.prototype.update = function (key, data) {
        this._cache[key] = data;
        if (data.hasOwnProperty("c")) {
            var cdata = data["c"];
            var keys = Object.keys(cdata);
            for (var i = 0, len = keys.length; i < len; i++) {
                var k1 = keys[i];
                if (this._cache[k1]) {
                    this._update(this._cache[k1], cdata[k1]);
                    App.MessageCenter.dispatch(k1 + "_HttpUpdate");
                }
            }
        }
    };
    ProxyUpdate.prototype._update = function (cacheData, changeData) {
        if (cacheData && changeData && this.isObject(changeData.toString())) {
            var keys = Object.keys(changeData);
            for (var i = 0, len = keys.length; i < len; i++) {
                var k = keys[i];
                var v = changeData[k];
                if (this.isNormal(k) && this.isObject(v.toString())) {
                    if (cacheData.hasOwnProperty(k)) {
                        this._update(cacheData[k], v);
                    }
                }
                else if (this.isNormal(k) && this.isNumeric(v)) {
                    var cv = cacheData[k];
                    cacheData[k] = cv + v;
                }
                else if (this.isNormal(k)) {
                    cacheData[k] = v;
                }
                else if (this.isAddToArray(k)) {
                    this._addObjectToArray(cacheData, v);
                }
                else if (this.isRemoveToArray(k)) {
                    this._removeObjectFromArray(cacheData, k, v);
                }
                else if (this.isFilter(k)) {
                    var subCacheData = this._getFilterObject(k, cacheData);
                    if (subCacheData) {
                        this._update(subCacheData, v);
                    }
                }
                else {
                    this._updateObject(k, v, cacheData);
                }
            }
        }
    };
    return ProxyUpdate;
}());
__reflect(ProxyUpdate.prototype, "ProxyUpdate");
//# sourceMappingURL=DataUpdate.js.map