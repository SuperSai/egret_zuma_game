/**
 * 球
 */
class Ball extends egret.Sprite {

	//小球的颜色
	private _color: number;
	//道具的类型
	private propType: any;
	//道具MC
	private propMC: any;
	//在地图曲线中的位置
	private _posIndex: number;
	/** 球 */
	private _ball: eui.Image;

	public constructor(color: number) {
		super();
		let self = this;
		self._color = color;
		self.init();
	}

	private init(): void {
		let self = this;
		self._ball = new eui.Image();
		self.addChild(self._ball);
		self._ball.source = "ball_" + self._color;
		self.anchorOffsetX = self.anchorOffsetY = 16;
	}

	public get color(): number {
		return this._color;
	}
	//------------设置道具--------------------
	public set PROP(type: any) {
		this.propType = type;
		// this.propMC = new propType();
		// this.addChild(this.propMC);
		// setTimeout(clearProp, staticVars.PropLife);
	}
	//------------访问道具--------------------
	public get PROP(): any {
		return this.propType;
	}
	//------------清除道具--------------------
	private clearProp() {
		this.propType = null;
		this.removeChild(this.propMC);
		this.propMC = null;
	}
	//------------设置小球的位置--------------
	public set posIndex($pos: number) {
		this._posIndex = $pos;
		this.x = BattleConst.MapData[this._posIndex][0];
		this.y = BattleConst.MapData[this._posIndex][1];
		this.rotation = BattleConst.MapData[this._posIndex][2] - 90;
	}
	//------------小球爆炸-------------------
	public explode(): void {
		let self = this;
		self._ball.visible = false;
		let bomb: BoneAnimation = ResourcePool.Intance.pop("ui_bao01", ResourcePool.SKE);
		self.addChild(bomb);
		bomb.play(self.explodeComplete, self);
	}
	//------------爆炸结束--------------------
	private explodeComplete(): void {
		let self = this;
		self.parent.removeChild(self);
	}
	//------------访问小球的位置 在地图曲线中的位置--------------
	public get posIndex(): number {
		return this._posIndex;
	}
	//-----------克隆小球-----------------------
	public clone(): Ball {
		return new Ball(this._color);
	}
}