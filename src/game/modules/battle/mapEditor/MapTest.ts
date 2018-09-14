class MapTest extends egret.Sprite {

	private mapEditor: MapEditor;
	//线段的宽度 一般为球的半径
	private lineMinWidth: number = 21.5;
	private isFirst: boolean = false;
	private btn: eui.Image;

	public constructor() {
		super();
		let self = this;
		self.width = 720;
		self.height = 1280;
		self.btn = new eui.Image("btn_big_02");
		self.btn.width = 100;
		self.btn.height = 80;
		self.addChild(self.btn);
		this.mapEditor = new MapEditor(this.lineMinWidth * 2);
		self.mapEditor.init();
		self.btn.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onBtn, self);
		App.StageUtils.getStage().addEventListener(egret.TouchEvent.TOUCH_TAP, self.onTapHandler, self);
		// App.StageUtils.getStage().addEventListener(egret.TouchEvent.TOUCH_BEGIN, self.onBeginHandler, self);
		// App.StageUtils.getStage().addEventListener(egret.TouchEvent.TOUCH_END, self.onEndHandler, self);
	}

	private onBtn(): void {
		let self = this;
		App.StageUtils.getStage().removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onTapHandler, self);
		var arr: any[];
		var length: number = this.mapEditor.mapList.length;
		Log.trace(this.mapEditor.mapToString());
		for (var i: number = 0; i < length; i += 1) {
			arr = this.mapEditor.mapList[i];
			this.drawCircle(arr[0], arr[1]);
		}
	}

	private onTapHandler(event: egret.TouchEvent): void {
		let self = this;
		if (!self.isFirst) {
			self.isFirst = true;
			self.graphics.lineStyle(2, 0xFF0000);
			self.graphics.moveTo(event.stageX, event.stageY);
		}
		else {
			this.graphics.lineTo(event.stageX, event.stageY);
			this.mapEditor.createMapByPos(event.stageX, event.stageY);
		}
	}

	private onBeginHandler(event: egret.TouchEvent): void {
		let self = this;
		// self.graphics.clear();
		self.graphics.lineStyle(2, 0xFF0000);
		self.graphics.moveTo(event.stageX, event.stageY);
		// if (App.StageUtils.getStage().hasEventListener(egret.TouchEvent.TOUCH_MOVE))
		// 	App.StageUtils.getStage().removeEventListener(egret.TouchEvent.TOUCH_MOVE, self.loop, self);
		// App.StageUtils.getStage().addEventListener(egret.TouchEvent.TOUCH_MOVE, self.loop, self);
	}

	private onEndHandler(event: egret.TouchEvent): void {
		App.StageUtils.getStage().removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.loop, this);
		var arr: any[];
		var length: number = this.mapEditor.mapList.length;
		Log.trace(this.mapEditor.mapToString());
		// for (var i: number = 0; i < length; i += 1) {
		// 	arr = this.mapEditor.mapList[i];
		// 	this.drawCircle(arr[0], arr[1]);
		// }
	}

	private loop(event: egret.TouchEvent): void {
		this.graphics.lineTo(event.stageX, event.stageY);
		this.mapEditor.createMapByPos(event.stageX, event.stageY);
	}

	/**
	 * 绘制圆圈
	 */
	private drawCircle(x: number, y: number): void {
		this.graphics.lineStyle(1, 0xFF0000);
		this.graphics.beginFill(0xFFF000, .5);
		this.graphics.drawCircle(x, y, this.lineMinWidth);
		this.graphics.endFill();
	}
}