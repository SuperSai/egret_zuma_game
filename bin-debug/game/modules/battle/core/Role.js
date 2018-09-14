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
 * 角色
 */
var Role = (function (_super) {
    __extends(Role, _super);
    function Role() {
        var _this = _super.call(this) || this;
        //各个颜色的小球是否存在
        _this.blueExist = true;
        _this.whiteExist = true;
        _this.orangeExist = true;
        _this.redExist = true;
        _this.purpleExist = true;
        _this.greenExist = true;
        _this.yellowExist = true;
        var self = _this;
        return _this;
    }
    Role.prototype.init = function (battleModel) {
        var self = this;
        self._battleModel = battleModel;
        self._roleContainer = new egret.DisplayObjectContainer();
        self.addChild(self._roleContainer);
        self.updateRole();
    };
    /** 初始化展示球 */
    Role.prototype.initBall = function () {
        var self = this;
        self.currentBall = self.getBall();
        self.currentBall.x = self._roleContainer.width / 2 - self.currentBall.width / 2;
        self.currentBall.y = 0;
        self.nextBall = self.getBall();
        self.nextBall.x = self._roleContainer.width / 2 - self.currentBall.width / 2;
        self.nextBall.y = -42;
        self.addChild(self.currentBall);
        self.addChild(self.nextBall);
        egret.Tween.get(self.currentBall).to({ y: 40 }, 300).call(self.onMoveFinished, self);
        egret.Tween.get(self.nextBall).to({ y: 16 }, 300).call(function () { egret.Tween.removeTweens(self.nextBall); });
    };
    /** 发射的时候，从此发射器中获当前取小球 */
    Role.prototype.getCurrentBall = function () {
        var self = this;
        self._canShoot = false;
        var _ball = self.currentBall;
        self.nextShoot();
        return _ball;
    };
    /** 准备下一发 */
    Role.prototype.nextShoot = function () {
        var self = this;
        self.removeChild(self.currentBall);
        self.currentBall = self.nextBall;
        self.currentBall.x = self._roleContainer.width / 2 - self.currentBall.width / 2;
        self.currentBall.y = 0;
        self.nextBall = self.getBall();
        self.nextBall.x = self._roleContainer.width / 2 - self.currentBall.width / 2;
        self.nextBall.y = -42;
        self.addChild(self.nextBall);
        egret.Tween.get(self.currentBall).to({ y: 40 }, 300).call(self.onMoveFinished, self);
        egret.Tween.get(self.nextBall).to({ y: 16 }, 300).call(function () { egret.Tween.removeTweens(self.nextBall); });
    };
    /** 随机获取小球 */
    Role.prototype.getBall = function () {
        var self = this;
        var _ball;
        end: while (true) {
            var randomNum = App.RandomUtils.randint(0, self._battleModel.levelVO.colorBallCount);
            switch (randomNum) {
                case 0:
                    if (self.blueExist) {
                        _ball = new Ball(randomNum);
                        break end;
                    }
                    break;
                case 1:
                    if (self.whiteExist) {
                        _ball = new Ball(randomNum);
                        break end;
                    }
                    break;
                case 2:
                    if (self.orangeExist) {
                        _ball = new Ball(randomNum);
                        break end;
                    }
                    break;
                case 3:
                    if (self.redExist) {
                        _ball = new Ball(randomNum);
                        break end;
                    }
                    break;
                case 4:
                    if (self.purpleExist) {
                        _ball = new Ball(randomNum);
                        break end;
                    }
                    break;
                case 5:
                    if (self.greenExist) {
                        _ball = new Ball(randomNum);
                        break end;
                    }
                    break;
                case 6:
                    if (self.yellowExist) {
                        _ball = new Ball(randomNum);
                        break end;
                    }
                    break;
            }
        }
        return _ball;
    };
    /** 检查颜色，防止发射器中出现球链中没有的颜色 */
    Role.prototype.colorCleared = function (color) {
        var self = this;
        switch (color) {
            case 0:
                self.blueExist = false;
                break;
            case 1:
                self.whiteExist = false;
                break;
            case 2:
                self.orangeExist = false;
                break;
            case 3:
                self.redExist = false;
                break;
            case 4:
                self.purpleExist = false;
                break;
            case 5:
                self.greenExist = false;
                break;
            case 6:
                self.yellowExist = false;
                break;
        }
        //全部颜色的球清除完毕说明游戏已结束，将发射器中的球缩回
        if (!(self.blueExist || self.whiteExist || self.orangeExist || self.redExist || self.purpleExist || self.greenExist || self.yellowExist)) {
            self._canShoot = false;
            egret.Tween.get(self.currentBall).to({ y: -25 }, 300).call(self.onMoveFinished, self);
            egret.Tween.get(self.nextBall).to({ y: -26 }, 300).call(function () { egret.Tween.removeTweens(self.nextBall); });
        }
        else {
            //被清除的颜色与当前球，下一个球相同则更换
            if (self.currentBall.color == color) {
                self.removeChild(self.currentBall);
                self.currentBall = self.getBall();
                self.currentBall.x = 0;
                self.currentBall.y = 25;
                self.addChild(self.currentBall);
            }
            if (self.nextBall.color == color) {
                self.removeChild(self.nextBall);
                self.nextBall = self.getBall();
                self.nextBall.x = 0;
                self.nextBall.y = -26;
                self.addChild(self.nextBall);
            }
        }
    };
    /** 移动效果结束 */
    Role.prototype.onMoveFinished = function () {
        var self = this;
        egret.Tween.removeTweens(self.currentBall);
        self._canShoot = true;
    };
    /** 更新角色 */
    Role.prototype.updateRole = function () {
        var self = this;
        var path = PathConfig.RolePath.replace("{0}", self._battleModel.roleId + "");
        App.DisplayUtils.removeAllChildren(self._roleContainer);
        App.DisplayUtils.addAsyncBimapToContainer(path, self._roleContainer, function () {
            self.anchorOffsetX = self.width / 2;
            self.anchorOffsetY = self.height / 2;
        });
    };
    /** 设置角色位置 */
    Role.prototype.setPosition = function ($x, $y) {
        var self = this;
        self.x = $x;
        self.y = $y;
    };
    Object.defineProperty(Role.prototype, "angle", {
        /** 设置角度 */
        set: function (angle) {
            this.rotation = angle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Role.prototype, "canShoot", {
        /** 是否可以攻击 */
        get: function () { return this._canShoot; },
        enumerable: true,
        configurable: true
    });
    ;
    return Role;
}(egret.DisplayObjectContainer));
__reflect(Role.prototype, "Role");
//# sourceMappingURL=Role.js.map