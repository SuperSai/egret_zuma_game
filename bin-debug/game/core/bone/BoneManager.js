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
var BoneManager = (function (_super) {
    __extends(BoneManager, _super);
    function BoneManager() {
        var _this = _super.call(this) || this;
        _this._factory = dragonBones.EgretFactory.factory;
        return _this;
    }
    BoneManager.prototype.test_showBone = function (resId) {
        var testBone = ResourcePool.Intance.pop(resId, ResourcePool.SKE);
        testBone.playTimes = 0;
        testBone.removeAtLastFrame = false;
        testBone.play();
    };
    BoneManager.prototype.start = function () {
        App.StageUtils.getStage().addEventListener(egret.Event.ENTER_FRAME, this.onUpdate, this);
    };
    BoneManager.prototype.stop = function () {
        App.StageUtils.getStage().removeEventListener(egret.Event.ENTER_FRAME, this.onUpdate, this);
    };
    BoneManager.prototype.onUpdate = function (event) {
        dragonBones.WorldClock.clock.advanceTime(-1);
    };
    BoneManager.prototype.getArmature = function (path) {
        if (this._factory.getDragonBonesData(path) == null) {
            var ske = this.getSkeData(path);
            var textureData = this.getTextureData(path);
            var texture = this.getTexture(path);
            this._factory.parseDragonBonesData(ske);
            this._factory.parseTextureAtlasData(textureData, texture);
        }
        var armature = this._factory.buildArmature(path);
        return armature;
    };
    BoneManager.prototype.getSkeData = function (path) {
        return RES.getRes(path + BoneConfig.SKE_END_TAG);
    };
    BoneManager.prototype.getTextureData = function (path) {
        return RES.getRes(path + BoneConfig.TEXTUREDATA_END_TAG);
    };
    BoneManager.prototype.getTexture = function (path) {
        return RES.getRes(path + BoneConfig.TEXTURE_END_TAG);
    };
    return BoneManager;
}(BaseClass));
__reflect(BoneManager.prototype, "BoneManager");
//# sourceMappingURL=BoneManager.js.map