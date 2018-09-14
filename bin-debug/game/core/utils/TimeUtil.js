/**
 * Created 2017/9/4.
 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var TimeUtil = (function () {
    function TimeUtil() {
        this._initializeSTime = 0; //初始化服务器时间
        this._initializeCTime = 0; //初始化客户端时间
        this._firstSTime = 0; //服务器登录时间
        this._isLogin = false;
        var self = this;
    }
    TimeUtil.getInstance = function () {
        if (!this._instance) {
            this._instance = new TimeUtil();
        }
        return this._instance;
    };
    /**
     * 时间毫秒转成小时
     * @param sec
     * @returns {number}
     * @constructor
     */
    TimeUtil.S2H = function (times, symbol, isH) {
        if (symbol === void 0) { symbol = ":"; }
        if (isH === void 0) { isH = true; }
        if (times < 0)
            return;
        var h = Math.floor(times / 1000 / 60 / 60).toString();
        var m = Math.floor(times % (1000 * 3600) / (1000 * 60)).toString();
        var s = Math.floor((times % (1000 * 60)) / 1000).toString();
        if (Number(h) < 10) {
            h = "0" + h;
        }
        if (Number(m) < 10) {
            m = "0" + m;
        }
        if (Number(s) < 10) {
            s = "0" + s;
        }
        if (isH) {
            var restult = h + symbol + m + symbol + s;
        }
        else {
            var restult = m + symbol + s;
        }
        return restult;
    };
    TimeUtil.conversionTime = function (times) {
        if (times <= 0)
            return "";
        if (times >= 60 * 60 * 24) {
            var day = Math.floor(times / (60 * 60 * 24));
            return day + "天";
        }
        else if (times >= 60 * 60) {
            var h = Math.floor(times / (60 * 60));
            return h + "小时";
        }
        else {
            return TimeUtil.S2H(times * 1000);
        }
    };
    /** 获取小时 */
    TimeUtil.getHours = function (times) {
        if (times < 0)
            return;
        return Math.floor(times / 1000 / 60 / 60);
    };
    /**
     * 获取字符串格式化数据
     * @param str
     */
    TimeUtil.fornatStr = function (str) {
        var arr = str.split("|");
        var obj = {};
        if (arr && arr.length) {
            for (var i = 0; i < arr.length; i++) {
                var data = TimeUtil.fornatStr1(arr[i]);
                var itemObj = {
                    "id": data[0],
                    "itemtType": data[1],
                    "num": data[2]
                };
                obj[data[0]] = itemObj;
            }
        }
        return obj;
    };
    TimeUtil.fornatStr1 = function (str, symbol) {
        if (symbol === void 0) { symbol = "#"; }
        var arr = str.split(symbol);
        return arr;
    };
    /**
     * 获取当前服务器时间
     * @returns {number}
     */
    TimeUtil.prototype.getCurServerTime = function () {
        var time = this._initializeSTime + Math.floor((new Date().getTime()) / 1000) - this._initializeCTime;
        return time;
    };
    /**
     * 获取结束时间
     * @returns {number}
     */
    TimeUtil.prototype.getEndTime = function (cdTime) {
        return this._firstSTime + cdTime;
    };
    /**
     * 获取cd时间
     * @returns {number}
     */
    TimeUtil.prototype.getCDTime = function (time) {
        var endTime = this.getEndTime(time);
        var nowTime = this.getCurServerTime();
        if (nowTime >= endTime) {
            return 0;
        }
        return endTime - nowTime;
    };
    TimeUtil.prototype.getCDTimes = function (endTime) {
        var curTimes = this.getCurServerTime();
        if (endTime <= curTimes) {
            return 0;
        }
        var result = endTime - curTimes;
        return result;
    };
    /**
     * 同步时间
     * @param {number} sTime 服务器时间
     * @param {number} cTime 客户端时间
     */
    TimeUtil.prototype.synctime = function (sTime, cTime) {
        this._initializeCTime = cTime;
        this._initializeSTime = sTime;
        if (!this._isLogin) {
            this._firstSTime = sTime;
            this._isLogin = true;
        }
    };
    /**
     * 时间戳和当前时间相差的毫秒数
     * @param longTypeDate
     */
    TimeUtil.prototype.calculationTimestamp = function (longTypeDate) {
        var datetimeType = "";
        var num = longTypeDate - this.getCurServerTime() * 1000;
        num = Math.floor(num);
        return num;
    };
    /**
     * 时间戳long转成number 返回秒数
     * @param longTypeDate
     */
    TimeUtil.fornateTimestamp = function (longTypeDate) {
        var datetimeType = "";
        var date = new Date();
        date.setTime(longTypeDate);
        var num = date.getTime();
        num = Math.floor(num / 1000);
        return num;
    };
    /** 获取多少天 */
    TimeUtil.getDay = function (times) {
        if (times <= 0)
            return;
        var date = new Date();
        date.setTime(times);
        return date.getDate() + "天";
    };
    return TimeUtil;
}());
__reflect(TimeUtil.prototype, "TimeUtil");
var utils;
(function (utils) {
    var timer;
    (function (timer) {
        function datetimeFormat(longTypeDate) {
            var datetimeType = "";
            var date = new Date();
            date.setTime(longTypeDate);
            datetimeType += date.getFullYear(); //年  
            datetimeType += "-" + getMonth(date); //月   
            datetimeType += "-" + getDay(date); //日  
            datetimeType += "  " + getHours(date); //时  
            datetimeType += ":" + getMinutes(date); //分
            datetimeType += ":" + getSeconds(date); //分
            return datetimeType;
        }
        timer.datetimeFormat = datetimeFormat;
        function getYYMMDD(longTypeDate) {
            var datetimeType = "";
            var date = new Date();
            date.setTime(longTypeDate);
            datetimeType += date.getFullYear(); //年  
            datetimeType += getMonth(date); //月   
            datetimeType += getDay(date); //日
            return parseInt(datetimeType);
        }
        timer.getYYMMDD = getYYMMDD;
        function MMDDFormat(longTypeDate) {
            var datetimeType = "";
            var date = new Date();
            date.setTime(longTypeDate);
            datetimeType += getMonth(date) + "月"; //月   
            datetimeType += getDay(date) + "日"; //日
            return datetimeType;
        }
        timer.MMDDFormat = MMDDFormat;
        function getHHMMSS(longTypeDate) {
            var datetimeType = "";
            var date = new Date();
            date.setTime(longTypeDate);
            datetimeType += getHours(date); //时  
            datetimeType += getMinutes(date); //分
            datetimeType += getSeconds(date); //分
            return parseInt(datetimeType);
        }
        timer.getHHMMSS = getHHMMSS;
        function HHMMFormat(longTypeDate) {
            var datetimeType = "";
            var date = new Date();
            date.setTime(longTypeDate);
            datetimeType += getHours(date); //时   
            datetimeType += ":" + getMinutes(date); //分
            return datetimeType;
        }
        timer.HHMMFormat = HHMMFormat;
        //返回 01-12 的月份值   
        function getMonth(date) {
            var month = "";
            month = date.getMonth() + 1; //getMonth()得到的月份是0-11  
            if (parseInt(month) < 10) {
                month = "0" + month;
            }
            return month;
        }
        //返回01-30的日期  
        function getDay(date) {
            var day = "";
            day = date.getDate();
            if (parseInt(day) < 10) {
                day = "0" + day;
            }
            return day;
        }
        //返回小时
        function getHours(date) {
            var hours = "";
            hours = date.getHours();
            if (parseInt(hours) < 10) {
                hours = "0" + hours;
            }
            return hours;
        }
        //返回分
        function getMinutes(date) {
            var minute = "";
            minute = date.getMinutes();
            if (parseInt(minute) < 10) {
                minute = "0" + minute;
            }
            return minute;
        }
        //返回秒
        function getSeconds(date) {
            var second = "";
            second = date.getSeconds();
            if (parseInt(second) < 10) {
                second = "0" + second;
            }
            return second;
        }
    })(timer = utils.timer || (utils.timer = {}));
})(utils || (utils = {}));
//# sourceMappingURL=TimeUtil.js.map