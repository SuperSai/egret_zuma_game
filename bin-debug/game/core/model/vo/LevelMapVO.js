var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var LevelMapVO = (function () {
    function LevelMapVO() {
    }
    Object.defineProperty(LevelMapVO.prototype, "positions", {
        get: function () {
            return this._positions;
        },
        set: function (value) {
            this._positions = ObjectUtils.splitLevelMapPoints(value);
        },
        enumerable: true,
        configurable: true
    });
    return LevelMapVO;
}());
__reflect(LevelMapVO.prototype, "LevelMapVO");
//# sourceMappingURL=LevelMapVO.js.map