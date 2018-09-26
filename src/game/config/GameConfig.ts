class GameConfig {
	/** 版本语言 */
	public static Language: string = "cn";
	/** 版本号 */
	public static Version: string = "20180414";


	//获得浏览器类型 pc android ios -- 可扩展为其他 如 微信、qqzone、qq、微博、校内、facebook
	public static systemType(): string {
		var ua = window.navigator.userAgent.toLowerCase();
		var microStr = "" + ua.match(/MicroMessenger/i);
		if (("" + ua.match(/windows nt/i)) == "windows nt") {
			return "windows";
		} else if (("" + ua.match(/iphone/i)) == "iphone") {
			return "ios";
		} else if (("" + ua.match(/android/i)) == "android") {
			return "android";
		} else if (("" + ua.match(/ipad/i)) == "ipad") {
			return "ipad";
		} else if (("" + ua.match(/linux/i)) == "linux") {
			return "linux";
		} else if (("" + ua.match(/mac/i)) == "mac") {
			return "mac";
		} else if (("" + ua.match(/ucbrower/i)) == "ucbrower") {
			return "ucbrower";
		} else {
			Log.trace("未知系统类型");
		}
	}
	//获得平台类型 如 微信、qqzone、qq、微博、校内、facebook
	public static platformType(): string {
		var ua = window.navigator.userAgent.toLowerCase();
		if (("" + ua.match(/micromessenger/i)) == "micromessenger") {
			return "micromessenger";
		} else if (("" + ua.match(/qzone/i)) == "qzone") {
			return "qzone";
		} else if (("" + ua.match(/weibo/i)) == "weibo") {
			return "weibo";
		} else if (("" + ua.match(/qq/i)) == "qq") {
			return "qq";
		} else if (("" + ua.match(/renren/i)) == "renren") {
			return "renren";
		} else if (("" + ua.match(/txmicroblog/i)) == "txmicroblog") {
			return "txmicroblog";
		} else if (("" + ua.match(/douban/i)) == "douban") {
			return "douban";
		} else {
			return "other";
		}
	}
}