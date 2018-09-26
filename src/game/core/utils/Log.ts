/**
 * 打印消息
 */
class Log {
    /**
     * Debug_Log
     * @param messsage 内容
     */
	public static trace(...optionalParams: any[]): void {
		if (App.DebugUtils.isDebug) {
			optionalParams[0] = "[DebugLog]" + optionalParams[0];
			console.log.apply(console, optionalParams);
		}
	}
}