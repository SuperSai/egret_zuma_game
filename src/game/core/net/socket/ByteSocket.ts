class ByteSocket extends egret.EventDispatcher {
	/** 收到的KEY流 */
	public RECEIVE_KEY: egret.ByteArray;
	/** 发送给后端的KEY */
	public SEND_KEY: egret.ByteArray;

	private _socket: egret.WebSocket;
	/** 是否加密 */
	private _encrypted: boolean;
	private _readBuffer: egret.ByteArray;
	/** 读的偏移 */
	private _readOffset: number;
	/** 写的偏移 */
	private _writeOffset: number;
	private _headerTemp: egret.ByteArray;
	private _m_PackageQueue: Array<PackageIn> = new Array<PackageIn>();
	private _isConnecting: boolean;
	private _connectFlag: boolean;
	private _reconnectCount: number = 0;
	private _needReconnect: boolean = false;
	private _maxReconnectCount = 10;

	public constructor(encrypted: boolean, isDebug: boolean = false) {
		super();
		let self = this;
		SocketConsts.DEBUG = isDebug;
		self._readBuffer = new egret.ByteArray();
		self._headerTemp = new egret.ByteArray();
		self._encrypted = encrypted;
		// self.setKey(SocketConfig.KEY);
	}
	/** 设置加密KEY */
	private setKey(key: Array<number>): void {
		let self = this;
		self.RECEIVE_KEY = new egret.ByteArray();
		self.SEND_KEY = new egret.ByteArray();

		for (var i: number = 0; i < 8; i++) {
			self.RECEIVE_KEY.writeByte(key[i]);
			self.SEND_KEY.writeByte(key[i]);
		}
	}
	/** 重置加密KEY */
	public resetKey(): void {
		this.setKey(SocketConsts.KEY);
	}
	/// <summary>
	/// 发送probuf 包
	/// </summary>
	/// <param name="pkg"></param>
	/// <param name="msg"></param>
	public sendProtobuffer(pkg: PackageOut, data: any) {
		let self = this;
		if (data != null) {
			let btyearray: egret.ByteArray = new egret.ByteArray(data);
			pkg.writeBytes(btyearray, 0, btyearray.length);
		}
		self.send(pkg);
	}

	public send(pkg: PackageOut): void {
		let self = this;
		if (self._socket && self._socket.connected) {
			pkg.pack();

			if (self._encrypted) {
				pkg.position = 0;
				self.SEND_KEY.position = 0;
				let dataH: any;
				let sendH: any;
				let lastData: any;
				let pagPosition: number;
				let sendPosition: number;

				let sendByteArray: egret.ByteArray = new egret.ByteArray();
				let sendKeyAY: egret.ByteArray = new egret.ByteArray();
				let nextKeyDataBy: egret.ByteArray = new egret.ByteArray();

				for (var i: number = 0; i < pkg.length; i++) {
					if (i > 0) {
						pagPosition = i;
						sendPosition = i % 8;

						pkg.position = pagPosition;
						self.SEND_KEY.position = sendPosition;
						let tempPkgData: any = lastData;

						if (i >= 8) {
							if (sendKeyAY.position >= 8 && nextKeyDataBy.length > 0) {
								sendKeyAY.clear();
								sendKeyAY = self.copyByteArray(nextKeyDataBy);
								nextKeyDataBy.clear();
							}

							sendKeyAY.position = sendPosition;
							sendH = sendKeyAY.readByte();
							sendH = (sendH + tempPkgData) ^ i;
							nextKeyDataBy.writeByte(sendH);
						}
						else {
							sendH = self.SEND_KEY.readByte();
							sendH = (sendH + tempPkgData) ^ i;
							sendKeyAY.writeByte(sendH);
						}

						dataH = pkg.readByte();
						dataH = (dataH ^ sendH) + tempPkgData;

						lastData = dataH;
						sendByteArray.writeByte(dataH);
					}
					else {
						dataH = pkg.readByte();
						sendH = self.SEND_KEY.readByte();
						dataH = dataH ^ sendH;
						lastData = dataH;
						sendByteArray.writeByte(dataH);
						sendKeyAY.writeByte(sendH);
					}
				}

				let keyBackup: egret.ByteArray = new egret.ByteArray();
				if (nextKeyDataBy.length > 0) {
					keyBackup = self.copyByteArray(nextKeyDataBy);
				}
				sendKeyAY.position = nextKeyDataBy.position;
				for (i = sendKeyAY.position; i < sendKeyAY.length; i++) {
					keyBackup.writeByte(sendKeyAY.readByte());
				}

				self.SEND_KEY.clear();
				self.SEND_KEY = self.copyByteArray(keyBackup);
				keyBackup.clear();
				sendKeyAY.clear();
				nextKeyDataBy.clear();

				self._socket.writeBytes(sendByteArray, 0, sendByteArray.length);
			}
			else {
				pkg.position = 0;
				self._socket.writeBytes(pkg, 0, pkg.length);
			}
			self._socket.flush();
		}
	}

	public connect(): void {
		let self = this;
		if (App.DeviceUtils.IsHtml5) {
			if (!window["WebSocket"]) {
				Log.trace("不支持WebSocket");
				return;
			}
		}
		//已经连接上了 再次请求连接  先关闭上次连接
		if (self._socket != null) {
			self.close();
		}
		//TCP 连接
		self._socket = new egret.WebSocket();
		self._socket.type = egret.WebSocket.TYPE_BINARY;
		self._readBuffer.position = 0;
		self._readOffset = 0;
		self._writeOffset = 0;

		self.addEvents();
		self._socket.connectByUrl(SocketConsts.IP + ":" + SocketConsts.PORT + "/weegame");
	}

	private addEvents(): void {
		let self = this;
		self._socket.addEventListener(egret.ProgressEvent.SOCKET_DATA, self.onReceiveMessage, self);
		self._socket.addEventListener(egret.Event.CONNECT, self.onConnectHandler, self);
		self._socket.addEventListener(egret.IOErrorEvent.IO_ERROR, self.onSocketError, self);
		self._socket.addEventListener(egret.Event.CLOSE, self.onSocketClose, self);
	}

	private removeEvents(): void {
		let self = this;
		self._socket.removeEventListener(egret.ProgressEvent.SOCKET_DATA, self.onReceiveMessage, self);
		self._socket.removeEventListener(egret.Event.CONNECT, self.onConnectHandler, self);
		self._socket.removeEventListener(egret.Event.CLOSE, self.onSocketClose, self);
		self._socket.removeEventListener(egret.IOErrorEvent.IO_ERROR, self.onSocketError, self);
	}

	/** 服务器连接错误 */
	private onSocketError(evt: egret.IOErrorEvent) {
		if (this._needReconnect) {
			this.reconnect();
		} else {
			App.MessageCenter.dispatch(SocketConsts.SOCKET_NOCONNECT);
		}
		this._isConnecting = false;
	}

	/** 服务器断开连接 */
	private onSocketClose() {
		Log.trace("服务器断开连接");
		this._isConnecting = false;

		if (this._needReconnect) {
			App.MessageCenter.dispatch(SocketConsts.SOCKET_START_RECONNECT);
			this.reconnect();
		} else {
			App.MessageCenter.dispatch(SocketConsts.SOCKET_CLOSE);
		}
	}

	/** 服务器连接成功 */
	private onConnectHandler(): void {
		let self = this;
		Log.trace("服务器连接成功");
		self._reconnectCount = 0;
		self._isConnecting = true;

		if (this._connectFlag && this._needReconnect) {
			App.MessageCenter.dispatch(SocketConsts.SOCKET_RECONNECT);
		} else {
			App.MessageCenter.dispatch(SocketConsts.SOCKET_CONNECT);
		}

		this._connectFlag = true;
	}

	private onReceiveMessage(): void {
		let self = this;
		if (!self._socket.connected) {
			//与服务器断开连接
			self.close();
			return;
		}
		//Receive方法一直等待服务器消息
		var arr: egret.ByteArray = new egret.ByteArray();
		self._socket.readBytes(arr);
		var len: number = arr.length;
		if (len > 0) {
			let receivebuff: egret.ByteArray = arr;
			//接受的时候保存在流中
			self._readBuffer.writeBytes(receivebuff, 0, len);
			self._writeOffset += len;
			if (self._writeOffset > 1) {
				self._readOffset = 0;
				if (len >= PackageIn.HEADER_SIZE) {
					self.readPackage();
				}
			}
		}
	}

	private readPackage(): void {
		let self = this;
		var dataLeft: number = self._writeOffset - self._readOffset;
		var readByte: egret.ByteArray = self.copyByteArray(self._readBuffer);
		readByte.position = 0;
		do {
			var len: number = 0;
			//解析包长
			self._readBuffer.position = self._readOffset;
			while (self._readOffset + 4 < self._writeOffset) {
				//解析包头
				self._headerTemp.clear();
				self._headerTemp.writeByte(self._readBuffer.readByte());
				self._headerTemp.writeByte(self._readBuffer.readByte());
				self._headerTemp.writeByte(self._readBuffer.readByte());
				self._headerTemp.writeByte(self._readBuffer.readByte());

				if (self._encrypted) {
					self._headerTemp = self.decrptBytes(self._headerTemp, 4, self.copyByteArray(self.RECEIVE_KEY));
				}

				self._headerTemp.position = 0;
				if (self._headerTemp.readShort() == PackageOut.HEADER) {
					//拿到包长
					len = self._headerTemp.readUnsignedShort();
					break;
				}
				else {
					self._readOffset++;
				}
			}

			dataLeft = self._writeOffset - self._readOffset;
			if (dataLeft >= len && len != 0) {
				var readByteTemp: egret.ByteArray = new egret.ByteArray();
				self._readBuffer.position = self._readOffset;
				var k: number = 0;
				for (k = 0; k < dataLeft; k++) {
					readByteTemp.writeByte(readByte.readByte());
				}

				var buff: PackageIn = new PackageIn();
				if (self._encrypted) {
					buff.loadE(readByteTemp, len, self.RECEIVE_KEY);
				}
				else {
					buff.load(readByteTemp, len);
				}
				self._readOffset += len;
				dataLeft = self._writeOffset - self._readOffset;
				self.handlePackage(buff);
			}
			else {
				break;
			}
		}
		while (dataLeft >= PackageIn.HEADER_SIZE);

		self._readBuffer.position = 0;
		if (dataLeft > 0) {
			self._readBuffer.writeBytes(self._readBuffer, self._readOffset, dataLeft);
		}
		self._readOffset = 0;
		self._writeOffset = dataLeft;
	}

	private handlePackage(pkg: PackageIn) {
		let self = this;
		if (pkg.checksum == pkg.calculateCheckSum()) {
			pkg.position = PackageIn.HEADER_SIZE;
			self._m_PackageQueue.push(pkg);
			self.onGetSocketData();
		}
	}

	private decrptBytes(src: egret.ByteArray, len: number, key: egret.ByteArray): egret.ByteArray {
		let self = this;
		let i: number = 0;
		let result: egret.ByteArray = new egret.ByteArray();
		src.position = 0;
		key.position = 0;

		let srcData: any;
		let lastSrcData: any;

		let keyData: any;
		let keyDataBy: egret.ByteArray = new egret.ByteArray();
		let nextKeyDataBy: egret.ByteArray = new egret.ByteArray();

		let keyPosition: number;
		let srcPosition: number;

		let tempResultData: any;

		for (i = 0; i < len; i++) {
			if (i > 0) {
				keyPosition = i % 8;
				key.position = keyPosition;

				if (i >= 8) {
					if (keyDataBy.position >= 8 && nextKeyDataBy.length > 0) {
						keyDataBy.clear();
						keyDataBy = self.copyByteArray(nextKeyDataBy);
						nextKeyDataBy.clear();
					}

					keyDataBy.position = keyPosition;
					keyData = keyDataBy.readByte();
					keyData = (keyData + lastSrcData) ^ i;
				}
				else {
					keyData = key.readByte();
					keyData = (keyData + lastSrcData) ^ i;
					keyDataBy.writeByte(keyData);
				}

				srcData = src.readByte();
				tempResultData = ((srcData - lastSrcData) ^ keyData);
				result.writeByte(tempResultData);
				lastSrcData = srcData;
			}
			else {
				srcData = src.readByte();
				keyData = key.readByte();
				tempResultData = (srcData ^ keyData);
				result.writeByte(tempResultData);

				keyDataBy.writeByte(keyData);
				lastSrcData = srcData;
			}
		}
		return result;
	}

	private copyByteArray(src: egret.ByteArray): egret.ByteArray {
		let self = this;
		var result: egret.ByteArray = new egret.ByteArray();
		src.position = 0;
		for (var i: number = 0; i < src.length; i++) {
			result.writeByte(src.readByte());
		}
		return result;
	}

	private onGetSocketData(): void {
		let self = this;
		if (self._m_PackageQueue.length > 0) {
			let handlerCount: number = 0;
			while (handlerCount < SocketConsts.HANDLER_MAX) {
				if (self._m_PackageQueue.length <= 0) {
					return;
				}
				handlerCount++;
				let pkg: PackageIn = self._m_PackageQueue.shift();
				App.MessageCenter.dispatch(SocketConsts.SOCKET_DATA, pkg);
			}
		}
	}

	/** 重新连接 */
	private reconnect(): void {
		this.closeCurrentSocket();
		this._reconnectCount++;
		if (this._reconnectCount < this._maxReconnectCount) {
			this.connect();
		} else {
			this._reconnectCount = 0;
			if (this._connectFlag) {
				App.MessageCenter.dispatch(SocketConsts.SOCKET_CLOSE);
			} else {
				App.MessageCenter.dispatch(SocketConsts.SOCKET_NOCONNECT);
			}
		}
	}

	/** 关闭Socket连接 */
	public close(): void {
		let self = this;
		self._connectFlag = false;
		this.closeCurrentSocket();
	}

	/** 清理当前的Socket连接 */
	private closeCurrentSocket() {
		let self = this;
		self.removeEvents();
		self._socket.close();
		self._socket = null;
		self._isConnecting = false;
	}

	/** Socket是否在连接中 */
	public isConnecting(): boolean {
		return this._isConnecting;
	}
}