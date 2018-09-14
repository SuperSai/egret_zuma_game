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
 * StarlingSwf工厂类
 */
var StarlingSwfFactory = (function (_super) {
    __extends(StarlingSwfFactory, _super);
    /**
     * 构造函数
     */
    function StarlingSwfFactory() {
        var _this = _super.call(this) || this;
        _this.swfAssetsManager = new starlingswf.SwfAssetManager();
        _this.swfAssetsNames = new Array();
        _this.swfAssets = new Array();
        _this.swfData = {};
        return _this;
    }
    /**
     * 添加一个swf
     * @param name 唯一标识
     * @param swfData swf配置数据
     * @param spriteSheep 资源配置数据
     */
    StarlingSwfFactory.prototype.addSwf = function (name, swfData, spriteSheep) {
        if (this.swfAssetsNames.indexOf(name) != -1)
            return;
        if (swfData == null || spriteSheep == null) {
            console.log("SWF加载失败:" + name);
            return;
        }
        this.swfAssetsManager.addSpriteSheet(name, spriteSheep);
        var swf = new starlingswf.Swf(swfData, this.swfAssetsManager, 24);
        swf.name = name;
        StarlingSwfUtils.addSwf(swf);
        this.swfAssetsNames.push(name);
        this.swfAssets.push(swf);
    };
    /**
     * 停止列表中的swf
     * @param arr
     */
    StarlingSwfFactory.prototype.stopSwfs = function (arr) {
        for (var i = 0, len = arr.length; i < len; i++) {
            var swf = StarlingSwfUtils.getSwf(arr[i]);
            if (swf) {
                swf.swfUpdateManager.stop();
            }
        }
    };
    /**
     * 播放列表中的swf
     * @param arr
     */
    StarlingSwfFactory.prototype.playSwfs = function (arr) {
        for (var i = 0, len = arr.length; i < len; i++) {
            var swf = StarlingSwfUtils.getSwf(arr[i]);
            if (swf) {
                swf.swfUpdateManager.play();
            }
        }
    };
    /**
     * 清空所有swf
     */
    StarlingSwfFactory.prototype.clearSwfs = function () {
        while (this.swfAssets.length) {
            StarlingSwfUtils.removeSwf(this.swfAssets.pop());
        }
        while (this.swfAssetsNames.length) {
            this.swfAssetsNames.pop();
        }
        this.swfAssetsManager = new starlingswf.SwfAssetManager();
    };
    /**
     * 清空
     */
    StarlingSwfFactory.prototype.clear = function () {
        this.clearSwfs();
    };
    /**
     * 创建一个StarlingSwfMovieClip
     * @param name mc的名字
     * @returns {StarlingSwfMovieClip}
     */
    StarlingSwfFactory.prototype.makeMc = function (name) {
        var mc = StarlingSwfUtils.createMovie("mc_" + name, null, StarlingSwfMovieClip);
        if (mc == null) {
            console.log("SWF创建失败: " + name);
        }
        return mc;
    };
    /**
     * 创建一个Bitmap
     * @param name 图片的名称
     * @returns {egret.Bitmap}
     */
    StarlingSwfFactory.prototype.makeImage = function (name) {
        return StarlingSwfUtils.createImage("img_" + name);
    };
    /**
     * 获取材质
     * @param name 材质名称
     * @returns {egret.Texture}
     */
    StarlingSwfFactory.prototype.getTexture = function (name) {
        return StarlingSwfUtils.getTexture("img_" + name);
    };
    return StarlingSwfFactory;
}(BaseClass));
__reflect(StarlingSwfFactory.prototype, "StarlingSwfFactory");
//# sourceMappingURL=StarlingSwfFactory.js.map