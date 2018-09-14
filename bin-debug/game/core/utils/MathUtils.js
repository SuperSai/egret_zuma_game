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
var MathUtils = (function (_super) {
    __extends(MathUtils, _super);
    function MathUtils() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Deg2Rad = 0.01745329;
        _this.Rad2Deg = 57.29578;
        _this.Max = 9999999;
        return _this;
    }
    /** 求2条线段的夹角 */
    MathUtils.prototype.Angle = function (pos1, pos2, pos3) {
        var cosfi = 0, fi = 0, norm = 0;
        var dsx = pos2.x - pos1.x;
        var dsy = pos2.y - pos1.y;
        var dex = pos3.x - pos1.x;
        var dey = pos3.y - pos1.y;
        cosfi = dsx * dex + dsy * dey;
        norm = (dsx * dsx + dsy * dsy) * (dex * dex + dey * dey);
        cosfi /= Math.sqrt(norm);
        if (cosfi >= 1.0)
            return 0;
        if (cosfi <= -1.0)
            return Math.PI;
        fi = Math.acos(cosfi);
        if (180 * fi / Math.PI < 180) {
            return 180 - 180 * fi / Math.PI;
        }
        else {
            return 360 - 180 * fi / Math.PI;
        }
    };
    MathUtils.prototype.Clamp = function (maxValue, minValue, value) {
        return Math.max(minValue, Math.min(value, maxValue));
    };
    MathUtils.prototype.Approximately = function (a, b) {
        return Math.abs(a - b) < 0.01;
    };
    MathUtils.prototype.Range = function (start, end) {
        var max = Math.max(start, end);
        var min = Math.min(start, end);
        return Math.random() * (max - min) + min;
    };
    MathUtils.prototype.moveToNextPosition = function (startPoint, endPoint, speed) {
        var angle = this.getAngle(startPoint, endPoint);
        var resultX = startPoint.x + speed * Math.cos(angle * Math.PI / 180);
        var resultY = startPoint.y - speed * Math.sin(angle * Math.PI / 180);
        startPoint.x = resultX;
        startPoint.y = resultY;
    };
    MathUtils.prototype.getAngle = function (point1, point2) {
        var vx = point2.x - point1.x;
        var vy = point2.y - point1.y;
        var hyp = Math.sqrt(Math.pow(vx, 2) + Math.pow(vy, 2));
        var rad = Math.acos(vx / hyp);
        var deg = 180 / (Math.PI / rad);
        //得到了一个角度“rad”，不过是以弧度为单位的
        //把它转换成角度 
        if (vy < 0) {
            deg = (-deg);
        }
        else if ((vy == 0) && (vx < 0)) {
            deg = 180;
        }
        return deg;
    };
    MathUtils.prototype.getNewAngle = function (point1, point2) {
        var angle = 180 + Math.atan2(point1.x - point2.x, point1.y - point2.y) * 180 / Math.PI;
        return angle;
    };
    MathUtils.prototype.randomBool = function () {
        return Math.round(Math.random()) == 1;
    };
    MathUtils.prototype.randomPointFromRect = function (rect) {
        var self = this;
        var pos = new egret.Point();
        pos.x = Math.random() * rect[2] + rect[0];
        pos.y = Math.random() * rect[3] + rect[1];
        return pos;
    };
    /**
     * 角度值转换为弧度制
     * @param angle
     */
    MathUtils.prototype.getRadian = function (angle) {
        return angle / 180 * Math.PI;
    };
    /**
     * 获取两点间弧度
     * @param p1X
     * @param p1Y
     * @param p2X
     * @param p2Y
     * @returns {number}
     */
    MathUtils.prototype.getRadian2 = function (p1X, p1Y, p2X, p2Y) {
        var xdis = p2X - p1X;
        var ydis = p2Y - p1Y;
        return Math.atan2(ydis, xdis);
    };
    /**
     * 获取两点间距离
     * @param p1X
     * @param p1Y
     * @param p2X
     * @param p2Y
     * @returns {number}
     */
    MathUtils.prototype.getDistance = function (p1X, p1Y, p2X, p2Y) {
        var disX = p2X - p1X;
        var disY = p2Y - p1Y;
        var disQ = disX * disX + disY * disY;
        return Math.sqrt(disQ);
    };
    /**
     * 角度转换成弧度 degrees -> radians
     * @param degrees 角度
     * @return 相应的弧度
     */
    MathUtils.prototype.dgs2rds = function (degrees) {
        return degrees * Math.PI / 180;
    };
    /**
     * 弧度转换成角度  radians -> degrees
     * @param radians 弧度
     * @return 相应的角度
     */
    MathUtils.prototype.rds2dgs = function (radians) {
        return this.fixAngle(radians * 180 / Math.PI);
    };
    /**
     * 标准化角度值，将传入的角度值返回成一个确保落在 0 ~ 360 之间的数字。
     * <pre>
     * MathUtil.fixAngle(380); // 返回 20
     * MathUtil.fixAngle(-340); // 返回 20
     * </pre>
     */
    MathUtils.prototype.fixAngle = function (angle) {
        angle %= 360;
        if (angle < 0)
            return angle + 360;
        return angle;
    };
    return MathUtils;
}(BaseClass));
__reflect(MathUtils.prototype, "MathUtils");
//# sourceMappingURL=MathUtils.js.map