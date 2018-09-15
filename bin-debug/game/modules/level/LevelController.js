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
 * 关卡控制器
 */
var LevelController = (function (_super) {
    __extends(LevelController, _super);
    function LevelController() {
        var _this = _super.call(this) || this;
        var self = _this;
        self._levelView = new LevelView(self, LayerManager.GAME_MAP_LAYER);
        App.ViewManager.register(ViewConst.Level, _this._levelView);
        //Model初始化
        _this._levelModel = new LevelModel(_this);
        //注册模块消息
        _this.registerFunc(LevelConst.LEVEL_INIT, _this.onLevelInit, _this);
        return _this;
    }
    LevelController.prototype.onLevelInit = function (mapId) {
        var self = this;
        self._levelModel.levelMapVO = GlobleData.getData(GlobleData.LevelMapVO, mapId);
        App.ViewManager.open(ViewConst.Level, self._levelModel);
    };
    return LevelController;
}(BaseController));
__reflect(LevelController.prototype, "LevelController");
//# sourceMappingURL=LevelController.js.map