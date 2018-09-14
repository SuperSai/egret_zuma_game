class PackageIn extends egret.ByteArray {
	public constructor(buffer?: ArrayBuffer) {
		super(buffer);
	}

	public static HEADER_SIZE: number = 8;
	private _length: number;
	private _checksum: number;
	private _clientId: number;
	private _cmdID: number;

	public set checksum(value: number) {
		this._checksum = value;
	}

	public get checksum(): number {
		return this._checksum;
	}

	public set clientId(value: number) {
		this._clientId = value;
	}

	public set code(value: number) {
		this._cmdID = value;
	}

	public get code(): number {
		return this._cmdID;
	}

	public loadE(src: egret.ByteArray, len: number, key: egret.ByteArray): void {
		let self = this;
		var i: number = 0;
		var origion: egret.ByteArray = new egret.ByteArray();
		var result: egret.ByteArray = new egret.ByteArray();
		src.position = 0;
		for (i = 0; i < len; i++) {
			origion.writeByte(src.readByte());
		}

		origion.position = 0;
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
					nextKeyDataBy.writeByte(keyData);
				}
				else {
					keyData = key.readByte();
					keyData = (keyData + lastSrcData) ^ i;
					keyDataBy.writeByte(keyData);
				}

				srcData = origion.readByte();
				tempResultData = (srcData - lastSrcData) ^ keyData;
				result.writeByte(tempResultData);
				lastSrcData = srcData;
			}
			else {
				srcData = origion.readByte();
				keyData = key.readByte();
				tempResultData = srcData ^ keyData;
				result.writeByte(tempResultData);
				keyDataBy.writeByte(keyData);
				lastSrcData = srcData;
			}
		}

		let keyBackup: egret.ByteArray = new egret.ByteArray();
		if (nextKeyDataBy.length > 0) {
			keyBackup = self.copyByteArray(nextKeyDataBy);
		}
		keyDataBy.position = nextKeyDataBy.position;
		for (i = keyDataBy.position; i < keyDataBy.length; i++) {
			keyBackup.writeByte(keyDataBy.readByte());
		}
		App.SocketManager.socket.RECEIVE_KEY.clear();
		App.SocketManager.socket.RECEIVE_KEY = self.copyByteArray(keyBackup);
		keyBackup.clear();
		keyDataBy.clear();
		nextKeyDataBy.clear();

		result.position = 0;
		self.position = 0;
		for (i = 0; i < len; i++) {
			self.writeByte(result.readByte());
		}
		self.readHeader();
	}

	public load(src: egret.ByteArray, len: number): void {
		let self = this;
		src.position = 0;
		for (var i: number = 0; i < len; i++) {
			self.writeByte(src.readByte());
		}
		self.readHeader();
	}

	private readHeader(): void {
		let self = this;
		self.position = 0;
		self.readShort();
		self._length = self.readShort();
		self._checksum = self.readShort();
		self._cmdID = self.readShort();
	}

	public readBody(): egret.ByteArray {
		let self = this;
		let src: egret.ByteArray = self;
		let length: number = src.length - PackageIn.HEADER_SIZE;
		let result: egret.ByteArray = new egret.ByteArray();
		src.position = PackageIn.HEADER_SIZE;
		for (var i: number = PackageIn.HEADER_SIZE; i < src.length; i++) {
			result.writeByte(src.readByte());
		}
		return result;
	}

	public calculateCheckSum(): number {
		let self = this;
		var val1: number = 0x77;
		var i: number = 6;
		self.position = 6;
		while (i < self.length) {
			i++;
			let by: number = self.readByte();
			let by1: number = by & 0xff;
			val1 += by1;
		}
		let sum: number = (val1) & 0x7F7F;
		return sum;
	}

	private copyByteArray(src: egret.ByteArray): egret.ByteArray {
		let self = this;
		src.position = 0;
		let result: egret.ByteArray = new egret.ByteArray();
		for (var i: number = 0; i < src.length; i++) {
			result.writeByte(src.readByte());
		}
		return result;
	}
}