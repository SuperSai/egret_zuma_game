var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var LevelConst = (function () {
    function LevelConst() {
    }
    LevelConst.LEVEL_INIT = 10000;
    return LevelConst;
}());
__reflect(LevelConst.prototype, "LevelConst");
//# sourceMappingURL=LevelConst.js.map