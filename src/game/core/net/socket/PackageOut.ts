class PackageOut extends egret.ByteArray {

	public static HEADER: number = 0x71ab;
	private _checksum: number;
	private _cmdID: number;//协议号
	private _writer: egret.ByteArray;

	public constructor(buffer?: ArrayBuffer) {
		super(buffer);
		let self = this;
		self.writeShort(PackageOut.HEADER);			//标志符
		self.writeShort(0);							//长度
		self.writeShort(0); 						//check sum
		self.writeShort(0);							//协议号
		self._checksum = 0;
	}

	public init(cmdId: number): void {
		let self = this;
		self._cmdID = cmdId;
		self.position = 6;
		self.writeShort(self._cmdID);
	}

	public pack(): void {
		let self = this;
		self._checksum = self.calculateCheckSum();
		var temp: egret.ByteArray = new egret.ByteArray();
		temp.writeShort(self.length);
		temp.writeShort(self._checksum);
		self.position = 2;
		temp.position = 0;
		self.writeByte(temp.readByte());
		self.writeByte(temp.readByte());
		self.writeByte(temp.readByte());
		self.writeByte(temp.readByte());
	}

	public get cmdID(): number {
		return this._cmdID;
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
		return (val1) & 0x7F7F;
	}
}