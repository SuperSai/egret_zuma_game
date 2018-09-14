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
 * 战斗地图
 */
var BattleMap = (function (_super) {
    __extends(BattleMap, _super);
    function BattleMap() {
        var _this = _super.call(this) || this;
        //每一步的长度
        _this._stepLength = 2;
        return _this;
    }
    /** 初始化地图 */
    BattleMap.prototype.init = function (battleModel) {
        var self = this;
        self._battleModel = battleModel;
        self._mapContainer = new egret.DisplayObjectContainer();
        this._mapContainer.touchChildren = false;
        self._mapContainer.touchEnabled = false;
        self.addChild(self._mapContainer);
        self.updateMap();
        self.initMapData();
    };
    BattleMap.prototype.initMapData = function () {
        var self = this;
        self._path = new egret.Sprite();
        self._mapList = self._battleModel.levelVO.mapData;
        self._path.graphics.lineStyle(2, 0xFFFFFF);
        self._path.graphics.moveTo(self._mapList[0][0], self._mapList[0][1]);
        for (var i = 1; i < self._mapList.length - 2; ++i) {
            var xc = (self._mapList[i][0] + self._mapList[i + 1][0]) / 2;
            var yc = (self._mapList[i][1] + self._mapList[i + 1][1]) / 2;
            self._path.graphics.curveTo(self._mapList[i][0], self._mapList[i][1], xc, yc);
        }
        self._path.graphics.curveTo(self._mapList[self._mapList.length - 2][0], self._mapList[self._mapList.length - 2][1], self._mapList[self._mapList.length - 2 + 1][0], self._mapList[self._mapList.length - 2 + 1][1]);
        for (var j = 0; j < self._mapList.length - 2; ++j) {
            var p0 = (j == 0) ? new egret.Point(self._mapList[0][0], self._mapList[0][1]) : new egret.Point((self._mapList[j][0] + self._mapList[j + 1][0]) / 2, (self._mapList[j][1] + self._mapList[j + 1][1]) / 2);
            var p1 = new egret.Point(self._mapList[j + 1][0], self._mapList[j + 1][1]);
            var p2 = (j <= self._mapList.length - 4) ? new egret.Point((self._mapList[j + 1][0] + self._mapList[j + 2][0]) / 2, (self._mapList[j + 1][1] + self._mapList[j + 2][1]) / 2) : new egret.Point(self._mapList[j + 2][0], self._mapList[j + 2][1]);
            var steps = Bezier.init(p0, p1, p2, self._stepLength);
            for (var m = 1; m <= steps; ++m) {
                var data = Bezier.getAnchorPoint(m);
                BattleConst.MapData.push(data);
            }
        }
        var l = BattleConst.MapData.length;
        self._path.graphics.beginFill(0xFF3300);
        self._path.graphics.drawCircle(BattleConst.MapData[l - 9][0], BattleConst.MapData[l - 9][1], 18);
        self._path.graphics.endFill();
        self.addChild(self._path);
    };
    /** 更新地图 */
    BattleMap.prototype.updateMap = function () {
        var self = this;
        var path = PathConfig.MapPath.replace("{0}", self._battleModel.levelVO.icon + "");
        App.DisplayUtils.removeAllChildren(self._mapContainer);
        App.DisplayUtils.addAsyncBimapToContainer(path, self._mapContainer);
    };
    return BattleMap;
}(egret.Sprite));
__reflect(BattleMap.prototype, "BattleMap");
//# sourceMappingURL=BattleMap.js.map