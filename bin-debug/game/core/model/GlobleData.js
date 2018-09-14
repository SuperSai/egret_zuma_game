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
 * json数据解析类
 */
var GlobleData = (function (_super) {
    __extends(GlobleData, _super);
    function GlobleData() {
        var _this = _super.call(this) || this;
        _this._hasParasComplete = false;
        _this._totalStepCsvList = new TSDictionary();
        _this._needParseCount = 0;
        _this._currParseCount = 0;
        return _this;
    }
    Object.defineProperty(GlobleData.prototype, "hasParasComplete", {
        get: function () {
            return this._hasParasComplete;
        },
        enumerable: true,
        configurable: true
    });
    GlobleData.prototype.setup = function () {
        var self = this;
        self.initModel();
        self.initStep();
    };
    GlobleData.prototype.initModel = function () {
        var self = this;
        self._totalStepCsvList.Add(GlobleData.LevelVO, LevelVO);
        self._totalStepCsvList.Add(GlobleData.BoneAnimationVO, BoneAnimationVO);
    };
    // 解析初始数据表
    GlobleData.prototype.initStep = function () {
        var self = this;
        self._needParseCount = self._totalStepCsvList.GetLenght();
        RES.getResAsync("json_zip", this.onloadDataComplete, self);
        LogManager.logFormat("dataFile is json_zip");
    };
    GlobleData.prototype.onloadDataComplete = function (data, key) {
        var self = this;
        self._csvZipData = new JSZip(data);
        LogManager.logFormat("onloadDataComplete is json_zip:" + key);
        self.addEventListener(egret.Event.ENTER_FRAME, self.onEnterFrameLoader, self);
    };
    GlobleData.prototype.onEnterFrameLoader = function () {
        var self = this;
        if (self._currParseCount >= self._needParseCount) {
            self.removeEventListener(egret.Event.ENTER_FRAME, self.onEnterFrameLoader, self);
            this._hasParasComplete = true;
            GameEnterManager.Instance.setup();
        }
        else {
            //一次解析两个文件
            self.getCsvFile();
            self.getCsvFile();
        }
    };
    GlobleData.prototype.getCsvFile = function () {
        var self = this;
        if (self._currParseCount < self._needParseCount) {
            var key = self._totalStepCsvList.getKeyByIndex(self._currParseCount);
            key = key.replace('_', '.');
            var data = self._csvZipData.file(key);
            if (data == null) {
                LogManager.errorFormat("can't get key from key :" + key);
            }
            var csvStr = self._csvZipData.file(key).asText();
            self.starSingleParse(csvStr);
        }
    };
    GlobleData.prototype.starSingleParse = function (csvStr) {
        var self = this;
        var key = self._totalStepCsvList.getKeyByIndex(self._currParseCount);
        var DataClass = self._totalStepCsvList.getValueByIndex(self._currParseCount);
        var dic = CSVParser.ParseJsonData(DataClass, csvStr);
        GlobleData.AllCacheData.Add(key, dic);
        self._currParseCount++;
    };
    Object.defineProperty(GlobleData, "getInstance", {
        get: function () {
            if (!this._instance) {
                this._instance = new GlobleData();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    GlobleData.getData = function (type, key) {
        var dic = GlobleData.AllCacheData.TryGetValue(type);
        return dic.TryGetValue(key);
    };
    GlobleData.getDataByFilter = function (type, filterType, filterValue) {
        var dic = GlobleData.AllCacheData.TryGetValue(type);
        var filterd = dic.TryGetListByCondition(function (bean) { return bean[filterType] == filterValue; });
        return filterd;
    };
    GlobleData.getAllValue = function (type) {
        var dic = GlobleData.AllCacheData.TryGetValue(type);
        return dic.getValues();
    };
    GlobleData.getDataByCondition = function (type, value) {
        var dic = GlobleData.AllCacheData.TryGetValue(type);
        var arr = dic.TryGetListByCondition(value);
        return arr;
    };
    GlobleData.AllCacheData = new TSDictionary();
    GlobleData.ServerConfigVO = "ServerConfig_json";
    GlobleData.BoneAnimationVO = "BoneAnimation_json";
    GlobleData.LevelVO = "Level_json";
    return GlobleData;
}(egret.DisplayObject));
__reflect(GlobleData.prototype, "GlobleData");
//# sourceMappingURL=GlobleData.js.map