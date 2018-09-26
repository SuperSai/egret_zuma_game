var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by yangsong on 15-1-14.
 * Sound基类
 */
var BaseSound = (function () {
    /**
     * 构造函数
     */
    function BaseSound() {
        this._cache = {};
        this._loadingCache = new Array();
        App.TimerManager.doTimer(1 * 60 * 1000, 0, this.dealSoundTimer, this);
    }
    /**
     * 处理音乐文件的清理
     */
    BaseSound.prototype.dealSoundTimer = function () {
        var currTime = egret.getTimer();
        var keys = Object.keys(this._cache);
        for (var i = 0, len = keys.length; i < len; i++) {
            var key = keys[i];
            if (!this.checkCanClear(key))
                continue;
            if (currTime - this._cache[key] >= SoundManager.CLEAR_TIME) {
                delete this._cache[key];
                RES.destroyRes(key);
            }
        }
    };
    /**
     * 获取Sound
     * @param key
     * @returns {egret.Sound}
     */
    BaseSound.prototype.getSound = function (key) {
        var vo = GlobleData.getData(GlobleData.SoundVO, Number(key));
        if (vo == null)
            return null;
        var sound = RES.getRes(PathConfig.SoundPath + vo.file);
        if (sound) {
            if (this._cache[key]) {
                this._cache[key] = egret.getTimer();
            }
        }
        else {
            if (this._loadingCache.indexOf(key) != -1) {
                return null;
            }
            this._loadingCache.push(key);
            RES.getResAsync(key, this.onResourceLoadComplete, this);
        }
        return sound;
    };
    /**
     * 资源加载完成
     * @param event
     */
    BaseSound.prototype.onResourceLoadComplete = function (data, key) {
        var index = this._loadingCache.indexOf(key);
        if (index != -1) {
            this._loadingCache.splice(index, 1);
            this._cache[key] = egret.getTimer();
            this.loadedPlay(key);
        }
    };
    /**
     * 资源加载完成后处理播放，子类重写
     * @param key
     */
    BaseSound.prototype.loadedPlay = function (key) {
    };
    /**
     * 检测一个文件是否要清除，子类重写
     * @param key
     * @returns {boolean}
     */
    BaseSound.prototype.checkCanClear = function (key) {
        return true;
    };
    return BaseSound;
}());
__reflect(BaseSound.prototype, "BaseSound");
//# sourceMappingURL=BaseSound.js.map