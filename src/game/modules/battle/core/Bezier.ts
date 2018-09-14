class Bezier {

	//  对外变量
	private static p0: egret.Point;					// 起点
	private static p1: egret.Point;					// 贝塞尔点
	private static p2: egret.Point;					// 终点
	private static step: number = 0;					// 分割份数

	//  辅助变量
	private static ax: number = 0;
	private static ay: number = 0;
	private static bx: number = 0;
	private static by: number = 0;

	private static A: number = 0;
	private static B: number = 0;
	private static C: number = 0;

	private static total_length: number = 0;			// 长度

	public constructor() {
	}

	//  速度函数
	private static Speed(t: number): number {
		return Math.sqrt(this.A * t * t + this.B * t + this.C);
	}

	//  长度函数
	private static Length(t: number): number {
		let temp1: number = Math.sqrt(this.C + t * (this.B + this.A * t));
		let temp2: number = (2 * this.A * t * temp1 + this.B * (temp1 - Math.sqrt(this.C)));
		let temp3: number = Math.log(this.B + 2 * Math.sqrt(this.A) * Math.sqrt(this.C));
		let temp4: number = Math.log(this.B + 2 * this.A * t + 2 * Math.sqrt(this.A) * temp1);
		let temp5: number = 2 * Math.sqrt(this.A) * temp2;
		let temp6: number = (this.B * this.B - 4 * this.A * this.C) * (temp3 - temp4);

		return (temp5 + temp6) / (8 * Math.pow(this.A, 1.5));
	}

	//  长度函数反函数，使用牛顿切线法求解
	private static InvertL(t: number, l: number): number {
		let t1: number = t;
		let t2: number = 0;
		do {
			t2 = t1 - (this.Length(t1) - l) / this.Speed(t1);
			if (Math.abs(t1 - t2) < 0.000001) break;
			t1 = t2;
		} while (true);
		return t2;
	}

	//  返回所需总步数
	public static init($p0: egret.Point, $p1: egret.Point, $p2: egret.Point, $speed: number): number {
		this.p0 = $p0;
		this.p1 = $p1;
		this.p2 = $p2;
		//step = 30;

		this.ax = this.p0.x - 2 * this.p1.x + this.p2.x;
		this.ay = this.p0.y - 2 * this.p1.y + this.p2.y;
		this.bx = 2 * this.p1.x - 2 * this.p0.x;
		this.by = 2 * this.p1.y - 2 * this.p0.y;

		this.A = 4 * (this.ax * this.ax + this.ay * this.ay);
		this.B = 4 * (this.ax * this.bx + this.ay * this.by);
		this.C = this.bx * this.bx + this.by * this.by;

		//  计算长度
		this.total_length = this.Length(1);

		//  计算步数
		this.step = Math.floor(this.total_length / $speed);
		if (this.total_length % $speed > $speed / 2) this.step++;

		return this.step;
	}

	// 根据指定nIndex位置获取锚点：返回坐标和角度
	public static getAnchorPoint(nIndex: number): any[] {
		if (nIndex >= 0 && nIndex <= this.step) {
			let t: number = nIndex / this.step;
			//  如果按照线行增长，此时对应的曲线长度
			let l: number = t * this.total_length;
			//  根据L函数的反函数，求得l对应的t值
			t = this.InvertL(t, l);

			//  根据贝塞尔曲线函数，求得取得此时的x,y坐标
			let xx: number = (1 - t) * (1 - t) * this.p0.x + 2 * (1 - t) * t * this.p1.x + t * t * this.p2.x;
			let yy: number = (1 - t) * (1 - t) * this.p0.y + 2 * (1 - t) * t * this.p1.y + t * t * this.p2.y;

			//  获取切线
			let Q0: egret.Point = new egret.Point((1 - t) * this.p0.x + t * this.p1.x, (1 - t) * this.p0.y + t * this.p1.y);
			let Q1: egret.Point = new egret.Point((1 - t) * this.p1.x + t * this.p2.x, (1 - t) * this.p1.y + t * this.p2.y);

			//  计算角度
			let dx: number = Q1.x - Q0.x;
			let dy: number = Q1.y - Q0.y;
			let radians: number = Math.atan2(dy, dx);
			let degrees: number = radians * 180 / Math.PI;

			return [xx, yy, degrees];
		}
		else {
			return [];
		}
	}
}