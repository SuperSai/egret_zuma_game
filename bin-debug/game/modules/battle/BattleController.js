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
 * 战斗控制类
 */
var BattleController = (function (_super) {
    __extends(BattleController, _super);
    function BattleController() {
        var _this = _super.call(this) || this;
        var self = _this;
        //View初始化
        _this._battleView = new BattleView(_this, LayerManager.GAME_MAP_LAYER);
        App.ViewManager.register(ViewConst.Battle, _this._battleView);
        self._battleUIView = new BattleUIView(self, LayerManager.GAME_UI_LAYER);
        App.ViewManager.register(ViewConst.BattleUI, _this._battleUIView);
        //Model初始化
        _this._battleModel = new BattleModel(_this);
        //注册模块消息
        _this.registerFunc(BattleConst.BATTLE_INIT, _this.onBattleInit, _this);
        return _this;
    }
    BattleController.prototype.onBattleInit = function (param) {
        var self = this;
        self._battleModel.levelVO = GlobleData.getData(GlobleData.LevelVO, param[0]);
        self._battleModel.roleId = param[1];
        App.ViewManager.open(ViewConst.Battle, self._battleModel);
        App.ViewManager.open(ViewConst.BattleUI, self._battleModel);
    };
    return BattleController;
}(BaseController));
__reflect(BattleController.prototype, "BattleController");
//# sourceMappingURL=BattleController.js.map