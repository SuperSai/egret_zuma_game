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
 * 战斗场景
 */
var BattleView = (function (_super) {
    __extends(BattleView, _super);
    function BattleView($controller, $layer) {
        var _this = _super.call(this, $controller, $layer) || this;
        _this.setResources(["battle"]);
        return _this;
    }
    BattleView.prototype.initUI = function () {
        _super.prototype.initUI.call(this);
        var self = this;
        self.touchEnabled = true;
        self._zuma = new ZumaCore();
        self._map = new BattleMap();
        self._role = new Role();
        self.addChild(self._map);
        self.addChild(self._zuma);
        self.addChild(self._role);
        //地图编辑器
        // let mapTest: MapTest = new MapTest();
        // self.addChild(mapTest);
    };
    BattleView.prototype.initData = function () {
        _super.prototype.initData.call(this);
        var self = this;
        self._zuma.init(self._role, self._battleModel.levelVO);
    };
    /** 添加监听事件 */
    BattleView.prototype.addEvents = function () {
        _super.prototype.addEvents.call(this);
        var self = this;
        self.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onBattleAttack, self);
    };
    /** 移除监听事件 */
    BattleView.prototype.removeEvents = function () {
        _super.prototype.removeEvents.call(this);
        var self = this;
        self.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onBattleAttack, self);
    };
    /** 面板开启执行函数，用于子类继承 */
    BattleView.prototype.open = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        _super.prototype.open.call(this, param);
        var self = this;
        self._battleModel = param[0];
        self.initMap(self._battleModel.levelVO);
        self.initRole();
    };
    /** 初始化地图 */
    BattleView.prototype.initMap = function (vo) {
        var self = this;
        self._map.init(self._battleModel);
    };
    /** 初始化角色 */
    BattleView.prototype.initRole = function () {
        var self = this;
        self._role.init(self._battleModel);
        self._role.setPosition(self._battleModel.levelVO.rolePosition.x, self._battleModel.levelVO.rolePosition.y);
    };
    /** 发射球 */
    BattleView.prototype.onBattleAttack = function (evt) {
        var self = this;
        //更新角色旋转角度
        self.updateRoleAngle(evt.stageX, evt.stageY);
        if (!self._role.canShoot || !self._zuma.canShoot)
            return;
        self._zuma.shootBall();
    };
    /** 更新角色角度 */
    BattleView.prototype.updateRoleAngle = function ($x, $y) {
        var self = this;
        var angle = App.MathUtils.Angle(new egret.Point(self._role.x, self._role.y), new egret.Point(self._role.x, self._role.y - 500), new egret.Point($x, $y));
        self._role.angle = $x <= self._role.x ? angle : -angle;
    };
    return BattleView;
}(BaseSpriteView));
__reflect(BattleView.prototype, "BattleView");
//# sourceMappingURL=BattleView.js.map