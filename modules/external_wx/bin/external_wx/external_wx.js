window["version"] = "2018-0409";
window["lang"] = "CN";
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////

var centerUrl = null;
var platform = "wx";

loadServerConfig();
function loadServerConfig() {
	wx.request({
		url: "https://quanwang.7road.net/clickHeroes/serverConfig.json?v=" + window["version"],
		data: {},
		success: function (res) {
			var serverConfigData = res.data;
			var serverInfo = serverConfigData.serverConfig.configs;
			platform = serverConfigData.serverConfig.configs.platform;
			if (serverInfo != null) {
				centerUrl = serverInfo.wxCenterUrl;
			}
		},
		fail: function (err) {
			console.log(err)
		}
	});
}

function sendRequestJson(url, callback, self) {
	wx.request({
		url: url,
		success: function (res) {
			callback(res, self)
		},
		fail: function (err) {
		}
	});
}

function login(callback, self) {
	wx.login({
		success: function (res) {
			wx.request({
				url: "https://quanwang.7road.net/ClickHeroes/game/100/1",
				data: {
					js_code: res.code
				},
				success: function (res) {
					callback(res, self)
				},
				fail: function (err) {
					console.log("微信登陆失败!")
				}
			});
		}
	});
}

function getUserInfo(callback, self) {
	wx.getSetting({
		success: function (res) {
			console.log(res);
			if (res.authSetting['scope.userInfo']) {
				// 已经授权，可以直接调用 getUserInfo 获取头像昵称
				wx.getUserInfo({
					success: function (res) {
						callback(res, self)
					}
				})
			}
			else {
				wx.authorize({
					scope: 'scope.userInfo',
					success(res) {
						wx.getUserInfo({
							success: function (res) {
								callback(res, self)
							}
						})
					}
				})
			}
		}
	})
}

function getUnionId(url, unionData, callback, self) {
	wx.request({
		url: url,
		data: {
			session_key: unionData.sessionKey,
			encryptedData: unionData.encryptedData,
			iv: unionData.iv,
		},
		success: function (res) {
			console.log(res)
			callback(res, self)
		},
		fail: function (err) {
		}
	});
}

function getLocation(callback, self) {
	wx.getLocation({
		success: function (res) {
			callback(res, self);
		}
	})
}

function newRequest(url, data, callback, id, self) {
	wx.request({
		url: url,
		data: { js_code: data.code, gameId: id },
		success: function (res) {
			callback(res, self);
		},
		fail: function (err) {
			console.log(err)
		}
	});
}

function connectSocket(url, callback, self) {
	wx.connectSocket({
		url: url,
		success: (res) => {
			callback(res, self)
		}
	})
}

function onSocketOpen(callback) {
	wx.onSocketOpen(function (res) {
		callback(res, self)
	})
}

function onSocketMessage(callback) {
	wx.onSocketMessage(function (res) {
		callback(res, self)
	})
}

function sendSocketMessage(msg) {
	wx.sendSocketMessage({
		data: msg,
		success: (res) => {
			console.log(res)
		},
		fail: (res) => {
			console.log(res)
		}
	})
}

function onNavigateBackMiniProgram() {
	wx.navigateBackMiniProgram();
}

function shareMessage(titleName, imageUrl, callback) {
	wx.shareAppMessage({
		title: titleName,
		imageUrl: imageUrl,
		success: (res) => {
			callback(true);
			console.log("分享成功")
		},
		fail: (res) => {
			callback(false);
			console.log("分享失败")
		}
	})
}

function payment() {
	wx.requestPayment(
		{
			'timeStamp': '',
			'nonceStr': '',
			'package': '',
			'signType': 'MD5',
			'paySign': '',
			'success': function (res) {
				console("支付成功");
				console(res);
			},
			'fail': function (res) {
				console("支付失败");
				console(res);
			},
			'complete': function (res) {
				console("支付完成");
				console(res);
			}
		})
}

var ext = (function () {
	var external = {};
	external.getPlatform = function () { return platform };
	external.getCenterUrl = function () { return centerUrl };
	external.jsPopPayTips = function (score) { };
	external.newRequest = newRequest;
	external.sendRequestJson = sendRequestJson;
	external.getLocation = getLocation;
	external.getUserInfo = getUserInfo;
	external.getUnionId = getUnionId;
	external.connectSocket = connectSocket;
	external.onSocketOpen = onSocketOpen;
	external.onSocketMessage = onSocketMessage;
	external.sendSocketMessage = sendSocketMessage;
	external.onNavigateBackMiniProgram = onNavigateBackMiniProgram;
	external.getLogin = login;
	external.shareMessage = shareMessage;
	external.payment = payment;
	return external;
})();
window.ext = ext;
