/** 地图编辑 */
class MapEditor {

	//地图列表
	private _mapList: any[];
	//线最小宽度
	private lineMinWidth: number;

	public constructor(lineMinWidth: number) {
		this.lineMinWidth = lineMinWidth;
		this.init();
	}

	/**
	 * 初始数据
	 */
	public init(): void {
		this._mapList = [];
	}
	/**
	 * 根据输入的坐标创建地图
	 * @param	posX	x坐标
	 * @param	posY	y坐标
	 */
	public createMapByPos(posX: number, posY: number): void {
		if (!this._mapList) return;
		//存入第一个点
		if (this._mapList.length == 0) this._mapList.push([posX, posY, 0]);
		var prevDataAry: any[] = this._mapList[this._mapList.length - 1];
		var prevX: number = prevDataAry[0];
		var prevY: number = prevDataAry[1];
		var dx: number = posX - prevX;
		var dy: number = posY - prevY;
		var dis: number = App.MathUtils.getDistance(prevX, prevY, posX, posY);
		if (dis >= this.lineMinWidth) {
			var dataAry: any[];
			var x: number;
			var y: number;
			//求出线段的角度
			var angle: number = Math.atan2(dy, dx);
			//分割当前线段宽度
			var linePonumberNum: number = Math.floor(dis / this.lineMinWidth);
			for (var i: number = 0; i < linePonumberNum; i += 1) {
				//以最小线段距离和角度求出，最小线段所在的坐标位置
				x = Math.round(prevX + this.lineMinWidth * Math.cos(angle));
				y = Math.round(prevY + this.lineMinWidth * Math.sin(angle));
				//将上一个位置赋值给最小线段所在的坐标位置并保存进列表
				prevX = x;
				prevY = y;
				dataAry = [x, y, 0];
				//更改上一次数据列表中的角度
				prevDataAry[2] = Math.floor(App.MathUtils.rds2dgs(angle));
				prevDataAry = dataAry;
				this._mapList.push(dataAry);
			}
		}
	}

	/**
	 * 地图列表
	 */
	public get mapList(): any[] { return this._mapList; }

	/**
	 * 地图数据以字符串形式
	 * @return		字符串形式
	 */
	public mapToString(): String {
		if (!this._mapList) return "";
		var ary: any[];
		var length: number = this._mapList.length;
		var str: String = "";
		for (var i: number = 0; i < length; i += 1) {
			ary = this._mapList[i];
			str += ary[0] + "," + ary[1] + "# ";//ary[0] + "," + ary[1] + "," + ary[2] + "# ";
		}
		return str;
	}
}