class MathUtils extends BaseClass {

	public Deg2Rad: number = 0.01745329;
	public Rad2Deg: number = 57.29578;
	public Max: number = 9999999;

	/** 求2条线段的夹角 */
	public Angle(pos1: egret.Point, pos2: egret.Point, pos3: egret.Point): number {
		let cosfi = 0, fi = 0, norm = 0;
		let dsx = pos2.x - pos1.x;
		let dsy = pos2.y - pos1.y;
		let dex = pos3.x - pos1.x;
		let dey = pos3.y - pos1.y;

		cosfi = dsx * dex + dsy * dey;
		norm = (dsx * dsx + dsy * dsy) * (dex * dex + dey * dey);
		cosfi /= Math.sqrt(norm);

		if (cosfi >= 1.0) return 0;
		if (cosfi <= -1.0) return Math.PI;
		fi = Math.acos(cosfi);

		if (180 * fi / Math.PI < 180) {
			return 180 - 180 * fi / Math.PI;
		}
		else {
			return 360 - 180 * fi / Math.PI;
		}
	}

	public Clamp(maxValue, minValue, value) {
		return Math.max(minValue, Math.min(value, maxValue));
	}

	public Approximately(a, b): boolean {
		return Math.abs(a - b) < 0.01;
	}

	public Range(start: number, end: number): number {
		let max: number = Math.max(start, end);
		let min: number = Math.min(start, end);
		return Math.random() * (max - min) + min;
	}

	public moveToNextPosition(startPoint: egret.Point, endPoint: egret.Point, speed: number) {
		let angle = this.getAngle(startPoint, endPoint);
		let resultX = startPoint.x + speed * Math.cos(angle * Math.PI / 180);
		let resultY = startPoint.y - speed * Math.sin(angle * Math.PI / 180);
		startPoint.x = resultX;
		startPoint.y = resultY;
	}

	public getAngle(point1: egret.Point, point2: egret.Point): number {
		let vx = point2.x - point1.x;
		let vy = point2.y - point1.y;
		let hyp = Math.sqrt(Math.pow(vx, 2) + Math.pow(vy, 2));
		let rad = Math.acos(vx / hyp);
		let deg = 180 / (Math.PI / rad);
		//得到了一个角度“rad”，不过是以弧度为单位的
		//把它转换成角度 
		if (vy < 0) {
			deg = (-deg);
		} else if ((vy == 0) && (vx < 0)) {
			deg = 180;
		}
		return deg;
	}

	public getNewAngle(point1: egret.Point, point2: egret.Point): number {
		let angle = 180 + Math.atan2(point1.x - point2.x, point1.y - point2.y) * 180 / Math.PI;
		return angle;
	}

	public randomBool(): boolean {
		return Math.round(Math.random()) == 1;
	}

	public randomPointFromRect(rect: number[]): egret.Point {
		let self = this;
		let pos: egret.Point = new egret.Point();
		pos.x = Math.random() * rect[2] + rect[0];
		pos.y = Math.random() * rect[3] + rect[1];
		return pos;
	}

    /**
     * 角度值转换为弧度制
     * @param angle
     */
	public getRadian(angle: number): number {
		return angle / 180 * Math.PI;
	}

    /**
     * 获取两点间弧度
     * @param p1X
     * @param p1Y
     * @param p2X
     * @param p2Y
     * @returns {number}
     */
	public getRadian2(p1X: number, p1Y: number, p2X: number, p2Y: number): number {
		var xdis: number = p2X - p1X;
		var ydis: number = p2Y - p1Y;
		return Math.atan2(ydis, xdis);
	}

    /**
     * 获取两点间距离
     * @param p1X
     * @param p1Y
     * @param p2X
     * @param p2Y
     * @returns {number}
     */
	public getDistance(p1X: number, p1Y: number, p2X: number, p2Y: number): number {
		var disX: number = p2X - p1X;
		var disY: number = p2Y - p1Y;
		var disQ: number = disX * disX + disY * disY;
		return Math.sqrt(disQ);
	}

    /**
     * 角度转换成弧度 degrees -> radians
     * @param degrees 角度
     * @return 相应的弧度
     */
	public dgs2rds(degrees: number): number {
		return degrees * Math.PI / 180;
	}

	/**
	 * 弧度转换成角度  radians -> degrees
	 * @param radians 弧度
	 * @return 相应的角度
	 */
	public rds2dgs(radians: number): number {
		return this.fixAngle(radians * 180 / Math.PI);
	}

	/**
	 * 标准化角度值，将传入的角度值返回成一个确保落在 0 ~ 360 之间的数字。
	 * <pre>
	 * MathUtil.fixAngle(380); // 返回 20
	 * MathUtil.fixAngle(-340); // 返回 20
	 * </pre>
	 */
	public fixAngle(angle: number): number {
		angle %= 360;
		if (angle < 0) return angle + 360;
		return angle;
	}
}