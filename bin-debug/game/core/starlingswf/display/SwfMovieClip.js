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
 * Created by zmliu on 14-5-11.
 */
var starlingswf;
(function (starlingswf) {
    var SwfMovieClip = (function (_super) {
        __extends(SwfMovieClip, _super);
        function SwfMovieClip(frames, labels, displayObjects, ownerSwf) {
            var _this = _super.call(this) || this;
            _this._isPlay = false;
            _this.loop = true;
            _this._completeFunction = null; //播放完毕的回调
            _this._frames = frames;
            _this._labels = labels;
            _this._displayObjects = displayObjects;
            _this._startFrame = 0;
            _this._endFrame = _this._frames.length - 1;
            _this._ownerSwf = ownerSwf;
            _this.setCurrentFrame(0);
            _this.play();
            return _this;
        }
        SwfMovieClip.prototype.update = function () {
            if (!this._isPlay)
                return;
            if (this._currentFrame > this._endFrame) {
                if (this.hasCompleteListener()) {
                    this.dispatchEventWith(egret.Event.COMPLETE);
                }
                this._currentFrame = this._startFrame;
                if (!this.loop) {
                    if (this._ownerSwf)
                        this.stop(false);
                    return;
                }
                if (this._startFrame == this._endFrame) {
                    if (this._ownerSwf)
                        this.stop(false);
                    return;
                }
                this.setCurrentFrame(this._startFrame);
            }
            else {
                this.setCurrentFrame(this._currentFrame);
                this._currentFrame += 1;
            }
        };
        SwfMovieClip.prototype.setCurrentFrame = function (frame) {
            //dirty hack this.removeChildren();
            this.$children.length = 0;
            this._currentFrame = frame;
            this.__frameInfos = this._frames[this._currentFrame];
            var data;
            var display;
            var textfield;
            var useIndex;
            var length = this.__frameInfos.length;
            for (var i = 0; i < length; i++) {
                data = this.__frameInfos[i];
                useIndex = data[10];
                display = this._displayObjects[data[0]][useIndex];
                display.skewX = data[6];
                display.skewY = data[7];
                display.alpha = data[8];
                display.name = data[9];
                //                if(data[1] == Swf.dataKey_Particle){
                //                    display["setPostion"](data[2],data[3]);
                //                }else{
                display.x = data[2];
                display.y = data[3];
                //                }
                if (data[1] == starlingswf.Swf.dataKey_Scale9) {
                    display.width = data[11];
                    display.height = data[12];
                }
                else {
                    display.scaleX = data[4];
                    display.scaleY = data[5];
                }
                //dirty hack  this.addChild(display);
                this.$children.push(display);
                display.$parent = this;
                if (data[1] == starlingswf.Swf.dataKey_TextField) {
                    textfield = display;
                    textfield.width = data[11];
                    textfield.height = data[12];
                    //textfield.fontFamily = data[13];
                    textfield.textColor = data[14];
                    textfield.size = data[15];
                    textfield.textAlign = data[16];
                    //                    textfield["italic"] = data[17];
                    //                    textfield["bold"] = data[18];
                    if (data[19] && data[19] != "\r" && data[19] != "") {
                        textfield.text = data[19];
                    }
                }
            }
        };
        SwfMovieClip.prototype.getCurrentFrame = function () {
            return this._currentFrame;
        };
        /**
         * 播放
         * */
        SwfMovieClip.prototype.play = function () {
            this._isPlay = true;
            this._ownerSwf.swfUpdateManager.addSwfAnimation(this);
            var k;
            var arr;
            var l;
            for (k in this._displayObjects) {
                if (k.indexOf(starlingswf.Swf.dataKey_MovieClip) == 0) {
                    arr = this._displayObjects[k];
                    l = arr.length;
                    for (var i = 0; i < l; i++) {
                        arr[i].play();
                    }
                }
            }
        };
        /**
         * 停止
         * @param    stopChild    是否停止子动画
         * */
        SwfMovieClip.prototype.stop = function (stopChild) {
            if (stopChild === void 0) { stopChild = true; }
            this._isPlay = false;
            this._ownerSwf.swfUpdateManager.removeSwfAnimation(this);
            if (!stopChild)
                return;
            var k;
            var arr;
            var l;
            for (k in this._displayObjects) {
                if (k.indexOf(starlingswf.Swf.dataKey_MovieClip) == 0) {
                    arr = this._displayObjects[k];
                    l = arr.length;
                    for (var i = 0; i < l; i++) {
                        arr[i].stop(stopChild);
                    }
                }
            }
        };
        SwfMovieClip.prototype.gotoAndStop = function (frame, stopChild) {
            if (stopChild === void 0) { stopChild = true; }
            this.goTo(frame);
            this.stop(stopChild);
        };
        SwfMovieClip.prototype.gotoAndPlay = function (frame) {
            this.goTo(frame);
            this.play();
        };
        SwfMovieClip.prototype.goTo = function (frame) {
            if (typeof (frame) == "string") {
                var labelData = this.getLabelData(frame);
                this._currentLabel = labelData[0];
                this._currentFrame = this._startFrame = labelData[1];
                this._endFrame = labelData[2];
            }
            else if (typeof (frame) == "number") {
                this._currentFrame = this._startFrame = frame;
                this._endFrame = this._frames.length - 1;
            }
            this.setCurrentFrame(this._currentFrame);
        };
        SwfMovieClip.prototype.getLabelData = function (label) {
            var length = this._labels.length;
            var labelData;
            for (var i = 0; i < length; i++) {
                labelData = this._labels[i];
                if (labelData[0] == label) {
                    return labelData;
                }
            }
            return null;
        };
        /**
         * 是否再播放
         * */
        SwfMovieClip.prototype.isPlay = function () {
            return this._isPlay;
        };
        /**
         * 总共有多少帧
         * */
        SwfMovieClip.prototype.totalFrames = function () {
            return this._frames.length;
        };
        /**
         * 返回当前播放的是哪一个标签
         * */
        SwfMovieClip.prototype.currentLabel = function () {
            return this._currentLabel;
        };
        /**
         * 获取所有标签
         * */
        SwfMovieClip.prototype.labels = function () {
            var length = this._labels.length;
            var returnLabels = [];
            for (var i = 0; i < length; i++) {
                returnLabels.push(this._labels[i][0]);
            }
            return returnLabels;
        };
        SwfMovieClip.prototype.hasCompleteListener = function () {
            return this.hasEventListener(egret.Event.COMPLETE);
        };
        /**
         * 是否包含某个标签
         * */
        SwfMovieClip.prototype.hasLabel = function (label) {
            var ls = this.labels();
            return !(ls.indexOf(label) == -1);
        };
        /*****************************************以下为扩展代码*****************************************/
        /**
         * 获取某一标签的开始帧
         * @param label 标签名
         * @returns {any}
         */
        SwfMovieClip.prototype.getLabelStartFrame = function (label) {
            return this.getLabelData(label)[1];
        };
        /**
         * 获取某一标签的结束帧
         * @param label
         * @returns {any}
         */
        SwfMovieClip.prototype.getLabelEndFrame = function (label) {
            return this.getLabelData(label)[2];
        };
        return SwfMovieClip;
    }(starlingswf.SwfSprite));
    starlingswf.SwfMovieClip = SwfMovieClip;
    __reflect(SwfMovieClip.prototype, "starlingswf.SwfMovieClip", ["starlingswf.ISwfAnimation"]);
})(starlingswf || (starlingswf = {}));
//# sourceMappingURL=SwfMovieClip.js.map