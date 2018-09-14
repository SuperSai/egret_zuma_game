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
 * 球
 */
var Ball = (function (_super) {
    __extends(Ball, _super);
    function Ball(color) {
        var _this = _super.call(this) || this;
        var self = _this;
        self._color = color;
        self.init();
        return _this;
    }
    Ball.prototype.init = function () {
        var self = this;
        self._ball = new eui.Image();
        self.addChild(self._ball);
        self._ball.source = "ball_" + self._color;
        self.anchorOffsetX = self.anchorOffsetY = 16;
    };
    Object.defineProperty(Ball.prototype, "color", {
        get: function () {
            return this._color;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ball.prototype, "PROP", {
        //------------访问道具--------------------
        get: function () {
            return this.propType;
        },
        //------------设置道具--------------------
        set: function (type) {
            this.propType = type;
            // this.propMC = new propType();
            // this.addChild(this.propMC);
            // setTimeout(clearProp, staticVars.PropLife);
        },
        enumerable: true,
        configurable: true
    });
    //------------清除道具--------------------
    Ball.prototype.clearProp = function () {
        this.propType = null;
        this.removeChild(this.propMC);
        this.propMC = null;
    };
    Object.defineProperty(Ball.prototype, "posIndex", {
        //------------访问小球的位置 在地图曲线中的位置--------------
        get: function () {
            return this._posIndex;
        },
        //------------设置小球的位置--------------
        set: function ($pos) {
            this._posIndex = $pos;
            this.x = BattleConst.MapData[this._posIndex][0];
            this.y = BattleConst.MapData[this._posIndex][1];
            this.rotation = BattleConst.MapData[this._posIndex][2] - 90;
        },
        enumerable: true,
        configurable: true
    });
    //------------小球爆炸-------------------
    Ball.prototype.explode = function () {
        var self = this;
        self._ball.visible = false;
        var bomb = ResourcePool.Intance.pop("ui_bao01", ResourcePool.SKE);
        self.addChild(bomb);
        bomb.play(self.explodeComplete, self);
    };
    //------------爆炸结束--------------------
    Ball.prototype.explodeComplete = function () {
        var self = this;
        self.parent.removeChild(self);
    };
    //-----------克隆小球-----------------------
    Ball.prototype.clone = function () {
        return new Ball(this._color);
    };
    return Ball;
}(egret.Sprite));
__reflect(Ball.prototype, "Ball");
//# sourceMappingURL=Ball.js.map