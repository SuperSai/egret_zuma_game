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
 * Created by yangsong on 15-1-27.
 * 摇杆控制类
 */
var RockerUtils = (function (_super) {
    __extends(RockerUtils, _super);
    function RockerUtils() {
        return _super.call(this) || this;
    }
    /**
     * 摇杆初始化
     * @param moveBg 摇杆背景图
     * @param moveFlag 摇杆图标
     * @param dealKeyFunc 摇杆移动时处理函数
     * @param dealKeyTarget 摇杆移动时处理函数所属对象
     */
    RockerUtils.prototype.init = function (moveBg, moveFlag, dealKeyFunc, dealKeyTarget) {
        this.keys = [0, 0];
        this.mouseX = -1;
        this.mouseY = -1;
        this.moveFlag = moveFlag;
        this.moveFlagX = moveFlag.x;
        this.moveFlagY = moveFlag.y;
        this.moveFlagGoX = this.moveFlagX;
        this.moveFlagGoY = this.moveFlagY;
        this.moveFlagWidthHelf = moveBg.width * 0.5;
        this.moveFlagRec = new egret.Rectangle(this.moveFlagX - moveBg.width * 0.5, this.moveFlagY - moveBg.height * 0.5, moveBg.width, moveBg.height);
        this.moveFlagCheckRec = new egret.Rectangle(0, 0, App.StageUtils.getWidth() * 0.5, App.StageUtils.getHeight());
        this.dealKeyFunc = dealKeyFunc;
        this.dealKeyTarget = dealKeyTarget;
        this.moveFlag.touchEnabled = true;
        this.moveFlag.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.startMove, this);
        this.moveFlag.addEventListener(egret.TouchEvent.TOUCH_END, this.stopMove, this);
        this.moveFlag.addEventListener(egret.TouchEvent.TOUCH_TAP, this.stopEvent, this);
        App.StageUtils.getStage().addEventListener(egret.TouchEvent.TOUCH_END, this.leaveStateEvent, this);
        App.StageUtils.getStage().addEventListener(egret.TouchEvent.TOUCH_MOVE, this.heroMoveEvent, this);
        //键盘控制
        App.KeyboardUtils.addKeyDown(this.onKeyDown, this);
        App.KeyboardUtils.addKeyUp(this.onKeyUp, this);
    };
    /**
     * 键盘按下处理
     * @param keyCode
     */
    RockerUtils.prototype.onKeyDown = function (keyCode) {
        switch (keyCode) {
            case Keyboard.A:
                this.keys[0] = -1;
                this.startCheckKey();
                break;
            case Keyboard.D:
                this.keys[0] = 1;
                this.startCheckKey();
                break;
            case Keyboard.W:
                this.keys[1] = -1;
                this.startCheckKey();
                break;
            case Keyboard.S:
                this.keys[1] = 1;
                this.startCheckKey();
                break;
            default:
                break;
        }
    };
    /**
     * 键盘弹起处理
     * @param keyCode
     */
    RockerUtils.prototype.onKeyUp = function (keyCode) {
        switch (keyCode) {
            case Keyboard.A:
                if (this.keys[0] == -1) {
                    this.keys[0] = 0;
                }
                break;
            case Keyboard.D:
                if (this.keys[0] == 1) {
                    this.keys[0] = 0;
                }
                break;
            case Keyboard.W:
                if (this.keys[1] == -1) {
                    this.keys[1] = 0;
                }
                break;
            case Keyboard.S:
                if (this.keys[1] == 1) {
                    this.keys[1] = 0;
                }
                break;
            default:
                break;
        }
    };
    /**
     * 事件拦截
     * @param e
     */
    RockerUtils.prototype.stopEvent = function (e) {
        e.stopPropagation();
    };
    /**
     * 手指离开Stage事件处理
     * @param e
     */
    RockerUtils.prototype.leaveStateEvent = function (e) {
        if (e.stageX == this.mouseX && e.stageY == this.mouseY) {
            this.stopMove();
        }
    };
    /**
     * 开始移动
     */
    RockerUtils.prototype.startMove = function (e) {
        this.isMoveing = true;
        this.moveFlagGoX = this.moveFlagX;
        this.moveFlagGoY = this.moveFlagY;
        this.mouseX = e.stageX;
        this.mouseY = e.stageY;
    };
    /**
     * 停止移动
     */
    RockerUtils.prototype.stopMove = function () {
        this.isMoveing = false;
        this.keys[0] = 0;
        this.keys[1] = 0;
        this.moveFlagGoX = this.moveFlagX;
        this.moveFlagGoY = this.moveFlagY;
        this.mouseX = -1;
        this.mouseY = -1;
    };
    /**
     * 复位摇杆位置
     */
    RockerUtils.prototype.resetRockerPos = function () {
        this.moveFlag.x = this.moveFlagX;
        this.moveFlag.y = this.moveFlagY;
    };
    /**
     * 摇杆移动事件
     * @param e
     */
    RockerUtils.prototype.heroMoveEvent = function (e) {
        this.runMove(e.stageX, e.stageY);
    };
    /**
     * 摇杆移动
     * @param e
     */
    RockerUtils.prototype.runMove = function (stageX, stageY) {
        if (!this.isMoveing) {
            return;
        }
        if (!this.moveFlagCheckRec.contains(stageX, stageY)) {
            if (Math.abs(this.mouseX - stageX) > 50 || Math.abs(this.mouseY - stageY) > 50) {
                return;
            }
        }
        this.mouseX = stageX;
        this.mouseY = stageY;
        if (this.moveFlagRec.contains(this.mouseX, this.mouseY)) {
            this.moveFlagGoX = this.mouseX;
            this.moveFlagGoY = this.mouseY;
        }
        else {
            var radian = App.MathUtils.getRadian2(this.moveFlagX, this.moveFlagY, this.mouseX, this.mouseY);
            this.moveFlagGoX = this.moveFlagX + Math.cos(radian) * this.moveFlagWidthHelf;
            this.moveFlagGoY = this.moveFlagY + Math.sin(radian) * this.moveFlagWidthHelf;
        }
        if (this.moveFlagGoX > this.moveFlagX && Math.abs(this.moveFlagGoX - this.moveFlagX) > 10) {
            this.keys[0] = 1;
        }
        else if (this.moveFlagGoX < this.moveFlagX && Math.abs(this.moveFlagGoX - this.moveFlagX) > 10) {
            this.keys[0] = -1;
        }
        else {
            this.keys[0] = 0;
        }
        if (this.moveFlagGoY > this.moveFlagY && Math.abs(this.moveFlagGoY - this.moveFlagY) > 10) {
            this.keys[1] = 1;
        }
        else if (this.moveFlagGoY < this.moveFlagY && Math.abs(this.moveFlagGoY - this.moveFlagY) > 10) {
            this.keys[1] = -1;
        }
        else {
            this.keys[1] = 0;
        }
        this.startCheckKey();
    };
    /**
     * 开启检测
     */
    RockerUtils.prototype.startCheckKey = function () {
        if (!this.checkKeying) {
            this.checkKeying = true;
            App.TimerManager.doFrame(1, 0, this.delKeys, this);
        }
    };
    /**
     * 停止检测
     */
    RockerUtils.prototype.stopCheckKey = function () {
        this.keys[0] = 0;
        this.keys[1] = 0;
        if (this.checkKeying) {
            App.TimerManager.remove(this.delKeys, this);
            this.checkKeying = false;
        }
    };
    /**
     * 检测
     */
    RockerUtils.prototype.delKeys = function () {
        if (this.mouseX != -1 && !this.moveFlagCheckRec.contains(this.mouseX, this.mouseY)) {
            this.stopMove();
        }
        if (this.moveFlag.x != this.moveFlagGoX) {
            this.moveFlag.x = this.moveFlagGoX;
        }
        if (this.moveFlag.y != this.moveFlagGoY) {
            this.moveFlag.y = this.moveFlagGoY;
        }
        if (!this.keys[0] && !this.keys[1]) {
            this.stopCheckKey();
        }
        if (!this.dealKeyFunc.call(this.dealKeyTarget, this.keys[0], this.keys[1])) {
            this.resetRockerPos();
        }
    };
    /**
     * 停止处理
     */
    RockerUtils.prototype.stop = function () {
        this.stopCheckKey();
        this.stopMove();
    };
    return RockerUtils;
}(BaseClass));
__reflect(RockerUtils.prototype, "RockerUtils");
//# sourceMappingURL=RockerUtils.js.map