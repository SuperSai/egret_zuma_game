var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var CSVParser = (function () {
    function CSVParser() {
    }
    //用json替换csv,json解析文件
    CSVParser.ParseJsonData = function (infoClass, sourceText) {
        var self = this;
        var result = new TSDictionary();
        sourceText = sourceText.trim();
        var obj = JSON.parse(sourceText);
        var keyList = null;
        var typeList = null;
        var dataList = null;
        var itemList = null;
        keyList = obj.titles;
        if (obj.data == null)
            return result; //空表不做处理
        dataList = obj.data; //数据是从0开始
        typeList = dataList[0];
        var i = 0;
        var dataLen = dataList.length;
        for (i = 0; i < dataLen; i++) {
            var record = new infoClass();
            itemList = dataList[i];
            self.ParseRecord(keyList, itemList, record);
            result.Add(parseInt(itemList[0]), record);
        }
        sourceText = null;
        return result;
    };
    CSVParser.ParseRecord = function (keyList, itemList, record) {
        var self = this;
        var n = itemList.length;
        for (var i = 0; i < n; i++) {
            record[keyList[i]] = itemList[i];
        }
    };
    return CSVParser;
}());
__reflect(CSVParser.prototype, "CSVParser");
//# sourceMappingURL=CSVParser.js.map