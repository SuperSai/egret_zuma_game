class LoadingScene extends BaseScene {
    /**
     * 构造函数
     */
	public constructor() {
		super();
	}

    /**
     * 进入Scene调用
     */
	public onEnter(): void {
		super.onEnter();

		//初始打开Loading页面
		App.ViewManager.open(ViewConst.Loading);
	}

    /**
     * 退出Scene调用
     */
	public onExit(): void {
		super.onExit();
	}
}