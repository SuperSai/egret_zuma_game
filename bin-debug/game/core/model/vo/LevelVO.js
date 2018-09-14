var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var LevelVO = (function () {
    function LevelVO() {
    }
    Object.defineProperty(LevelVO.prototype, "rolePosition", {
        /** 角色位置 */
        get: function () {
            return this._rolePosition;
        },
        set: function (value) {
            this._rolePosition = ObjectUtils.splitToPoints(value)[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LevelVO.prototype, "mapData", {
        /** 地图数据 */
        get: function () {
            return this._mapData;
        },
        set: function (value) {
            this._mapData = ObjectUtils.splitMapData(value);
        },
        enumerable: true,
        configurable: true
    });
    return LevelVO;
}());
__reflect(LevelVO.prototype, "LevelVO");
//# sourceMappingURL=LevelVO.js.map