var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Socket使用常量
 */
var SocketConsts = (function () {
    function SocketConsts() {
    }
    /**
    * 用于拼事件类型，使用协议号的16进制表示
    * @param ...args 一级协议，二级协议号
    * */
    SocketConsts.format = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var strArr = [];
        for (var i = 0; i < args.length; i++) {
            strArr.push(args[i].toString(16));
        }
        return strArr.join("+");
    };
    /**
     * Socket已经连接上
     */
    SocketConsts.SOCKET_CONNECT = "SOCKET_CONNECT";
    /**
     * Socket重新连接上
     */
    SocketConsts.SOCKET_RECONNECT = "SOCKET_RECONNECT";
    /**
     * Socket开始重新连接上
     */
    SocketConsts.SOCKET_START_RECONNECT = "SOCKET_START_RECONNECT";
    /**
     * Socket已关闭
     */
    SocketConsts.SOCKET_CLOSE = "SOCKET_CLOSE";
    /*
     * socket收到消息
     * */
    SocketConsts.SOCKET_DATA = "SOCKET_DATA";
    /**
     * Socket不能连接上
     */
    SocketConsts.SOCKET_NOCONNECT = "SOCKET_NOCONNECT";
    /**
     * Socketdebug的消息
     */
    SocketConsts.SOCKET_DEBUG_INFO = "SOCKET_DEBUG_INFO";
    /** IP地址 */
    SocketConsts.IP = "";
    /** 头的最大长度 */
    SocketConsts.HANDLER_MAX = 50;
    /** 加密的KEY */
    SocketConsts.KEY = [0xae, 0xbf, 0x56, 0x78, 0xab, 0xcd, 0xef, 0xf1];
    return SocketConsts;
}());
__reflect(SocketConsts.prototype, "SocketConsts");
//# sourceMappingURL=SocketConsts.js.map