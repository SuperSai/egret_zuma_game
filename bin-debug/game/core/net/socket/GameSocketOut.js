var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameSocketOut = (function () {
    function GameSocketOut() {
        var self = this;
    }
    /** 发送登陆请求 */
    GameSocketOut.prototype.sendServerLogin = function (headUrl, nickName) {
        if (headUrl === void 0) { headUrl = ""; }
        if (nickName === void 0) { nickName = ""; }
        var self = this;
        var packageOut = new PackageOut();
        packageOut.init(PackageOutTypeConsts.LOGIN);
        var msg = new protocol.CommonMsg();
        // msg.intPar1 = PlayerInfoManager.getInstance.playerId;
        msg.strPar1 = nickName;
        msg.strPar2 = headUrl;
        var data = protocol.CommonMsg.encode(msg).finish();
        App.SocketManager.socket.sendProtobuffer(packageOut, data);
    };
    return GameSocketOut;
}());
__reflect(GameSocketOut.prototype, "GameSocketOut");
//# sourceMappingURL=GameSocketOut.js.map