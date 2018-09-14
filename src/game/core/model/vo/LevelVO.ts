class LevelVO {

	public mapId: number;
	/** 初始滚入球的数量 */
	public rollInCount: number;
	/** 滚入球的最大总数 */
	public rollInTotalCount: number;
	/** 球滚入的速度 */
	public rollSpeed: number;
	/** 球稳定的速度 */
	public stableSpeed: number;
	/** 最大颜色球数量 */
	public colorBallCount: number;
	/** 地图的Icon */
	public icon: number;


	/** 角色位置 */
	get rolePosition(): egret.Point {
		return this._rolePosition;
	}
	set rolePosition(value) {
		this._rolePosition = ObjectUtils.splitToPoints(value)[0];
	}
	private _rolePosition: egret.Point;

	/** 地图数据 */
	get mapData(): any[] {
		return this._mapData;
	}
	set mapData(value) {
		this._mapData = ObjectUtils.splitMapData(value);
	}
	private _mapData: any[];
}