/**
 * 角色
 */
class Role extends egret.DisplayObjectContainer {

	/** 角色角度 */
	private _roleAngle: number;
	/** 是否能发射了 */
	private _canShoot: boolean;
	private _roleContainer: egret.DisplayObjectContainer;
	//当前的球
	public currentBall: Ball;
	//下一个球
	public nextBall: Ball;

	private _battleModel: BattleModel;

	//各个颜色的小球是否存在
	private blueExist: boolean = true;
	private whiteExist: boolean = true;
	private orangeExist: boolean = true;
	private redExist: boolean = true;
	private purpleExist: boolean = true;
	private greenExist: boolean = true;
	private yellowExist: boolean = true;

	public constructor() {
		super();
		let self = this;
	}

	public init(battleModel: BattleModel): void {
		let self = this;
		self._battleModel = battleModel;
		self._roleContainer = new egret.DisplayObjectContainer();
		self.addChild(self._roleContainer);
		self.updateRole();
	}

	/** 初始化展示球 */
	public initBall(): void {
		let self = this;
		self.currentBall = self.getBall();
		self.currentBall.x = self._roleContainer.width / 2 - self.currentBall.width / 2;
		self.currentBall.y = 0;
		self.nextBall = self.getBall();
		self.nextBall.x = self._roleContainer.width / 2 - self.currentBall.width / 2;
		self.nextBall.y = -42;
		self.addChild(self.currentBall);
		self.addChild(self.nextBall);

		egret.Tween.get(self.currentBall).to({ y: 40 }, 300).call(self.onMoveFinished, self);
		egret.Tween.get(self.nextBall).to({ y: 16 }, 300).call(() => { egret.Tween.removeTweens(self.nextBall); });
	}

	/** 发射的时候，从此发射器中获当前取小球 */
	public getCurrentBall(): Ball {
		let self = this;
		self._canShoot = false;
		let _ball = self.currentBall;
		self.nextShoot();
		return _ball;
	}

	/** 准备下一发 */
	private nextShoot(): void {
		let self = this;
		self.removeChild(self.currentBall);
		self.currentBall = self.nextBall;
		self.currentBall.x = self._roleContainer.width / 2 - self.currentBall.width / 2;
		self.currentBall.y = 0;
		self.nextBall = self.getBall();
		self.nextBall.x = self._roleContainer.width / 2 - self.currentBall.width / 2;
		self.nextBall.y = -42;
		self.addChild(self.nextBall);

		egret.Tween.get(self.currentBall).to({ y: 40 }, 300).call(self.onMoveFinished, self);
		egret.Tween.get(self.nextBall).to({ y: 16 }, 300).call(() => { egret.Tween.removeTweens(self.nextBall); });
	}

	/** 随机获取小球 */
	private getBall(): Ball {
		let self = this;
		var _ball: Ball;
		end: while (true) {
			var randomNum: number = App.RandomUtils.randint(0, self._battleModel.levelVO.colorBallCount);
			switch (randomNum) {
				case 0:
					if (self.blueExist) { _ball = new Ball(randomNum); break end; } break;
				case 1:
					if (self.whiteExist) { _ball = new Ball(randomNum); break end; } break;
				case 2:
					if (self.orangeExist) { _ball = new Ball(randomNum); break end; } break;
				case 3:
					if (self.redExist) { _ball = new Ball(randomNum); break end; } break;
				case 4:
					if (self.purpleExist) { _ball = new Ball(randomNum); break end; } break;
				case 5:
					if (self.greenExist) { _ball = new Ball(randomNum); break end; } break;
				case 6:
					if (self.yellowExist) { _ball = new Ball(randomNum); break end; } break;
			}
		}
		return _ball;
	}

	/** 检查颜色，防止发射器中出现球链中没有的颜色 */
	public colorCleared(color: number): void {
		let self = this;
		switch (color) {
			case 0: self.blueExist = false; break;
			case 1: self.whiteExist = false; break;
			case 2: self.orangeExist = false; break;
			case 3: self.redExist = false; break;
			case 4: self.purpleExist = false; break;
			case 5: self.greenExist = false; break;
			case 6: self.yellowExist = false; break;
		}

		//全部颜色的球清除完毕说明游戏已结束，将发射器中的球缩回
		if (!(self.blueExist || self.whiteExist || self.orangeExist || self.redExist || self.purpleExist || self.greenExist || self.yellowExist)) {
			self._canShoot = false;
			egret.Tween.get(self.currentBall).to({ y: -25 }, 300).call(self.onMoveFinished, self);
			egret.Tween.get(self.nextBall).to({ y: -26 }, 300).call(() => { egret.Tween.removeTweens(self.nextBall); });
		}
		else {
			//被清除的颜色与当前球，下一个球相同则更换
			if (self.currentBall.color == color) {
				self.removeChild(self.currentBall);
				self.currentBall = self.getBall();
				self.currentBall.x = 0;
				self.currentBall.y = 25;
				self.addChild(self.currentBall);
			}
			if (self.nextBall.color == color) {
				self.removeChild(self.nextBall);
				self.nextBall = self.getBall();
				self.nextBall.x = 0;
				self.nextBall.y = -26;
				self.addChild(self.nextBall);
			}
		}
	}

	/** 移动效果结束 */
	private onMoveFinished(): void {
		let self = this;
		egret.Tween.removeTweens(self.currentBall);
		self._canShoot = true;
	}

	/** 更新角色 */
	public updateRole(): void {
		let self = this;
		let path: string = PathConfig.RolePath.replace("{0}", self._battleModel.roleId + "");
		App.DisplayUtils.removeAllChildren(self._roleContainer);
		App.DisplayUtils.addAsyncBimapToContainer(path, self._roleContainer, () => {
			self.anchorOffsetX = self.width / 2;
			self.anchorOffsetY = self.height / 2;
		});
	}

	/** 设置角色位置 */
	public setPosition($x: number, $y: number): void {
		let self = this;
		self.x = $x;
		self.y = $y;
	}

	/** 设置角度 */
	set angle(angle: number) {
		this.rotation = angle;
	}

	/** 是否可以攻击 */
	get canShoot(): boolean { return this._canShoot };

}