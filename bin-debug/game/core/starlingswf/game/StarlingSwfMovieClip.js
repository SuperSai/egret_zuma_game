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
 * Created by yangsong on 2014/6/16.
 * 自定义SwfMovieClip类，带有帧处理函数
 */
var StarlingSwfMovieClip = (function (_super) {
    __extends(StarlingSwfMovieClip, _super);
    /**
     * 构造函数
     * @param frames
     * @param labels
     * @param displayObjects
     * @param ownerSwf
     */
    function StarlingSwfMovieClip(frames, labels, displayObjects, ownerSwf) {
        var _this = _super.call(this, frames, labels, displayObjects, ownerSwf) || this;
        _this.frameActions = {};
        _this.preFrame = -1;
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.onRemove, _this);
        return _this;
    }
    /**
     * 移除舞台处理函数
     */
    StarlingSwfMovieClip.prototype.onRemove = function () {
        this.stop();
    };
    /**
     * 设置帧事件
     * @param $frame 第几帧
     * @param $action 执行函数
     * @param $actionObj 执行函数所属对象
     * @param $param 执行函数所需参数
     */
    StarlingSwfMovieClip.prototype.setFrameAction = function ($frame, $action, $actionObj, $param) {
        if ($param === void 0) { $param = null; }
        this.frameActions[$frame] = [$action, $actionObj, $param];
    };
    /**
     * 设置mc播放完成执行的函数
     * @param $action 执行函数
     * @param $actionObj 执行函数所属对象
     */
    StarlingSwfMovieClip.prototype.setCompleteAction = function ($action, $actionObj) {
        this.complateFunc = $action;
        this.complateObj = $actionObj;
        this.addEventListener(egret.Event.COMPLETE, this.onPlayend, this);
    };
    /**
     * 播放结束执行函数
     */
    StarlingSwfMovieClip.prototype.onPlayend = function () {
        if (this.complateFunc) {
            this.complateFunc.call(this.complateObj);
        }
    };
    /**
     * 播放
     * @param frame
     */
    StarlingSwfMovieClip.prototype.goToPlay = function (frame) {
        this.preFrame = -1;
        this.currFrameName = frame;
        this.gotoAndPlay(frame);
    };
    /**
     * 重写setCurrentFrame函数，处理帧事件
     */
    StarlingSwfMovieClip.prototype.setCurrentFrame = function (frame) {
        _super.prototype.setCurrentFrame.call(this, frame);
        var currFrame = this.getCurrentFrame();
        if (this.preFrame != currFrame) {
            this.preFrame = currFrame;
            if (this.frameActions && this.frameActions[currFrame]) {
                var arr = this.frameActions[currFrame];
                if (arr[2])
                    arr[0].call(arr[1], arr[2]);
                else
                    arr[0].call(arr[1]);
            }
        }
    };
    /**
     * 销毁
     */
    StarlingSwfMovieClip.prototype.dispose = function () {
        this.stop();
        this.removeEventListener(egret.Event.COMPLETE, this.onPlayend, this);
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemove, this);
        App.DisplayUtils.removeFromParent(this);
        this.complateFunc = null;
        this.complateObj = null;
        this.frameActions = null;
    };
    return StarlingSwfMovieClip;
}(starlingswf.SwfMovieClip));
__reflect(StarlingSwfMovieClip.prototype, "StarlingSwfMovieClip");
//# sourceMappingURL=StarlingSwfMovieClip.js.map