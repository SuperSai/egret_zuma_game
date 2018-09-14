var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var BattleConst = (function () {
    function BattleConst() {
    }
    BattleConst.BATTLE_INIT = 10000;
    /** 更新积分 */
    BattleConst.UPDATE_MAXCOBOM = 10001;
    //存储曲线地图的数据
    BattleConst.MapData = [];
    return BattleConst;
}());
__reflect(BattleConst.prototype, "BattleConst");
//# sourceMappingURL=BattleConst.js.map