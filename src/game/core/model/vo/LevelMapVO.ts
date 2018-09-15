class LevelMapVO {

	public mapId: number;
	public icon: number;


	get positions(): egret.Point[] {
		return this._positions;
	}

	set positions(value) {
		this._positions = ObjectUtils.splitLevelMapPoints(value);
	}

	private _positions: egret.Point[];
}