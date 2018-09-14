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
 *Create Time:2018.2.5
 */
var LanguageManager = (function (_super) {
    __extends(LanguageManager, _super);
    function LanguageManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._languageMap = new TSDictionary();
        _this._reg = new RegExp("\\{(\\d+)\\}");
        return _this;
    }
    /**
     * 初始化数据
     */
    LanguageManager.prototype.setup = function (data) {
        var self = this;
        var languageArr = String(data).split("\r\n");
        if (languageArr.length) {
            for (var i = 0; i < languageArr.length; i++) {
                var obj = languageArr[i];
                if (obj == "#" || obj == "") {
                    continue;
                }
                else {
                    var strArr = obj.split(":");
                    if (self._languageMap.ContainsKey(strArr[0])) {
                        self._languageMap.Remove(strArr[0]);
                    }
                    if (strArr.length <= 2) {
                        self._languageMap.Add(strArr[0], strArr[1]);
                    }
                    else {
                        self._languageMap.Add(strArr[0], strArr.slice(1).join(""));
                    }
                }
            }
        }
    };
    LanguageManager.prototype.getLanguageMapData = function () {
        var self = this;
        return self._languageMap.getValues();
    };
    LanguageManager.prototype.getLanguageById = function (key) {
        var self = this;
        return self._languageMap.TryGetValue(key);
    };
    /**
     * 设置容器语言
     * @param {egret.DisplayObjectContainer} node
     */
    LanguageManager.prototype.setModuleLanguage = function (node) {
        var self = this;
        if (!node || node && !node.numChildren || !LanguageManager.isOpenLanguage)
            return;
        self.SearchAndModifyNodeLanguage(node);
    };
    LanguageManager.prototype.SearchAndModifyNodeLanguage = function (node) {
        for (var i = 0; i < node.numChildren; i++) {
            var child = node.getChildAt(i);
            if (child instanceof egret.DisplayObjectContainer) {
                this.SearchAndModifyNodeLanguage(child);
            }
            if (child instanceof eui.Label) {
                if (child.name != "") {
                    var name = child.name.split("@")[1];
                    if (name) {
                        child.text = this.getLanguageById(name);
                    }
                }
            }
            else if (child instanceof eui.EditableText) {
                if (child.name != "") {
                    var name = child.name.split("@")[1];
                    if (name) {
                        child.prompt = this.getLanguageById(name);
                    }
                }
            }
            else if (child instanceof eui.Button) {
                if (child.name != "") {
                    var name = child.name.split("@")[1];
                    if (name) {
                        child.label = this.getLanguageById(name);
                    }
                }
            }
        }
    };
    /**
     * 获取文本内容
     * @param {string} key
     * @returns {string}
     */
    LanguageManager.prototype.getLanguageText = function (key) {
        var arg = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            arg[_i - 1] = arguments[_i];
        }
        var self = this;
        return self.getTranslationWithArray(key, arg);
    };
    LanguageManager.prototype.getTranslationWithArray = function (key, argsArr) {
        var self = this;
        if (self._languageMap.ContainsKey(key)) {
            return self.replaceStr(self._languageMap.TryGetValue(key), argsArr);
        }
    };
    LanguageManager.prototype.languageReplace = function (str, args) {
        var self = this;
        return self.replaceStr(str, args);
    };
    /**
     * 根据正则表达式去替换内容
     */
    LanguageManager.prototype.replaceStr = function (repContent, argsArr) {
        var self = this;
        if (argsArr && argsArr.length > 0) {
            var data = self._reg.exec(repContent);
            while (data && argsArr.length > 0) {
                var id = Number(data[1]);
                var str = String(argsArr[id]);
                if (id >= 0 && id < argsArr.length) {
                    var idx = str.indexOf("$");
                    if (idx > -1) {
                        str = str.slice(0, idx) + "$" + str.slice(idx);
                    }
                    repContent = repContent.replace(self._reg, str);
                }
                else {
                    repContent = repContent.replace(self._reg, "{}");
                }
                data = self._reg.exec(repContent);
            }
        }
        return repContent;
    };
    LanguageManager.isOpenLanguage = true;
    return LanguageManager;
}(BaseClass));
__reflect(LanguageManager.prototype, "LanguageManager");
//# sourceMappingURL=LanguageManager.js.map