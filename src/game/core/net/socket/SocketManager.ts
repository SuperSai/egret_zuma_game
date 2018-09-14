class SocketManager extends BaseClass {
	private _hasInitEvents: boolean = false;
	private _out: GameSocketOut;
	private _socket: ByteSocket;

	public constructor() {
		super();
	}

	public setup(): void {
		let self = this;
		self._socket = new ByteSocket(false);
		self._socket.connect();
		self._out = new GameSocketOut();
		self.initEvents();
	}

	private initEvents(): void {
		let self = this;
		if (self._hasInitEvents) {
			return;
		}
		App.MessageCenter.addListener(SocketConsts.SOCKET_DATA, self.onSocketDataHandler, self);
		self._hasInitEvents = true;
	}

	public removeEvents(): void {
		let self = this;
		self._hasInitEvents = false;
		App.MessageCenter.removeListener(SocketConsts.SOCKET_DATA, self.onSocketDataHandler, self);
	}

	/** 接受到的服务器数据 */
	private onSocketDataHandler(evt: egret.Event): void {
		let self = this;
		var pkg: PackageIn = evt.data as PackageIn;
		if (pkg != null) {
			let code: number = pkg.code;
			let by: egret.ByteArray = pkg.readBody();
			App.MessageCenter.dispatch(SocketConsts.format(code), by.bytes);
		}
	}

	public get socket() {
		let self = this;
		return self._socket;
	}

	public get out(): GameSocketOut {
		let self = this;
		return self._out;
	}
}