var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var HallConst = (function () {
    function HallConst() {
    }
    HallConst.HALL_INIT = 10000;
    return HallConst;
}());
__reflect(HallConst.prototype, "HallConst");
//# sourceMappingURL=HallConst.js.map