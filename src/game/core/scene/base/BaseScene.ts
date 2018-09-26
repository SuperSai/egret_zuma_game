/**
 * Scene基类
 */
class BaseScene {
	//当前所有Layer
	private _layers: Array<egret.DisplayObjectContainer>;

    /**
     * 构造函数
     */
	public constructor() {
		this._layers = new Array<egret.DisplayObjectContainer>();
	}

    /**
     * 进入Scene调用
     */
	public onEnter(): void {

	}

    /**
     * 退出Scene调用
     */
	public onExit(): void {
		App.ViewManager.closeAll();
		this.removeAllLayer();
	}

    /**
     * 添加一个Layer到舞台
     */
	public addLayer(layer: egret.DisplayObjectContainer): void {
		if (layer instanceof BaseSpriteLayer) {
			App.StageUtils.getStage().addChild(layer);
			this._layers.push(layer);
		}
		else if (layer instanceof BaseEuiLayer) {
			App.StageUtils.getUIStage().addChild(layer);
			this._layers.push(layer);
		}
	}

    /**
     * 添加一个Layer到舞台
     */
	public addLayerAt(layer: egret.DisplayObjectContainer, index: number): void {
		if (layer instanceof BaseSpriteLayer) {
			App.StageUtils.getStage().addChildAt(layer, index);
			this._layers.push(layer);
		}
		else if (layer instanceof BaseEuiLayer) {
			App.StageUtils.getUIStage().addChildAt(layer, index);
			this._layers.push(layer);
		}
	}

    /**
     * 在舞台移除一个Layer
     */
	public removeLayer(layer: egret.DisplayObjectContainer): void {
		if (layer instanceof BaseSpriteLayer) {
			App.StageUtils.getStage().removeChild(layer);
			this._layers.splice(this._layers.indexOf(layer), 1);
		}
		else if (layer instanceof BaseEuiLayer) {
			App.StageUtils.getUIStage().removeChild(layer);
			this._layers.splice(this._layers.indexOf(layer), 1);
		}
	}

    /**
     * Layer中移除所有
     */
	public layerRemoveAllChild(layer: egret.DisplayObjectContainer): void {
		if (layer instanceof BaseSpriteLayer) {
			layer.removeChildren();
		}
		else if (layer instanceof BaseEuiLayer) {
			(<BaseEuiLayer>layer).removeChildren();
		}
	}

    /**
     * 移除所有Layer
     */
	public removeAllLayer(): void {
		while (this._layers.length) {
			var layer: egret.DisplayObjectContainer = this._layers[0];
			this.layerRemoveAllChild(layer);
			this.removeLayer(layer);
		}
	}
}