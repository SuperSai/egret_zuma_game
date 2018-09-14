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
var SocketManager = (function (_super) {
    __extends(SocketManager, _super);
    function SocketManager() {
        var _this = _super.call(this) || this;
        _this._hasInitEvents = false;
        return _this;
    }
    SocketManager.prototype.setup = function () {
        var self = this;
        self._socket = new ByteSocket(false);
        self._socket.connect();
        self._out = new GameSocketOut();
        self.initEvents();
    };
    SocketManager.prototype.initEvents = function () {
        var self = this;
        if (self._hasInitEvents) {
            return;
        }
        App.MessageCenter.addListener(SocketConsts.SOCKET_DATA, self.onSocketDataHandler, self);
        self._hasInitEvents = true;
    };
    SocketManager.prototype.removeEvents = function () {
        var self = this;
        self._hasInitEvents = false;
        App.MessageCenter.removeListener(SocketConsts.SOCKET_DATA, self.onSocketDataHandler, self);
    };
    /** 接受到的服务器数据 */
    SocketManager.prototype.onSocketDataHandler = function (evt) {
        var self = this;
        var pkg = evt.data;
        if (pkg != null) {
            var code = pkg.code;
            var by = pkg.readBody();
            App.MessageCenter.dispatch(SocketConsts.format(code), by.bytes);
        }
    };
    Object.defineProperty(SocketManager.prototype, "socket", {
        get: function () {
            var self = this;
            return self._socket;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SocketManager.prototype, "out", {
        get: function () {
            var self = this;
            return self._out;
        },
        enumerable: true,
        configurable: true
    });
    return SocketManager;
}(BaseClass));
__reflect(SocketManager.prototype, "SocketManager");
//# sourceMappingURL=SocketManager.js.map