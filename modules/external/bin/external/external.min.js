window["version"] = "2018-0409"
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
// loadServerConfig();
var release;
var httpHead;
var isIos = false;
var centerUrl = null;
var playerId = null;
var isSelectHead = false;
var isEditNickName = false;
var isSkipLogoPage = false;
var isLog = false;
var platform = null;
var parameters = null;
var isShowAdv = false;

function loadServerConfig() {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', './serverConfig.json?v=' + window["version"], true);
	function loadComplete() {
		xhr.removeEventListener("load", loadComplete);
		var serverConfigData = JSON.parse(xhr.response);
		release = serverConfigData.serverConfig.release;
		isSkipLogoPage = serverConfigData.serverConfig.isSkipLogoPage;
		isLog = serverConfigData.serverConfig.isLog;
		var serverInfo = serverConfigData.serverConfig.configs;
		platform = serverConfigData.serverConfig.configs.platform;
		console.log("服务器数据为" + JSON.stringify(serverInfo) + "`````````````````````````````````````````````````````````````````");
		console.log("服务器" + JSON.stringify(serverInfo) + "`````````````````````````````````````````````````````````````````");
		console.log("platform:" + platform);
		if (serverInfo != null) {
			isSelectHead = serverInfo.isSelectHead;
			isEditNickName = serverInfo.isEditNickName;
			httpHead = serverInfo.androidHttpHead;
			centerUrl = serverInfo.androidCenterUrl;
			window.isExternalComplete = true;
		}
	}
	xhr.addEventListener("load", loadComplete);
	xhr.send(null);
}

function loadingHide() {
	if(!window["Logo_Fading_Complete"])return;
	var div = document.getElementById("loadingMain");
	if (div && div.parentNode) {
		div.parentNode.removeChild(div);
		div.style.display = "none";
	}

	var loadDiv = document.getElementById("loadLogo");
	if (loadDiv && loadDiv.parentNode) {
		loadDiv.parentNode.removeChild(loadDiv);
		loadDiv.style.display = "none";
	}

	var troyLogoDiv = document.getElementById("troyLogo");
	if (troyLogoDiv && troyLogoDiv.parentNode) {
		troyLogoDiv.parentNode.removeChild(troyLogoDiv);
		troyLogoDiv.style.display = "none";
	}

	var tipsLogoDiv = document.getElementById("tipsLogo");
	if (tipsLogoDiv && tipsLogoDiv.parentNode) {
		tipsLogoDiv.parentNode.removeChild(tipsLogoDiv);
		tipsLogoDiv.style.display = "none";
	}
}

function newRequest(url,callback,cache)
{
	var r = Date.now() + "" + (Math.floor(Math.random() * 100000));
	var xhrReq = new XMLHttpRequest();
	if (cache) {
		xhrReq.open("GET", url, true);
	} else {
		xhrReq.open("GET", url + "&vr=" + r, true);
	}
	xhrReq.addEventListener("load", function (oEvent) {
		callback(xhrReq.response);
	});
	xhrReq.send(null);
}

var ext = (function () {
	var external = {};
	external.getIsIos = function (){return isIos};
	external.getPlatform = function (){return platform};
	external.getIsShowAdv = function (){return isShowAdv};
	external.getIsSelectHead = function (){return isSelectHead};
	external.getIsEditNickName = function (){return isEditNickName};
	external.getIsSkipLogoPage = function (){return isSkipLogoPage};
	external.getIsLog = function (){return isLog};
	external.getCenterUrl = function (){return centerUrl};
	external.getPlayerId = function (){return playerId};
	external.getRelease = function (){return release};
	external.getHttpHead = function (){return httpHead};
	external.getParameters = function (){return null};
	external.beginFBGameSence = function (){};
	external.showFacebookAd = function (type, placementId, fromId, missioinId,param){};
	external.preloadingFBAdv = function (placementId){};
	external.JsFBGetFriends = function (){};
	external.jsPopPayTips = function (score){};
	external.loadingHide = loadingHide;
	external.newRequest = newRequest;
	return external;
})();
window.ext = ext;
