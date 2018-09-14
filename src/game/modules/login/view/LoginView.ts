/**
 * 登陆界面
 */
class LoginView extends BaseEuiView {

	public txt_input: eui.EditableText;
	public btn_random: eui.Button;
	public btn_enter: eui.Button;
	public bgImg: eui.Image;


	public constructor($controller: BaseController, $layer: number) {
		super($controller, $layer);
		this.skinName = SkinName.LoginSkin;
		this.setResources(["login"]);
	}

	/** 对面板进行显示初始化，用于子类继承 */
	public initUI(): void {
		super.initUI();
		let self = this;

	}

	/** 对面板数据的初始化，用于子类继承 */
	public initData(): void {
		super.initData();
		let self = this;
		let vertexSrc =
			"attribute vec2 aVertexPosition;\n" +
			"attribute vec2 aTextureCoord;\n" +
			"attribute vec2 aColor;\n" +

			"uniform vec2 projectionVector;\n" +

			"varying vec2 vTextureCoord;\n" +
			"varying vec4 vColor;\n" +

			"const vec2 center = vec2(-1.0, 1.0);\n" +

			"void main(void) {\n" +
			"   gl_Position = vec4( (aVertexPosition / projectionVector) + center , 0.0, 1.0);\n" +
			"   vTextureCoord = aTextureCoord;\n" +
			"   vColor = vec4(aColor.x, aColor.x, aColor.x, aColor.x);\n" +
			"}";
		let fragmentSrc3 = [
			"precision lowp float;\n" +
			"varying vec2 vTextureCoord;",
			"varying vec4 vColor;\n",
			"uniform sampler2D uSampler;",

			"uniform vec2 center;",
			"uniform vec3 params;", // 10.0, 0.8, 0.1"
			"uniform float time;",

			"void main()",
			"{",
			"vec2 uv = vTextureCoord.xy;",
			"vec2 texCoord = uv;",

			"float dist = distance(uv, center);",

			"if ( (dist <= (time + params.z)) && (dist >= (time - params.z)) )",
			"{",
			"float diff = (dist - time);",
			"float powDiff = 1.0 - pow(abs(diff*params.x), params.y);",

			"float diffTime = diff  * powDiff;",
			"vec2 diffUV = normalize(uv - center);",
			"texCoord = uv + (diffUV * diffTime);",
			"}",

			"gl_FragColor = texture2D(uSampler, texCoord);",
			"}"
		].join("\n");

		let customFilter3 = new egret.CustomFilter(
			vertexSrc,
			fragmentSrc3,
			{
				center: { x: 0.5, y: 0.5 },
				params: { x: 10, y: 0.8, z: 0.1 },
				time: 0
			}
		);
		App.TimerManager.doFrame(0, 0, () => {
			customFilter3.uniforms.time += 0.01;
			if (customFilter3.uniforms.time > 1) {
				customFilter3.uniforms.time = 0.0;
			}
		}, self);

		self.bgImg.filters = [customFilter3];
	}

	/** 面板开启执行函数，用于子类继承 */
	public open(...param: any[]): void {
		super.open(param);
	}

	public addEvents(): void {
		super.addEvents();
		let self = this;
		self.btn_random.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onRandomName, self);
		self.btn_enter.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onLogin, self);
		self.setBtnEffect(["btn_random", "btn_enter"]);
	}

	public removeEvents(): void {
		super.removeEvents();
		let self = this;
		self.btn_random.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onRandomName, self);
		self.btn_enter.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.onLogin, self);
	}

	/** 面板关闭执行函数，用于子类继承 */
	public close(...param: any[]): void {
		super.close(param);
	}

	/** 请求登陆处理 */
	private onLogin(): void {
		let self = this;
		if (self.txt_input.text == "") {
			return;
		}
		App.SceneManager.clear();
		App.SceneManager.runScene(SceneConsts.BATTLE, [10000, 10000]);

		// this.applyFunc(LoginConst.LOGIN_SEND_SERVER, self.txt_input.text);
	}

	/** 随机用户名 */
	private onRandomName(): void {
		let self = this;
	}

	/** 登陆成功处理 */
	public loginSuccess(): void {
		//TODO 登陆成功处理
	}


}