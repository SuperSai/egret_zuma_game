class App {
	/** 请求服务器使用的用户标识 */
	public static ProxyUserFlag: string = "";
	/** 全局配置数据 */
	public static GlobalData: any = null;

	/** Http请求 */
	public static get Http(): Http {
		return Http.Instance();
	}
	/** Stage操作相关工具类 */
	public static get StageUtils(): StageUtils {
		return StageUtils.Instance();
	}
	/** 层级管理类 */
	public static get LayerManager(): LayerManager {
		return LayerManager.Instance();
	}
	/** 模块管理类 */
	public static get ControllerManager(): ControllerManager {
		return ControllerManager.Instance();
	}
	/** 注册控制器管理类 */
	public static get RegisterManager(): RegisterManager {
		return RegisterManager.Instance();
	}
	/** Socket管理类 */
	public static get SocketManager(): SocketManager {
		return SocketManager.Instance();
	}
	/** 语言包管理类 */
	public static get LanguageManager(): LanguageManager {
		return LanguageManager.Instance();
	}
	/** manager初始化类 */
	public static get GameEnterManager(): GameEnterManager {
		return GameEnterManager.Instance();
	}
	/** Effect工具类 */
	public static get EffectUtils(): EffectUtils {
		return EffectUtils.Instance();
	}
	/** 字符串工具类 */
	public static get StringUtils(): StringUtils {
		return StringUtils.Instance();
	}
	/** 声音管理类 */
	public static get SoundManager(): SoundManager {
		return SoundManager.Instance();
	}
	/** 通过工具类 */
	public static get CommonUtils(): CommonUtils {
		return CommonUtils.Instance();
	}
	/** 键盘操作工具类 */
	public static get KeyboardUtils(): KeyboardUtils {
		return KeyboardUtils.Instance();
	}
	/** 设备工具类 */
	public static get DeviceUtils(): DeviceUtils {
		return DeviceUtils.Instance();
	}
	/** 摇杆操作工具类 */
	public static get RockerUtils(): RockerUtils {
		return RockerUtils.Instance();
	}
	/** 数学计算工具类 */
	public static get MathUtils(): MathUtils {
		return MathUtils.Instance();
	}
	/** 统一的计时器和帧刷管理类 */
	public static get TimerManager(): TimerManager {
		return TimerManager.Instance();
	}
	/** 调试工具 */
	public static get DebugUtils(): DebugUtils {
		return DebugUtils.Instance();
	}
	/** 随机数工具类 */
	public static get RandomUtils(): RandomUtils {
		return RandomUtils.Instance();
	}
	/** 震动类 */
	public static get ShockUtils(): ShakeUtils {
		return ShakeUtils.Instance();
	}
	/** 服务器返回的消息处理中心 */
	public static get MessageCenter(): MessageCenter {
		return MessageCenter.Instance(0);
	}
	/** 通用Loading动画 */
	public static get GameLoading(): GameLoading {
		return GameLoading.Instance();
	}
	/** 显示对象工具类 */
	public static get DisplayUtils(): DisplayUtils {
		return DisplayUtils.Instance();
	}
	/** View管理类 */
	public static get ViewManager(): ViewManager {
		return ViewManager.Instance();
	}
	/** 渲染纹理管理类 */
	public static get RenderTextureManager(): RenderTextureManager {
		return RenderTextureManager.Instance();
	}
	/** 场景管理类 */
	public static get SceneManager(): SceneManager {
		return SceneManager.Instance();
	}
	/** 分帧处理类 */
	public static get DelayOptManager(): DelayOptManager {
		return DelayOptManager.Instance();
	}
	/** 龙骨管理类 */
	public static get BoneManager(): BoneManager {
		return BoneManager.Instance();
	}
	/** StarlingSwf工厂类 */
	public static get StarlingSwfFactory(): StarlingSwfFactory {
		return StarlingSwfFactory.Instance();
	}
	/** 引擎扩展类 */
	public static get EgretExpandUtils(): ExpandUtils {
		return ExpandUtils.Instance();
	}
	/** 资源加载类 */
	public static get ResUtil(): ResUtil {
		return ResUtil.Instance();
	}
	private static _notificationCenter: MessageCenter;
	/** 消息通知中心 */
	public static get NotificationCenter(): MessageCenter {
		if (App._notificationCenter == null) {
			App._notificationCenter = new MessageCenter(1);
		}
		return App._notificationCenter;
	}

	/** 初始化函数 */
	public static Init(): void {
		//全局配置数据
		App.GlobalData = RES.getRes("global");
		//开启调试
		App.DebugUtils.isOpen(App.GlobalData.IsDebug);
		App.DebugUtils.setThreshold(5);
		//扩展功能初始化
		App.EgretExpandUtils.init();
		//实例化Http请求
		App.Http.initServer(App.GlobalData.HttpSerever);
		// App.Socket.initServer(App.GlobalData.SocketServer, App.GlobalData.SocketPort, new ByteArrayMsgByProtobuf());
	}
}