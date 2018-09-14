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
 * 大厅场景层
 */
var HallScene = (function (_super) {
    __extends(HallScene, _super);
    function HallScene() {
        return _super.call(this) || this;
    }
    /**
    * 进入Scene调用
    */
    HallScene.prototype.onEnter = function () {
        _super.prototype.onEnter.call(this);
        //初始打开大厅页面
        App.ViewManager.open(ViewConst.Hall);
        //播放背景音乐
        // App.SoundManager.playBg("sound_bg");
    };
    /**
     * 退出Scene调用
     */
    HallScene.prototype.onExit = function () {
        _super.prototype.onExit.call(this);
    };
    return HallScene;
}(BaseScene));
__reflect(HallScene.prototype, "HallScene");
//# sourceMappingURL=HallScene.js.map