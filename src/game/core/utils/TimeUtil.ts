/**
 * Created 2017/9/4.
 */

class TimeUtil {
    constructor() {
        let self = this;

    }

    private static _instance: TimeUtil;
    public static getInstance(): TimeUtil {
        if (!this._instance) {
            this._instance = new TimeUtil();
        }
        return this._instance;
    }

    /** 获取单一的当前时间 */
    public static getCDTime(times: number): string {
        if (times < 0) return;
        let h: string = Math.floor(times / 1000 / 60 / 60).toString();
        let m: string = Math.floor(times % (1000 * 3600) / (1000 * 60)).toString();
        let s: string = Math.floor((times % (1000 * 60)) / 1000).toString();

        if (Number(h) > 0) {
            return h + "h";
        }
        else if (Number(m) > 0) {
            return m + "m";
        }
        else if (Number(s) > 0) {
            return s + "s";
        }
        return "0";
    }

    /**
     * 时间毫秒转成小时
     * @param sec
     * @returns {number}
     * @constructor
     */
    public static S2H(times: number, symbol: string = ":", isH: boolean = true): string {
        if (times < 0) return;
        let h: string = Math.floor(times / 1000 / 60 / 60).toString();
        let m: string = Math.floor(times % (1000 * 3600) / (1000 * 60)).toString();
        let s: string = Math.floor((times % (1000 * 60)) / 1000).toString();
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
        } else {
            var restult = m + symbol + s;
        }

        return restult;
    }

    public static conversionTime(times: number) {
        if (times <= 0) return "";
        if (times >= 60 * 60 * 24) {
            let day: number = Math.floor(times / (60 * 60 * 24));
            return day + "天";
        } else if (times >= 60 * 60) {
            let h: number = Math.floor(times / (60 * 60));
            return h + "小时";
        } else {
            return TimeUtil.S2H(times * 1000);
        }
    }
    
    /** 获取小时 */
    public static getHours(times: number): number {
        if (times < 0) return;
        return Math.floor(times / 1000 / 60 / 60);
    }

    /**
     * 获取字符串格式化数据
     * @param str
     */
    public static fornatStr(str: string): any {
        let arr: string[] = str.split("|");
        let obj: any = {};
        if (arr && arr.length) {
            for (var i = 0; i < arr.length; i++) {
                let data = TimeUtil.fornatStr1(arr[i]);
                let itemObj: any = {
                    "id": data[0],
                    "itemtType": data[1],
                    "num": data[2]
                };
                obj[data[0]] = itemObj;
            }
        }
        return obj;
    }

    private static fornatStr1(str: string, symbol: string = "#"): any {
        let arr: string[] = str.split(symbol);
        return arr;
    }

    private _initializeSTime: number = 0;//初始化服务器时间
    private _initializeCTime: number = 0;//初始化客户端时间
    private _firstSTime: number = 0;//服务器登录时间
    private _isLogin: boolean = false;


    /**
     * 获取当前服务器时间
     * @returns {number}
     */
    public getCurServerTime(): number {
        let time: number = this._initializeSTime + Math.floor((new Date().getTime()) / 1000) - this._initializeCTime;
        return time;
    }

    /**
     * 获取结束时间
     * @returns {number}
     */
    public getEndTime(cdTime: number): number {
        return this._firstSTime + cdTime;
    }

    /**
     * 获取cd时间
     * @returns {number}
     */
    public getCDTime(time: number): number {
        let endTime: number = this.getEndTime(time);
        let nowTime: number = this.getCurServerTime();
        if (nowTime >= endTime) {
            return 0;
        }
        return endTime - nowTime;
    }

    public getCDTimes(endTime: number): number {
        let curTimes: number = this.getCurServerTime();
        if (endTime <= curTimes) {
            return 0;
        }
        let result: number = endTime - curTimes;
        return result;
    }

    /**
     * 同步时间
     * @param {number} sTime 服务器时间
     * @param {number} cTime 客户端时间
     */
    public synctime(sTime: number, cTime: number): void {
        this._initializeCTime = cTime;
        this._initializeSTime = sTime;
        if (!this._isLogin) {
            this._firstSTime = sTime;
            this._isLogin = true;
        }
    }

    /**
     * 时间戳和当前时间相差的毫秒数
     * @param longTypeDate
     */
    public calculationTimestamp(longTypeDate: number): number {
        var datetimeType = "";
        let num: number = longTypeDate - this.getCurServerTime() * 1000;
        num = Math.floor(num);
        return num;
    }

    /**
     * 时间戳long转成number 返回秒数
     * @param longTypeDate
     */
    public static fornateTimestamp(longTypeDate): number {
        var datetimeType = "";
        var date = new Date();
        date.setTime(longTypeDate);
        let num: number = date.getTime();
        num = Math.floor(num / 1000);
        return num;
    }
    /** 获取多少天 */
    public static getDay(times: number): string {
        if (times <= 0) return;
        let date = new Date();
        date.setTime(times);
        return date.getDate() + "天";
    }
}

module utils.timer {
    export function datetimeFormat(longTypeDate) {
        var datetimeType = "";
        var date = new Date();
        date.setTime(longTypeDate);
        datetimeType += date.getFullYear();   //年  
        datetimeType += "-" + getMonth(date); //月   
        datetimeType += "-" + getDay(date);   //日  
        datetimeType += "  " + getHours(date);   //时  
        datetimeType += ":" + getMinutes(date);      //分
        datetimeType += ":" + getSeconds(date);      //分
        return datetimeType;
    }

    export function getYYMMDD(longTypeDate): number {
        var datetimeType = "";
        var date = new Date();
        date.setTime(longTypeDate);
        datetimeType += date.getFullYear();   //年  
        datetimeType += getMonth(date); //月   
        datetimeType += getDay(date);   //日
        return parseInt(datetimeType);
    }

    export function MMDDFormat(longTypeDate) {
        var datetimeType = "";
        var date = new Date();
        date.setTime(longTypeDate);
        datetimeType += getMonth(date) + "月"; //月   
        datetimeType += getDay(date) + "日";   //日
        return datetimeType;
    }

    export function getHHMMSS(longTypeDate): number {
        var datetimeType = "";
        var date = new Date();
        date.setTime(longTypeDate);
        datetimeType += getHours(date);   //时  
        datetimeType += getMinutes(date);      //分
        datetimeType += getSeconds(date);      //分
        return parseInt(datetimeType);
    }
    export function HHMMFormat(longTypeDate) {
        var datetimeType = "";
        var date = new Date();
        date.setTime(longTypeDate);
        datetimeType += getHours(date); //时   
        datetimeType += ":" + getMinutes(date);   //分
        return datetimeType;
    }
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
}