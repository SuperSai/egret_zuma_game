var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var App = (function () {
    function App() {
    }
    Object.defineProperty(App, "Http", {
        /** Http请求 */
        get: function () {
            return Http.Instance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "StageUtils", {
        /** Stage操作相关工具类 */
        get: function () {
            return StageUtils.Instance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "LayerManager", {
        /** 层级管理类 */
        get: function () {
            return LayerManager.Instance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "ControllerManager", {
        /** 模块管理类 */
        get: function () {
            return ControllerManager.Instance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "RegisterManager", {
        /** 注册控制器管理类 */
        get: function () {
            return RegisterManager.Instance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "SocketManager", {
        /** Socket管理类 */
        get: function () {
            return SocketManager.Instance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "LanguageManager", {
        /** 语言包管理类 */
        get: function () {
            return LanguageManager.Instance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "GameEnterManager", {
        /** manager初始化类 */
        get: function () {
            return GameEnterManager.Instance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "EffectUtils", {
        /** Effect工具类 */
        get: function () {
            return EffectUtils.Instance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "StringUtils", {
        /** 字符串工具类 */
        get: function () {
            return StringUtils.Instance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "SoundManager", {
        /** 声音管理类 */
        get: function () {
            return SoundManager.Instance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "CommonUtils", {
        /** 通过工具类 */
        get: function () {
            return CommonUtils.Instance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "KeyboardUtils", {
        /** 键盘操作工具类 */
        get: function () {
            return KeyboardUtils.Instance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "DeviceUtils", {
        /** 设备工具类 */
        get: function () {
            return DeviceUtils.Instance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "RockerUtils", {
        /** 摇杆操作工具类 */
        get: function () {
            return RockerUtils.Instance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "MathUtils", {
        /** 数学计算工具类 */
        get: function () {
            return MathUtils.Instance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "TimerManager", {
        /** 统一的计时器和帧刷管理类 */
        get: function () {
            return TimerManager.Instance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "DebugUtils", {
        /** 调试工具 */
        get: function () {
            return DebugUtils.Instance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "RandomUtils", {
        /** 随机数工具类 */
        get: function () {
            return RandomUtils.Instance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "ShockUtils", {
        /** 震动类 */
        get: function () {
            return ShakeUtils.Instance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "MessageCenter", {
        /** 服务器返回的消息处理中心 */
        get: function () {
            return MessageCenter.Instance(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "GameLoading", {
        /** 通用Loading动画 */
        get: function () {
            return GameLoading.Instance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "DisplayUtils", {
        /** 显示对象工具类 */
        get: function () {
            return DisplayUtils.Instance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "ViewManager", {
        /** View管理类 */
        get: function () {
            return ViewManager.Instance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "RenderTextureManager", {
        /** 渲染纹理管理类 */
        get: function () {
            return RenderTextureManager.Instance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "SceneManager", {
        /** 场景管理类 */
        get: function () {
            return SceneManager.Instance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "DelayOptManager", {
        /** 分帧处理类 */
        get: function () {
            return DelayOptManager.Instance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "BoneManager", {
        /** 龙骨管理类 */
        get: function () {
            return BoneManager.Instance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "StarlingSwfFactory", {
        /** StarlingSwf工厂类 */
        get: function () {
            return StarlingSwfFactory.Instance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "EgretExpandUtils", {
        /** 引擎扩展类 */
        get: function () {
            return ExpandUtils.Instance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "ResUtil", {
        /** 资源加载类 */
        get: function () {
            return ResUtil.Instance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "NotificationCenter", {
        /** 消息通知中心 */
        get: function () {
            if (App._notificationCenter == null) {
                App._notificationCenter = new MessageCenter(1);
            }
            return App._notificationCenter;
        },
        enumerable: true,
        configurable: true
    });
    /** 初始化函数 */
    App.Init = function () {
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
    };
    /** 请求服务器使用的用户标识 */
    App.ProxyUserFlag = "";
    /** 全局配置数据 */
    App.GlobalData = null;
    return App;
}());
__reflect(App.prototype, "App");
//# sourceMappingURL=App.js.map