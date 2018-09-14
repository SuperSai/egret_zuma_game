var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var PackageOut = (function (_super) {
    __extends(PackageOut, _super);
    function PackageOut(buffer) {
        var _this = _super.call(this, buffer) || this;
        var self = _this;
        self.writeShort(PackageOut.HEADER); //标志符
        self.writeShort(0); //长度
        self.writeShort(0); //check sum
        self.writeShort(0); //协议号
        self._checksum = 0;
        return _this;
    }
    PackageOut.prototype.init = function (cmdId) {
        var self = this;
        self._cmdID = cmdId;
        self.position = 6;
        self.writeShort(self._cmdID);
    };
    PackageOut.prototype.pack = function () {
        var self = this;
        self._checksum = self.calculateCheckSum();
        var temp = new egret.ByteArray();
        temp.writeShort(self.length);
        temp.writeShort(self._checksum);
        self.position = 2;
        temp.position = 0;
        self.writeByte(temp.readByte());
        self.writeByte(temp.readByte());
        self.writeByte(temp.readByte());
        self.writeByte(temp.readByte());
    };
    Object.defineProperty(PackageOut.prototype, "cmdID", {
        get: function () {
            return this._cmdID;
        },
        enumerable: true,
        configurable: true
    });
    PackageOut.prototype.calculateCheckSum = function () {
        var self = this;
        var val1 = 0x77;
        var i = 6;
        self.position = 6;
        while (i < self.length) {
            i++;
            var by = self.readByte();
            var by1 = by & 0xff;
            val1 += by1;
        }
        return (val1) & 0x7F7F;
    };
    PackageOut.HEADER = 0x71ab;
    return PackageOut;
}(egret.ByteArray));
__reflect(PackageOut.prototype, "PackageOut");
//# sourceMappingURL=PackageOut.js.map