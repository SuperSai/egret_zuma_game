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
 * Created by yangsong on 15-1-14.
 * 背景音乐类
 */
var SoundBG = (function (_super) {
    __extends(SoundBG, _super);
    /**
     * 构造函数
     */
    function SoundBG() {
        var _this = _super.call(this) || this;
        _this._currBg = "";
        return _this;
    }
    /**
     * 停止当前音乐
     */
    SoundBG.prototype.stop = function () {
        if (this._currSoundChannel) {
            this._currSoundChannel.stop();
        }
        this._currSoundChannel = null;
        this._currSound = null;
        this._currBg = "";
    };
    /**
     * 播放某个音乐
     * @param effectName
     */
    SoundBG.prototype.play = function (effectName) {
        if (this._currBg == effectName)
            return;
        this.stop();
        this._currBg = effectName;
        var sound = this.getSound(effectName);
        if (sound) {
            this.playSound(sound);
        }
    };
    /**
     * 播放
     * @param sound
     */
    SoundBG.prototype.playSound = function (sound) {
        this._currSound = sound;
        this._currSoundChannel = this._currSound.play();
        this._currSoundChannel.volume = this._volume;
    };
    /**
     * 设置音量
     * @param volume
     */
    SoundBG.prototype.setVolume = function (volume) {
        this._volume = volume;
        if (this._currSoundChannel) {
            this._currSoundChannel.volume = this._volume;
        }
    };
    /**
     * 资源加载完成后处理播放
     * @param key
     */
    SoundBG.prototype.loadedPlay = function (key) {
        if (this._currBg == key) {
            this.playSound(RES.getRes(key));
        }
    };
    /**
     * 检测一个文件是否要清除
     * @param key
     * @returns {boolean}
     */
    SoundBG.prototype.checkCanClear = function (key) {
        return this._currBg != key;
    };
    return SoundBG;
}(BaseSound));
__reflect(SoundBG.prototype, "SoundBG");
//# sourceMappingURL=SoundBG.js.map