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
var LayerManager = (function (_super) {
    __extends(LayerManager, _super);
    function LayerManager() {
        var _this = _super.call(this) || this;
        _this._layers = [];
        _this._sceneContainer = new eui.UILayer();
        _this._gameContainer = new eui.UILayer();
        return _this;
    }
    Object.defineProperty(LayerManager.prototype, "sceneContainer", {
        get: function () {
            var self = this;
            return self._sceneContainer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayerManager.prototype, "gameContainer", {
        get: function () {
            var self = this;
            return self._gameContainer;
        },
        enumerable: true,
        configurable: true
    });
    LayerManager.prototype.setup = function (stage) {
        var self = this;
        this.createAllLayers();
        self._sceneContainer.touchThrough = true;
        self._gameContainer.touchThrough = true;
        stage.addChild(self._sceneContainer);
        stage.addChild(self.getLayerByType(LayerManager.POP_LAYER));
        stage.addChild(self.getLayerByType(LayerManager.TIP_LAYER));
        self._sceneContainer.addChild(self._gameContainer);
        self._sceneContainer.addChild(self.getLayerByType(LayerManager.SCENE_BASE_LAYER));
        self._sceneContainer.addChild(self.getLayerByType(LayerManager.SCENE_UI_LAYER));
        self._sceneContainer.addChild(self.getLayerByType(LayerManager.SCENE_UI_EFFECT_LAYER));
        self._sceneContainer.addChild(self.getLayerByType(LayerManager.SCENE_POP_LAYER));
        self._gameContainer.addChild(self.getLayerByType(LayerManager.GAME_MAP_LAYER));
        self._gameContainer.addChild(self.getLayerByType(LayerManager.GAME_EFFECT_LAYER));
        self._gameContainer.addChild(self.getLayerByType(LayerManager.GAME_MASCOT_LAYER));
        self._gameContainer.addChild(self.getLayerByType(LayerManager.GAME_UI_LAYER));
        self._gameContainer.addChild(self.getLayerByType(LayerManager.GAME_POP_LAYER));
        stage.addEventListener(egret.Event.RESIZE, self.onStageResize, self);
    };
    LayerManager.prototype.onStageResize = function (event) {
        this.resize();
    };
    LayerManager.prototype.createAllLayers = function () {
        for (var i = 0; i < LayerManager.layerCount; i++) {
            this._layers.push(this.createOnLayer(i));
        }
    };
    LayerManager.prototype.createOnLayer = function (layerType) {
        var layer = new DisplayLayer();
        layer.layerType = layerType;
        layer.touchThrough = true;
        return layer;
    };
    LayerManager.prototype.addToLayer = function (display, layerType) {
        var layer = this.getLayerByType(layerType);
        layer.addChild(display);
    };
    LayerManager.prototype.getLayerByType = function (layerType) {
        for (var i = 0; i < this._layers.length; i++) {
            if (this._layers[i].layerType == layerType) {
                return this._layers[i];
            }
        }
    };
    LayerManager.prototype.resize = function () {
        LogManager.logFormat("【 LayerManager 】stageResized-------------");
        var width = App.StageUtils.getWidth();
        var height = App.StageUtils.getHeight();
        for (var i = 0; i < this._layers.length; i++) {
            var layer = this._layers[i];
            for (var i_1 = 0; i_1 < layer.numChildren; i_1++) {
                var child = layer.getChildAt(i_1);
                if (instanceOfIStageResizeable(child)) {
                    child["resize"](width, height);
                }
            }
        }
    };
    LayerManager.TIP_LAYER = 0;
    LayerManager.POP_LAYER = 1;
    LayerManager.SCENE_POP_LAYER = 2;
    LayerManager.SCENE_UI_EFFECT_LAYER = 3;
    LayerManager.SCENE_UI_LAYER = 4;
    LayerManager.SCENE_BASE_LAYER = 5;
    LayerManager.GAME_POP_LAYER = 6;
    LayerManager.GAME_UI_LAYER = 7;
    LayerManager.GAME_EFFECT_LAYER = 8;
    LayerManager.GAME_MASCOT_LAYER = 10;
    LayerManager.GAME_MAP_LAYER = 9;
    LayerManager.layerCount = 11;
    return LayerManager;
}(BaseClass));
__reflect(LayerManager.prototype, "LayerManager");
//# sourceMappingURL=LayerManager.js.map