var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var LogManager = (function () {
    function LogManager() {
    }
    LogManager.logFormat = function (content) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        //if (!this.isLogOpen) return;
        var format = LogManager.buildFormatString(content, args);
        egret.log(format);
    };
    LogManager.warningFormat = function (content) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var format = LogManager.buildFormatString(content, args);
        egret.warn(format);
    };
    LogManager.errorFormat = function (content) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var format = LogManager.buildFormatString(content, args);
        egret.error(format);
    };
    LogManager.buildFormatString = function (content, args) {
        var format;
        if (typeof content == "number") {
            format = content.toString();
        }
        else if (typeof content == "string") {
            format = content;
        }
        else if (typeof content == "object") {
            format = JSON.stringify(content);
        }
        args.forEach(function (arg, index) {
            format = format.replace('{' + index + '}', arg);
        });
        format += " -- [Time:" + egret.getTimer() + "]";
        return format;
    };
    LogManager.format = function (format) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        args.forEach(function (arg, index) {
            format = format.replace('{' + index + '}', arg);
        });
        return format;
    };
    return LogManager;
}());
__reflect(LogManager.prototype, "LogManager");
//# sourceMappingURL=LogManager.js.map