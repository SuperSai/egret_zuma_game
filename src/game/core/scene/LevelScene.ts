class LevelScene extends BaseScene {
	public constructor() {
		super();
	}

	/**
	* 进入Scene调用
	*/
	public onEnter(...param: any[]): void {
		super.onEnter();

		//参数
		var mapId: number = param[0];
		App.ControllerManager.applyFunc(ControllerConst.Level, LevelConst.LEVEL_INIT, mapId);
		//播放背景音乐
		// App.SoundManager.playBg("sound_bg");
	}

	/**
	 * 退出Scene调用
	 */
	public onExit(): void {
		super.onExit();
	}
}