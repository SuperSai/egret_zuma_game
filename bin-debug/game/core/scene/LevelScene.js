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
var LevelScene = (function (_super) {
    __extends(LevelScene, _super);
    function LevelScene() {
        return _super.call(this) || this;
    }
    /**
    * 进入Scene调用
    */
    LevelScene.prototype.onEnter = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        _super.prototype.onEnter.call(this);
        //参数
        var mapId = param[0];
        App.ControllerManager.applyFunc(ControllerConst.Level, LevelConst.LEVEL_INIT, mapId);
        //播放背景音乐
        // App.SoundManager.playBg("sound_bg");
    };
    /**
     * 退出Scene调用
     */
    LevelScene.prototype.onExit = function () {
        _super.prototype.onExit.call(this);
    };
    return LevelScene;
}(BaseScene));
__reflect(LevelScene.prototype, "LevelScene");
//# sourceMappingURL=LevelScene.js.map