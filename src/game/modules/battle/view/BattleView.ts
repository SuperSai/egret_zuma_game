/**
 * 战斗场景
 */
class BattleView extends BaseSpriteView {

	/** 战斗地图 */
	private _map: BattleMap;
	/** 角色 */
	private _role: Role;
	/** 战斗的数据模型 */
	private _battleModel: BattleModel;

	private _zuma: ZumaCore;

	public constructor($controller: BaseController, $layer: number) {
		super($controller, $layer);
		this.setResources(["battle"]);
	}

	public initUI(): void {
		super.initUI();
		let self = this;
		self.touchEnabled = true;
		self._zuma = new ZumaCore();
		self._map = new BattleMap();
		self._role = new Role();
		self.addChild(self._map);
		self.addChild(self._zuma);
		self.addChild(self._role);
		//地图编辑器
		// let mapTest: MapTest = new MapTest();
		// self.addChild(mapTest);
	}

	public initData(): void {
		super.initData();
		let self = this;
		self._zuma.init(self._role, self._battleModel.levelVO);
	}

	/** 添加监听事件 */
	public addEvents(): void {
		super.addEvents();
		let self = this;
		self.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onBattleAttack, self);
	}

	/** 移除监听事件 */
	public removeEvents(): void {
		super.removeEvents();
		let self = this;
		self.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onBattleAttack, self);
	}

	/** 面板开启执行函数，用于子类继承 */
	public open(...param: any[]): void {
		super.open(param);
		let self = this;
		self._battleModel = param[0];
		self.initMap(self._battleModel.levelVO);
		self.initRole();
	}

	/** 初始化地图 */
	private initMap(vo: LevelVO): void {
		let self = this;
		self._map.init(self._battleModel);
	}

	/** 初始化角色 */
	private initRole(): void {
		let self = this;
		self._role.init(self._battleModel);
		self._role.setPosition(self._battleModel.levelVO.rolePosition.x, self._battleModel.levelVO.rolePosition.y);
	}

	/** 发射球 */
	private onBattleAttack(evt: egret.TouchEvent): void {
		let self = this;
		//更新角色旋转角度
		self.updateRoleAngle(evt.stageX, evt.stageY);
		if (!self._role.canShoot || !self._zuma.canShoot) return;
		self._zuma.shootBall();
	}

	/** 更新角色角度 */
	private updateRoleAngle($x: number, $y: number): void {
		let self = this;
		let angle = App.MathUtils.Angle(new egret.Point(self._role.x, self._role.y), new egret.Point(self._role.x, self._role.y - 500), new egret.Point($x, $y));
		self._role.angle = $x <= self._role.x ? angle : -angle;
	}
}