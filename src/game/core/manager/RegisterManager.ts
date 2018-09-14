/** 
 * 控制器注册管理类
 */
class RegisterManager extends BaseClass {
	public constructor() {
		super();
	}
	/** 
	 * 初始化所有模块控制器
	 */
	public initModules(): void {
		App.ControllerManager.register(ControllerConst.Loading, new LoadingController());
		App.ControllerManager.register(ControllerConst.Login, new LoginController());
		App.ControllerManager.register(ControllerConst.Battle, new BattleController());
		App.ControllerManager.register(ControllerConst.Hall, new HallController());
		App.ControllerManager.register(ControllerConst.Level, new LevelController());
	}
}
