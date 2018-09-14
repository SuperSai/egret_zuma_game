var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by lcj on 14-6-18.
 * StarlingSwf工具类
 */
var StarlingSwfUtils = (function () {
    function StarlingSwfUtils() {
    }
    /**
     * 函数游戏内用到的swf
     * @param swf
     */
    StarlingSwfUtils.addSwf = function (swf) {
        StarlingSwfUtils.swfList.push(swf);
    };
    /**
     * 在缓存中移除一个swf
     * @param swf
     */
    StarlingSwfUtils.removeSwf = function (swf) {
        var index = StarlingSwfUtils.swfList.indexOf(swf);
        if (index != -1)
            StarlingSwfUtils.swfList.splice(index, 1);
    };
    /**
     * 创建Sprite
     * @param name Sprite名称
     * @param data
     * @param sprData
     * @returns {*}
     */
    StarlingSwfUtils.createSprite = function (name, data, sprData) {
        if (data === void 0) { data = null; }
        if (sprData === void 0) { sprData = null; }
        var l = StarlingSwfUtils.swfList.length;
        for (var i = 0; i < l; i++) {
            var swf = StarlingSwfUtils.swfList[i];
            if (swf.hasSprite(name)) {
                return swf.createSprite(name, data, sprData);
            }
        }
        return null;
    };
    /**
     * 创建Bitmap
     * @param name Bitmap名称
     * @param data
     * @returns {*}
     */
    StarlingSwfUtils.createImage = function (name, data) {
        if (data === void 0) { data = null; }
        var l = StarlingSwfUtils.swfList.length;
        for (var i = 0; i < l; i++) {
            var swf = StarlingSwfUtils.swfList[i];
            if (swf.hasImage(name)) {
                return swf.createImage(name, data);
            }
        }
        return null;
    };
    /**
     * 获取材质
     * @param name 材质名称
     * @returns {*}
     */
    StarlingSwfUtils.getTexture = function (name) {
        var l = StarlingSwfUtils.swfList.length;
        for (var i = 0; i < l; i++) {
            var swf = StarlingSwfUtils.swfList[i];
            if (swf.hasImage(name)) {
                return swf.getTexture(name);
            }
        }
        return null;
    };
    /**
     * 创建一个SwfMovieClip
     * @param name SwfMovieClip名称
     * @param data
     * @param cls
     * @returns {*}
     */
    StarlingSwfUtils.createMovie = function (name, data, cls) {
        if (data === void 0) { data = null; }
        if (cls === void 0) { cls = null; }
        var l = StarlingSwfUtils.swfList.length;
        for (var i = 0; i < l; i++) {
            var swf = StarlingSwfUtils.swfList[i];
            if (swf.hasMovieClip(name)) {
                return swf.createMovie(name, data, cls);
            }
        }
        return null;
    };
    /**
     * 创建一个九宫格图片
     * @param name 图片名称
     * @param data
     * @returns {*}
     */
    StarlingSwfUtils.createS9Image = function (name, data) {
        if (data === void 0) { data = null; }
        var l = StarlingSwfUtils.swfList.length;
        for (var i = 0; i < l; i++) {
            var swf = StarlingSwfUtils.swfList[i];
            if (swf.hasS9Image(name)) {
                return swf.createS9Image(name, data);
            }
        }
        return null;
    };
    /**
     * 创建ShapeImage
     * @param name ShapeImage名称
     * @param data
     * @returns {*}
     */
    StarlingSwfUtils.createShapeImage = function (name, data) {
        if (data === void 0) { data = null; }
        var l = StarlingSwfUtils.swfList.length;
        for (var i = 0; i < l; i++) {
            var swf = StarlingSwfUtils.swfList[i];
            if (swf.hasShapeImage(name)) {
                return swf.createShapeImage(name, data);
            }
        }
        return null;
    };
    /**
     * 获取缓存中一个Swf
     * @param name 名称
     * @returns {*}
     */
    StarlingSwfUtils.getSwf = function (name) {
        var l = StarlingSwfUtils.swfList.length;
        for (var i = 0; i < l; i++) {
            var swf = StarlingSwfUtils.swfList[i];
            if (swf.name == name) {
                return swf;
            }
        }
        return null;
    };
    /**
     * 根据一个两帧mc自定义Button
     * @param btn
     * @param onClick
     * @param thisObj
     */
    StarlingSwfUtils.fixButton = function (btn, onClick, thisObj) {
        if (StarlingSwfUtils.firstAddBtn) {
            StarlingSwfUtils.firstAddBtn = false;
            egret.MainContext.instance.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
            egret.MainContext.instance.stage.addEventListener(egret.Event.LEAVE_STAGE, this.onTouchEnd, this);
        }
        var data = new StarlingSwfButtonData();
        data.btn = btn;
        data.onClick = onClick;
        data.thisObj = thisObj;
        StarlingSwfUtils.btnList.push(data);
        btn.touchEnabled = true;
        btn.gotoAndStop(0);
        btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBtnTouchBegin, btn);
    };
    StarlingSwfUtils.onBtnTouchBegin = function (event) {
        var btn = event.currentTarget;
        var l = StarlingSwfUtils.btnList.length;
        for (var i = 0; i < l; i++) {
            var data = StarlingSwfUtils.btnList[i];
            if (data.btn == btn) {
                data.touchStageX = event.stageX;
                data.touchStageY = event.stageY;
                btn.gotoAndStop(1);
                break;
            }
        }
    };
    StarlingSwfUtils.onTouchEnd = function (event) {
        var l = StarlingSwfUtils.btnList.length;
        for (var i = 0; i < l; i++) {
            var data = StarlingSwfUtils.btnList[i];
            if (data.touchStageX != -1) {
                if (event.stageX && Math.abs(data.touchStageX - event.stageX) < 10 && Math.abs(data.touchStageY - event.stageY) < 10) {
                    if (data.onClick) {
                        data.onClick.call(data.thisObj, event);
                    }
                }
                data.touchStageX = -1;
                data.touchStageY = -1;
                data.btn.gotoAndStop(0);
            }
        }
    };
    StarlingSwfUtils.swfList = [];
    StarlingSwfUtils.btnList = [];
    StarlingSwfUtils.firstAddBtn = true;
    return StarlingSwfUtils;
}());
__reflect(StarlingSwfUtils.prototype, "StarlingSwfUtils");
var StarlingSwfButtonData = (function () {
    function StarlingSwfButtonData() {
        this.touchStageX = -1;
        this.touchStageY = -1;
    }
    return StarlingSwfButtonData;
}());
__reflect(StarlingSwfButtonData.prototype, "StarlingSwfButtonData");
//# sourceMappingURL=StarlingSwfUtils.js.map