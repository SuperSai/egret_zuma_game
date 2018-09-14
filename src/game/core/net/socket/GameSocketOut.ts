class GameSocketOut {

	public constructor() {
		let self = this;
	}
	/** 发送登陆请求 */
	public sendServerLogin(headUrl: string = "", nickName: string = ""): void {
		let self = this;
		let packageOut: PackageOut = new PackageOut();
		packageOut.init(PackageOutTypeConsts.LOGIN);
		let msg: protocol.CommonMsg = new protocol.CommonMsg();
		// msg.intPar1 = PlayerInfoManager.getInstance.playerId;
		msg.strPar1 = nickName;
		msg.strPar2 = headUrl;
		let data = protocol.CommonMsg.encode(msg).finish();
		App.SocketManager.socket.sendProtobuffer(packageOut, data);
	}

}