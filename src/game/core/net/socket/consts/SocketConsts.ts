/**
 * Socket使用常量
 */
class SocketConsts {
    /**
     * Socket已经连接上
     */
    public static SOCKET_CONNECT: string = "SOCKET_CONNECT";
    /**
     * Socket重新连接上
     */
    public static SOCKET_RECONNECT: string = "SOCKET_RECONNECT";
    /**
     * Socket开始重新连接上
     */
    public static SOCKET_START_RECONNECT: string = "SOCKET_START_RECONNECT";
    /**
     * Socket已关闭
     */
    public static SOCKET_CLOSE: string = "SOCKET_CLOSE";
    /*
     * socket收到消息
     * */
    public static SOCKET_DATA: string = "SOCKET_DATA";
    /**
     * Socket不能连接上
     */
    public static SOCKET_NOCONNECT: string = "SOCKET_NOCONNECT";
    /**
     * Socketdebug的消息
     */
    public static SOCKET_DEBUG_INFO: string = "SOCKET_DEBUG_INFO";


    /** 是否是Debug模式 */
    public static DEBUG: boolean;
    /** IP地址 */
    public static IP: string = "";
    /** 端口号 */
    public static PORT: number;
    /** 头的最大长度 */
    public static HANDLER_MAX: number = 50;
    /** 加密的KEY */
    public static KEY: Array<number> = [0xae, 0xbf, 0x56, 0x78, 0xab, 0xcd, 0xef, 0xf1];


    /**
    * 用于拼事件类型，使用协议号的16进制表示
    * @param ...args 一级协议，二级协议号
    * */
    public static format(...args): string {
        var strArr: Array<string> = [];
        for (var i: number = 0; i < args.length; i++) {
            strArr.push(args[i].toString(16));
        }
        return strArr.join("+");
    }
}
