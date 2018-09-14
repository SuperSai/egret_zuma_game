var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Bezier = (function () {
    function Bezier() {
    }
    //  速度函数
    Bezier.Speed = function (t) {
        return Math.sqrt(this.A * t * t + this.B * t + this.C);
    };
    //  长度函数
    Bezier.Length = function (t) {
        var temp1 = Math.sqrt(this.C + t * (this.B + this.A * t));
        var temp2 = (2 * this.A * t * temp1 + this.B * (temp1 - Math.sqrt(this.C)));
        var temp3 = Math.log(this.B + 2 * Math.sqrt(this.A) * Math.sqrt(this.C));
        var temp4 = Math.log(this.B + 2 * this.A * t + 2 * Math.sqrt(this.A) * temp1);
        var temp5 = 2 * Math.sqrt(this.A) * temp2;
        var temp6 = (this.B * this.B - 4 * this.A * this.C) * (temp3 - temp4);
        return (temp5 + temp6) / (8 * Math.pow(this.A, 1.5));
    };
    //  长度函数反函数，使用牛顿切线法求解
    Bezier.InvertL = function (t, l) {
        var t1 = t;
        var t2 = 0;
        do {
            t2 = t1 - (this.Length(t1) - l) / this.Speed(t1);
            if (Math.abs(t1 - t2) < 0.000001)
                break;
            t1 = t2;
        } while (true);
        return t2;
    };
    //  返回所需总步数
    Bezier.init = function ($p0, $p1, $p2, $speed) {
        this.p0 = $p0;
        this.p1 = $p1;
        this.p2 = $p2;
        //step = 30;
        this.ax = this.p0.x - 2 * this.p1.x + this.p2.x;
        this.ay = this.p0.y - 2 * this.p1.y + this.p2.y;
        this.bx = 2 * this.p1.x - 2 * this.p0.x;
        this.by = 2 * this.p1.y - 2 * this.p0.y;
        this.A = 4 * (this.ax * this.ax + this.ay * this.ay);
        this.B = 4 * (this.ax * this.bx + this.ay * this.by);
        this.C = this.bx * this.bx + this.by * this.by;
        //  计算长度
        this.total_length = this.Length(1);
        //  计算步数
        this.step = Math.floor(this.total_length / $speed);
        if (this.total_length % $speed > $speed / 2)
            this.step++;
        return this.step;
    };
    // 根据指定nIndex位置获取锚点：返回坐标和角度
    Bezier.getAnchorPoint = function (nIndex) {
        if (nIndex >= 0 && nIndex <= this.step) {
            var t = nIndex / this.step;
            //  如果按照线行增长，此时对应的曲线长度
            var l = t * this.total_length;
            //  根据L函数的反函数，求得l对应的t值
            t = this.InvertL(t, l);
            //  根据贝塞尔曲线函数，求得取得此时的x,y坐标
            var xx = (1 - t) * (1 - t) * this.p0.x + 2 * (1 - t) * t * this.p1.x + t * t * this.p2.x;
            var yy = (1 - t) * (1 - t) * this.p0.y + 2 * (1 - t) * t * this.p1.y + t * t * this.p2.y;
            //  获取切线
            var Q0 = new egret.Point((1 - t) * this.p0.x + t * this.p1.x, (1 - t) * this.p0.y + t * this.p1.y);
            var Q1 = new egret.Point((1 - t) * this.p1.x + t * this.p2.x, (1 - t) * this.p1.y + t * this.p2.y);
            //  计算角度
            var dx = Q1.x - Q0.x;
            var dy = Q1.y - Q0.y;
            var radians = Math.atan2(dy, dx);
            var degrees = radians * 180 / Math.PI;
            return [xx, yy, degrees];
        }
        else {
            return [];
        }
    };
    Bezier.step = 0; // 分割份数
    //  辅助变量
    Bezier.ax = 0;
    Bezier.ay = 0;
    Bezier.bx = 0;
    Bezier.by = 0;
    Bezier.A = 0;
    Bezier.B = 0;
    Bezier.C = 0;
    Bezier.total_length = 0; // 长度
    return Bezier;
}());
__reflect(Bezier.prototype, "Bezier");
//# sourceMappingURL=Bezier.js.map