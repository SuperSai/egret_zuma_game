/**
 * 战斗场景
 */
class BattleScene extends BaseScene {
    /**
     * 构造函数
     */
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
		App.ControllerManager.applyFunc(ControllerConst.Battle, BattleConst.BATTLE_INIT, mapId);
	}

    /**
     * 退出Scene调用
     */
	public onExit(): void {
		super.onExit();

	}
}