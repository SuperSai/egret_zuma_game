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
var BattleModel = (function (_super) {
    __extends(BattleModel, _super);
    function BattleModel($controller) {
        return _super.call(this, $controller) || this;
    }
    Object.defineProperty(BattleModel.prototype, "levelVO", {
        get: function () {
            return this._levelVO;
        },
        set: function (value) {
            this._levelVO = value;
        },
        enumerable: true,
        configurable: true
    });
    return BattleModel;
}(BaseModel));
__reflect(BattleModel.prototype, "BattleModel");
var BALL_TYPE;
(function (BALL_TYPE) {
    BALL_TYPE[BALL_TYPE["BALL"] = 0] = "BALL";
    BALL_TYPE[BALL_TYPE["ATTACK_BALL"] = 1] = "ATTACK_BALL";
})(BALL_TYPE || (BALL_TYPE = {}));
var BALL_ANIM;
(function (BALL_ANIM) {
    BALL_ANIM[BALL_ANIM["DEFAULT"] = 0] = "DEFAULT";
    BALL_ANIM[BALL_ANIM["BOMB"] = 1] = "BOMB";
})(BALL_ANIM || (BALL_ANIM = {}));
var BALL_MOVE;
(function (BALL_MOVE) {
    /** 正常移动 */
    BALL_MOVE[BALL_MOVE["DEFAULT"] = 0] = "DEFAULT";
    /** 停止移动 */
    BALL_MOVE[BALL_MOVE["STOP"] = 1] = "STOP";
    /** 后退移动 */
    BALL_MOVE[BALL_MOVE["BACK_OFF"] = 2] = "BACK_OFF";
    /** 加速移动 */
    BALL_MOVE[BALL_MOVE["ACCELERATE"] = 3] = "ACCELERATE";
})(BALL_MOVE || (BALL_MOVE = {}));
var ROLE_STATE;
(function (ROLE_STATE) {
    /** 攻击 */
    ROLE_STATE[ROLE_STATE["ATTACK"] = 0] = "ATTACK";
})(ROLE_STATE || (ROLE_STATE = {}));
//# sourceMappingURL=BattleModel.js.map