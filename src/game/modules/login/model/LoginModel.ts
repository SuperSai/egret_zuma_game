class LoginModel extends BaseModel {
	public userInfo: any;

    /**
     * 构造函数
     * @param $controller 所属模块
     */
	public constructor($controller: BaseController) {
		super($controller);
	}
}
