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
var BoneAnimation = (function (_super) {
    __extends(BoneAnimation, _super);
    //播放一次然后停住 1
    //播放一次后直接移除 -1
    //无线播放 0
    function BoneAnimation(skeName) {
        var _this = _super.call(this) || this;
        _this._isLoadComplete = false;
        _this._isInPool = false;
        _this._timeScale = 1;
        _this._currentAnimationName = "";
        _this._isPauseAtLastFrame = false;
        _this._removeAtLastFrame = true;
        _this._removeWhenRemoveFromStage = true;
        _this._playTimes = 1;
        _this._detectFrameEvent = false;
        _this._direction = 1;
        _this._startframeIndex = 0;
        _this._param = "";
        _this._skeName = skeName;
        if (_this._skeName == BoneAnimation.traceID)
            LogManager.logFormat("LoadBone constructor {0}", BoneAnimation.traceID);
        return _this;
    }
    BoneAnimation.prototype.play = function (complete, thisObject) {
        if (complete === void 0) { complete = null; }
        if (thisObject === void 0) { thisObject = null; }
        if (this._skeName == BoneAnimation.traceID)
            LogManager.logFormat("LoadBone play {0}", BoneAnimation.traceID);
        this._complete = complete;
        this._completeTarget = thisObject;
        this.addEventListener(BoneAnimation.LOAD_COMPLETE, this.playNow, this);
        if (this._isLoadComplete)
            this.playNow();
    };
    BoneAnimation.prototype.stop = function (animation) {
        if (this.armature == null)
            return;
        this.armature.animation.stop(animation);
    };
    BoneAnimation.prototype.playNow = function () {
        if (this._skeName == BoneAnimation.traceID)
            LogManager.logFormat("LoadBone playNow {0}", BoneAnimation.traceID);
        if (this._isInPool)
            LogManager.warningFormat("{0} current is in pool must be not play", this._skeName);
        this.removeEventListener(BoneAnimation.LOAD_COMPLETE, this.playNow, this);
        if (this._currentAnimationName == "")
            this._currentAnimationName = this.getRandomAnimationName();
        dragonBones.WorldClock.clock.add(this.armature);
        this.armature.animation.gotoAndPlayByFrame(this._currentAnimationName, this._startframeIndex, this.playTimes);
        this.armature.eventDispatcher.addDBEventListener(dragonBones.EventObject.LOOP_COMPLETE, this.playComplete, this);
        if (this.detectFrameEvent)
            this.armature.eventDispatcher.addDBEventListener(dragonBones.EventObject.FRAME_EVENT, this.onFrameEventFired, this);
        if (this.removeWhenRemoveFromStage)
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onBoneRemove, this);
    };
    BoneAnimation.prototype.load = function () {
        if (this._skeName == BoneAnimation.traceID)
            LogManager.logFormat("LoadBone load start {0}", BoneAnimation.traceID);
        App.ResUtil.loadGroup(this._skeName, this.loadComplete, this, ResUtil.PRIORITY_H);
    };
    BoneAnimation.prototype.onFrameEventFired = function (event) {
        //要去实现
        this.dispatchEvent(new egret.Event(BoneAnimation.FRAME_EVENT, true, true, event.data));
    };
    BoneAnimation.prototype.loadComplete = function () {
        if (this._skeName == BoneAnimation.traceID)
            LogManager.logFormat("LoadBone loadComplete start {0}", BoneAnimation.traceID);
        this.armature = App.BoneManager.getArmature(this._skeName);
        this._isLoadComplete = true;
        this.addChild(this.armature.display);
        this.initBone();
        this.dispatchEvent(new egret.Event(BoneAnimation.LOAD_COMPLETE, true, true, this));
        if (this._skeName == BoneAnimation.traceID)
            LogManager.logFormat("LoadBone loadComplete createComplete {0}", BoneAnimation.traceID);
    };
    /*
    * 为对象池的引用添加一些预设
    * */
    BoneAnimation.prototype.resetForPool = function () {
        if (this._skeName == BoneAnimation.traceID)
            LogManager.logFormat("LoadBone resetForPool {0}", BoneAnimation.traceID);
        this._isInPool = true;
        if (!this._isLoadComplete)
            return;
        this.armature.animation.stop();
        this.armature.animation.timeScale = this._timeScale = 1;
        this.armature.display.scaleX = this._direction = 1;
        dragonBones.WorldClock.clock.remove(this.armature);
        App.DisplayUtils.resetDisplay(this);
        App.DisplayUtils.resetDisplay(this.armature.display);
    };
    BoneAnimation.prototype.playComplete = function () {
        if (this._skeName == BoneAnimation.traceID)
            LogManager.logFormat("LoadBone playComplete {0}", BoneAnimation.traceID);
        this.armature.eventDispatcher.removeDBEventListener(dragonBones.EventObject.LOOP_COMPLETE, this.playComplete, this);
        if (this.isPauseAtLastFrame) {
            this.armature.animation.stop(this._currentAnimationName);
        }
        if (this.removeAtLastFrame) {
            this.onBoneRemove();
        }
        if (this._complete != null && this._completeTarget != null) {
            this._complete.call(this._completeTarget);
        }
        this.dispatchEvent(new egret.Event(BoneAnimation.LOOP_COMPLETE, true, true, this));
    };
    BoneAnimation.prototype.onBoneRemove = function () {
        // 有时候会出现没有播放完成就remove的情况，所以这里还要再remove一次事件；
        if (this._skeName == BoneAnimation.traceID)
            LogManager.logFormat("LoadBone onBoneRemove {0}", BoneAnimation.traceID);
        this.armature.eventDispatcher.removeDBEventListener(dragonBones.EventObject.LOOP_COMPLETE, this.playComplete, this);
        this.armature.eventDispatcher.removeDBEventListener(dragonBones.EventObject.FRAME_EVENT, this.onFrameEventFired, this);
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onBoneRemove, this);
        if (!ResourcePool.Intance.hasItem(this, ResourcePool.SKE)) {
            ResourcePool.Intance.push(this, ResourcePool.SKE);
        }
    };
    BoneAnimation.prototype.initBone = function () {
        if (this._skeName == BoneAnimation.traceID)
            LogManager.logFormat("LoadBone initBone {0}", BoneAnimation.traceID);
        this._isInPool = false;
        if (this._isLoadComplete)
            this.armature.animation.timeScale = this._timeScale;
        if (this._isLoadComplete)
            this.armature.display.scaleX = this._direction;
        if (this._positionString) {
            this.position = this.position;
        }
    };
    BoneAnimation.prototype.gotoAndStopFrame = function (stopFrame) {
        if (stopFrame === void 0) { stopFrame = ""; }
        if (this._skeName == BoneAnimation.traceID)
            LogManager.logFormat("LoadBone playNow {0}", BoneAnimation.traceID);
        this._currentAnimationName = stopFrame;
        if (this._currentAnimationName == "")
            this._currentAnimationName = this.getRandomAnimationName();
        this.armature.animation.gotoAndStopByFrame(this._currentAnimationName);
    };
    BoneAnimation.prototype.gotoAndStopFrameExcept = function (name) {
        if (this._skeName == BoneAnimation.traceID)
            LogManager.logFormat("LoadBone playNow {0}", BoneAnimation.traceID);
        this._currentAnimationName = this.getRandomAnimationNameExcept(name);
        this.armature.animation.gotoAndStopByFrame(this._currentAnimationName);
    };
    Object.defineProperty(BoneAnimation.prototype, "skeName", {
        get: function () {
            return this._skeName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoneAnimation.prototype, "isLoadComplete", {
        get: function () {
            return this._isLoadComplete;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoneAnimation.prototype, "timeScale", {
        get: function () {
            return this._timeScale;
        },
        set: function (value) {
            this._timeScale = value;
            if (this._isLoadComplete)
                this.armature.animation.timeScale = this._timeScale;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoneAnimation.prototype, "currentAnimationName", {
        get: function () {
            return this._currentAnimationName;
        },
        set: function (value) {
            this._currentAnimationName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoneAnimation.prototype, "playTimes", {
        get: function () {
            //这里的pause字段经过特殊定义后，符合某些情况播放次数的定义，0为无限，其他情况为次数
            return this._playTimes;
        },
        set: function (value) {
            this._playTimes = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoneAnimation.prototype, "detectFrameEvent", {
        //是否侦测帧事件
        get: function () {
            return this._detectFrameEvent;
        },
        set: function (value) {
            this._detectFrameEvent = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoneAnimation.prototype, "removeAtLastFrame", {
        get: function () {
            return this._removeAtLastFrame;
        },
        set: function (value) {
            this._removeAtLastFrame = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoneAnimation.prototype, "isPauseAtLastFrame", {
        get: function () {
            return this._isPauseAtLastFrame;
        },
        set: function (value) {
            this._isPauseAtLastFrame = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoneAnimation.prototype, "removeWhenRemoveFromStage", {
        get: function () {
            return this._removeWhenRemoveFromStage;
        },
        set: function (value) {
            this._removeWhenRemoveFromStage = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoneAnimation.prototype, "direction", {
        get: function () {
            return this._direction;
        },
        set: function (value) {
            this._direction = value;
            if (this._isLoadComplete)
                this.armature.display.scaleX = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoneAnimation.prototype, "positionString", {
        get: function () {
            return this._positionString;
        },
        set: function (value) {
            if (value == "")
                return;
            var values = value.split("|");
            if (values.length != 2)
                return;
            this._positionString = value;
            var pos = new egret.Point(Number(values[0]), Number(values[1]));
            this.position = pos;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoneAnimation.prototype, "position", {
        get: function () {
            return this._position;
        },
        set: function (value) {
            this._position = value;
            this.x = this._position.x;
            this.y = this._position.y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoneAnimation.prototype, "startframeIndex", {
        get: function () {
            return this._startframeIndex;
        },
        set: function (value) {
            this._startframeIndex = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoneAnimation.prototype, "param", {
        get: function () {
            return this._param;
        },
        set: function (value) {
            this._param = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoneAnimation.prototype, "param1", {
        get: function () {
            return this._param1;
        },
        set: function (value) {
            this._param1 = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoneAnimation.prototype, "allAnimationNames", {
        get: function () {
            return this.armature.animation.animationNames;
        },
        enumerable: true,
        configurable: true
    });
    BoneAnimation.prototype.hasAnimation = function (name) {
        return this.armature == null ? false : this.armature.animation.hasAnimation(name);
    };
    BoneAnimation.prototype.getFrameCountByName = function (name) {
        var animation = this.armature.animation.animations[name];
        return animation.frameCount;
    };
    BoneAnimation.prototype.getRandomAnimationName = function () {
        if (this.allAnimationNames.length == 1)
            return this.allAnimationNames[0];
        return ObjectUtils.getRandomItem(this.allAnimationNames);
    };
    BoneAnimation.prototype.getRandomAnimationNameExcept = function (name) {
        if (this.allAnimationNames.length == 1)
            return this.allAnimationNames[0];
        var names = this.allAnimationNames.slice(1);
        return ObjectUtils.getRandomItem(names);
    };
    BoneAnimation.prototype.dispose = function () {
        if (this._skeName == BoneAnimation.traceID)
            LogManager.logFormat("LoadBone dispose {0}", BoneAnimation.traceID);
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onBoneRemove, this);
        if (this.armature) {
            this.armature.eventDispatcher.removeDBEventListener(dragonBones.EventObject.LOOP_COMPLETE, this.playComplete, this);
            this.armature.eventDispatcher.removeDBEventListener(dragonBones.EventObject.FRAME_EVENT, this.onFrameEventFired, this);
            dragonBones.WorldClock.clock.remove(this.armature);
            this.armature.dispose();
            this.armature = null;
        }
        this._skeName = null;
        this._complete = null;
        this._completeTarget = null;
        this._position = null;
        this._currentAnimationName = null;
        this._isPauseAtLastFrame = null;
        this._removeAtLastFrame = null;
    };
    BoneAnimation.LOAD_COMPLETE = "boneLoadComplete";
    BoneAnimation.LOOP_COMPLETE = "boneLoopComplete";
    BoneAnimation.FRAME_EVENT = "frameEvent";
    BoneAnimation.traceID = "tx_01";
    return BoneAnimation;
}(egret.Sprite));
__reflect(BoneAnimation.prototype, "BoneAnimation");
//# sourceMappingURL=BoneAnimation.js.map