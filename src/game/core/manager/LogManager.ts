class LogManager {
	public constructor() {
	}
	
	public static logFormat(content: any,...args): void {
		//if (!this.isLogOpen) return;
		let format: string = LogManager.buildFormatString(content,args);
		egret.log(format);
	}

	public static warningFormat(content:any,...args):void
	{
		let format: string = LogManager.buildFormatString(content,args);
		egret.warn(format);
	}

	public static errorFormat(content: any,...args): void {
		let format: string = LogManager.buildFormatString(content,args);
		egret.error(format);
	}

	private static buildFormatString(content:any,args:Array<any>):string
	{
		let format: string;
		if(typeof content=="number"){
			format=content.toString();
		}else if(typeof content=="string"){
			format=content
		}else if(typeof content=="object"){
			format=JSON.stringify(content); 
		}
		
		args.forEach(function (arg, index): void {
			format = format.replace('{' + index + '}', arg);
		});
		format += " -- [Time:" + egret.getTimer() + "]";
		return format;
	}

	public static format(format: string, ...args): string {
		args.forEach(function (arg, index): void {
			format = format.replace('{' + index + '}', arg);
		});
		return format;
	}
}