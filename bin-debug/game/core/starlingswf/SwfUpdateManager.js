var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by zmliu on 14-5-11.
 */
var starlingswf;
(function (starlingswf) {
    /** 动画更新管理器 */
    var SwfUpdateManager = (function () {
        function SwfUpdateManager() {
        }
        SwfUpdateManager.createSwfUpdateManager = function (fps) {
            var updateManager = new SwfUpdateManager();
            updateManager._animations = [];
            updateManager._addQueue = [];
            updateManager._removeQueue = [];
            updateManager._currentTime = 0;
            updateManager.setFps(fps);
            App.TimerManager.doFrame(1, 0, updateManager.update, updateManager);
            return updateManager;
        };
        SwfUpdateManager.prototype.clear = function () {
            this._addQueue.splice(0);
            this._removeQueue.splice(0);
            this._animations.splice(0);
        };
        SwfUpdateManager.prototype.stop = function () {
            this.clear();
            App.TimerManager.remove(this.update, this);
        };
        SwfUpdateManager.prototype.play = function () {
            App.TimerManager.doFrame(1, 0, this.update, this);
        };
        SwfUpdateManager.prototype.setFps = function (fps) {
            this._fps = fps;
            this._fpsTime = 1000 / fps;
        };
        SwfUpdateManager.prototype.addSwfAnimation = function (animation) {
            this._addQueue.push(animation);
        };
        SwfUpdateManager.prototype.removeSwfAnimation = function (animation) {
            this._removeQueue.push(animation);
            var addIndex = this._addQueue.indexOf(animation);
            if (addIndex != -1) {
                this._addQueue.splice(addIndex, 1);
            }
        };
        SwfUpdateManager.prototype.updateAdd = function () {
            var len = this._addQueue.length;
            var index;
            var animation;
            for (var i = 0; i < len; i++) {
                animation = this._addQueue.pop();
                index = this._animations.indexOf(animation);
                if (index == -1) {
                    this._animations.push(animation);
                }
            }
        };
        SwfUpdateManager.prototype.updateRemove = function () {
            var len = this._removeQueue.length;
            var index;
            var animation;
            for (var i = 0; i < len; i++) {
                animation = this._removeQueue.pop();
                index = this._animations.indexOf(animation);
                if (index != -1) {
                    this._animations.splice(index, 1);
                }
            }
        };
        SwfUpdateManager.prototype.update = function (time) {
            this._currentTime += time;
            if (this._currentTime < this._fpsTime) {
                return;
            }
            this._currentTime -= this._fpsTime;
            this._update();
            var jumpFlag = 0;
            while (this._currentTime > this._fpsTime) {
                this._currentTime -= this._fpsTime;
                jumpFlag++;
                if (jumpFlag < 4) {
                    this._update();
                }
            }
        };
        SwfUpdateManager.prototype._update = function () {
            this.updateRemove();
            this.updateAdd();
            var len = this._animations.length;
            for (var i = 0; i < len; i++) {
                this._animations[i].update();
            }
        };
        return SwfUpdateManager;
    }());
    starlingswf.SwfUpdateManager = SwfUpdateManager;
    __reflect(SwfUpdateManager.prototype, "starlingswf.SwfUpdateManager");
})(starlingswf || (starlingswf = {}));
//# sourceMappingURL=SwfUpdateManager.js.map