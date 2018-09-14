var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var BoneAnimationVO = (function () {
    function BoneAnimationVO() {
        this._positionOffset = "";
    }
    Object.defineProperty(BoneAnimationVO.prototype, "currentAnimationName", {
        get: function () {
            return this._currentAnimationName;
        },
        set: function (value) {
            if (value != "0") {
                this._currentAnimationName = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoneAnimationVO.prototype, "detectFrameEvent", {
        //是否侦测帧事件
        get: function () {
            return this._detectFrameEvent;
        },
        set: function (value) {
            this._detectFrameEvent = Number(value) == 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoneAnimationVO.prototype, "removeAtLastFrame", {
        get: function () {
            return this._removeAtLastFrame;
        },
        set: function (value) {
            this._removeAtLastFrame = Number(value) == 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoneAnimationVO.prototype, "isPauseAtLastFrame", {
        get: function () {
            return this._isPauseAtLastFrame;
        },
        set: function (value) {
            this._isPauseAtLastFrame = Number(value) == 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoneAnimationVO.prototype, "removeWhenRemoveFromStage", {
        get: function () {
            return this._removeWhenRemoveFromStage;
        },
        set: function (value) {
            this._removeWhenRemoveFromStage = Number(value) == 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoneAnimationVO.prototype, "positionOffset", {
        get: function () {
            return this._positionOffset;
        },
        set: function (value) {
            if (value != "0") {
                this._positionOffset = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    return BoneAnimationVO;
}());
__reflect(BoneAnimationVO.prototype, "BoneAnimationVO");
//# sourceMappingURL=BoneAnimationVO.js.map