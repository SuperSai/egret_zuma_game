class BattleModel extends BaseModel {

	/** 角色ID */
	public roleId: number;

	private _levelVO: LevelVO;

	public constructor($controller: BaseController) {
		super($controller)
	}

	get levelVO(): LevelVO {
		return this._levelVO;
	}
	set levelVO(value: LevelVO) {
		this._levelVO = value;
	}
}

enum BALL_TYPE {
	BALL,
	ATTACK_BALL,
}

enum BALL_ANIM {
	DEFAULT,
	BOMB,
}

enum BALL_MOVE {
	/** 正常移动 */
	DEFAULT,
	/** 停止移动 */
	STOP,
	/** 后退移动 */
	BACK_OFF,
	/** 加速移动 */
	ACCELERATE,
}

enum ROLE_STATE {
	/** 攻击 */
	ATTACK,
}