class LoginController extends BaseController {
	//本模块的数据存储
	private _loginModel: LoginModel;
	private _loginView: LoginView;
	//本模块的Proxy
	private _loginProxy: LoginProxy;

	public constructor() {
		super();
		this.init();
	}

	private init(): void {
		let self = this;
		//初始化Model
		self._loginModel = new LoginModel(self);

		//初始化UI界面
		self._loginView = new LoginView(self, LayerManager.GAME_UI_LAYER);
		App.ViewManager.register(ViewConst.Login, self._loginView);

		//初始化Proxy
		this._loginProxy = new LoginProxy(this);

		//注册登陆消息
		self.registerMessage();
	}
	/** 注册消息 */
	private registerMessage(): void {
		let self = this;
		//注册C2S消息
		this.registerFunc(LoginConst.LOGIN_SEND_SERVER, this.onLogin, this);
		//注册S2C消息
		this.registerFunc(LoginConst.LOGIN_SUCCESS, this.loginSuccess, this);
	}

	/**
     * 请求登陆处理
     * @param userName
     * @param pwd
     */
	private onLogin(userName: string): void {
		this._loginProxy.login(userName);
	}

    /**
     * 登陆成功处理
     */
	private loginSuccess(userInfo: any): void {
		let self = this;
		//保存数据
		self._loginModel.userInfo = userInfo;
		//本模块UI处理
		self._loginView.loginSuccess();
		//UI跳转
		App.ViewManager.close(ViewConst.Login);

		var model: BaseModel = self.getControllerModel(ControllerConst.Login);
	}
}