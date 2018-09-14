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
var MapTest = (function (_super) {
    __extends(MapTest, _super);
    function MapTest() {
        var _this = _super.call(this) || this;
        //线段的宽度 一般为球的半径
        _this.lineMinWidth = 21.5;
        _this.isFirst = false;
        var self = _this;
        self.width = 720;
        self.height = 1280;
        self.btn = new eui.Image("btn_big_02");
        self.btn.width = 100;
        self.btn.height = 80;
        self.addChild(self.btn);
        _this.mapEditor = new MapEditor(_this.lineMinWidth * 2);
        self.mapEditor.init();
        self.btn.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onBtn, self);
        App.StageUtils.getStage().addEventListener(egret.TouchEvent.TOUCH_TAP, self.onTapHandler, self);
        return _this;
        // App.StageUtils.getStage().addEventListener(egret.TouchEvent.TOUCH_BEGIN, self.onBeginHandler, self);
        // App.StageUtils.getStage().addEventListener(egret.TouchEvent.TOUCH_END, self.onEndHandler, self);
    }
    MapTest.prototype.onBtn = function () {
        var self = this;
        App.StageUtils.getStage().removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onTapHandler, self);
        var arr;
        var length = this.mapEditor.mapList.length;
        Log.trace(this.mapEditor.mapToString());
        for (var i = 0; i < length; i += 1) {
            arr = this.mapEditor.mapList[i];
            this.drawCircle(arr[0], arr[1]);
        }
    };
    MapTest.prototype.onTapHandler = function (event) {
        var self = this;
        if (!self.isFirst) {
            self.isFirst = true;
            self.graphics.lineStyle(2, 0xFF0000);
            self.graphics.moveTo(event.stageX, event.stageY);
        }
        else {
            this.graphics.lineTo(event.stageX, event.stageY);
            this.mapEditor.createMapByPos(event.stageX, event.stageY);
        }
    };
    MapTest.prototype.onBeginHandler = function (event) {
        var self = this;
        // self.graphics.clear();
        self.graphics.lineStyle(2, 0xFF0000);
        self.graphics.moveTo(event.stageX, event.stageY);
        // if (App.StageUtils.getStage().hasEventListener(egret.TouchEvent.TOUCH_MOVE))
        // 	App.StageUtils.getStage().removeEventListener(egret.TouchEvent.TOUCH_MOVE, self.loop, self);
        // App.StageUtils.getStage().addEventListener(egret.TouchEvent.TOUCH_MOVE, self.loop, self);
    };
    MapTest.prototype.onEndHandler = function (event) {
        App.StageUtils.getStage().removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.loop, this);
        var arr;
        var length = this.mapEditor.mapList.length;
        Log.trace(this.mapEditor.mapToString());
        // for (var i: number = 0; i < length; i += 1) {
        // 	arr = this.mapEditor.mapList[i];
        // 	this.drawCircle(arr[0], arr[1]);
        // }
    };
    MapTest.prototype.loop = function (event) {
        this.graphics.lineTo(event.stageX, event.stageY);
        this.mapEditor.createMapByPos(event.stageX, event.stageY);
    };
    /**
     * 绘制圆圈
     */
    MapTest.prototype.drawCircle = function (x, y) {
        this.graphics.lineStyle(1, 0xFF0000);
        this.graphics.beginFill(0xFFF000, .5);
        this.graphics.drawCircle(x, y, this.lineMinWidth);
        this.graphics.endFill();
    };
    return MapTest;
}(egret.Sprite));
__reflect(MapTest.prototype, "MapTest");
//# sourceMappingURL=MapTest.js.map