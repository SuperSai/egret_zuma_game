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
 * 关卡地图
 */
var LevelMap = (function (_super) {
    __extends(LevelMap, _super);
    function LevelMap() {
        return _super.call(this) || this;
    }
    /** 初始化地图 */
    LevelMap.prototype.init = function (levelModel) {
        var self = this;
        self._levelModel = levelModel;
        self._mapContainer = new egret.DisplayObjectContainer();
        this._mapContainer.touchChildren = false;
        self._mapContainer.touchEnabled = false;
        self.addChild(self._mapContainer);
        self.updateMap();
    };
    LevelMap.prototype.updateMap = function () {
        var self = this;
        var path = PathConfig.LevelPath.replace("{0}", self._levelModel.levelMapVO.icon + "");
        App.DisplayUtils.removeAllChildren(self._mapContainer);
        App.DisplayUtils.addAsyncBimapToContainer(path, self._mapContainer);
    };
    return LevelMap;
}(egret.Sprite));
__reflect(LevelMap.prototype, "LevelMap");
//# sourceMappingURL=LevelMap.js.map