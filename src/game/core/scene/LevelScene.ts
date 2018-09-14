class LevelScene extends BaseScene {
	public constructor() {
		super();
	}

	/**
	* 进入Scene调用
	*/
	public onEnter(): void {
		super.onEnter();

		//初始打开关卡界面
		App.ViewManager.open(ViewConst.Level);

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