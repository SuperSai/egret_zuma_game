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
var PackageIn = (function (_super) {
    __extends(PackageIn, _super);
    function PackageIn(buffer) {
        return _super.call(this, buffer) || this;
    }
    Object.defineProperty(PackageIn.prototype, "checksum", {
        get: function () {
            return this._checksum;
        },
        set: function (value) {
            this._checksum = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PackageIn.prototype, "clientId", {
        set: function (value) {
            this._clientId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PackageIn.prototype, "code", {
        get: function () {
            return this._cmdID;
        },
        set: function (value) {
            this._cmdID = value;
        },
        enumerable: true,
        configurable: true
    });
    PackageIn.prototype.loadE = function (src, len, key) {
        var self = this;
        var i = 0;
        var origion = new egret.ByteArray();
        var result = new egret.ByteArray();
        src.position = 0;
        for (i = 0; i < len; i++) {
            origion.writeByte(src.readByte());
        }
        origion.position = 0;
        key.position = 0;
        var srcData;
        var lastSrcData;
        var keyData;
        var keyDataBy = new egret.ByteArray();
        var nextKeyDataBy = new egret.ByteArray();
        var keyPosition;
        var srcPosition;
        var tempResultData;
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
        var keyBackup = new egret.ByteArray();
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
    };
    PackageIn.prototype.load = function (src, len) {
        var self = this;
        src.position = 0;
        for (var i = 0; i < len; i++) {
            self.writeByte(src.readByte());
        }
        self.readHeader();
    };
    PackageIn.prototype.readHeader = function () {
        var self = this;
        self.position = 0;
        self.readShort();
        self._length = self.readShort();
        self._checksum = self.readShort();
        self._cmdID = self.readShort();
    };
    PackageIn.prototype.readBody = function () {
        var self = this;
        var src = self;
        var length = src.length - PackageIn.HEADER_SIZE;
        var result = new egret.ByteArray();
        src.position = PackageIn.HEADER_SIZE;
        for (var i = PackageIn.HEADER_SIZE; i < src.length; i++) {
            result.writeByte(src.readByte());
        }
        return result;
    };
    PackageIn.prototype.calculateCheckSum = function () {
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
        var sum = (val1) & 0x7F7F;
        return sum;
    };
    PackageIn.prototype.copyByteArray = function (src) {
        var self = this;
        src.position = 0;
        var result = new egret.ByteArray();
        for (var i = 0; i < src.length; i++) {
            result.writeByte(src.readByte());
        }
        return result;
    };
    PackageIn.HEADER_SIZE = 8;
    return PackageIn;
}(egret.ByteArray));
__reflect(PackageIn.prototype, "PackageIn");
//# sourceMappingURL=PackageIn.js.map