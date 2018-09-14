// class UIUtil {

// 	/** 创建提示框 */
// 	public static createAlert(className: any): UI.BaseAlert {
// 		let classZ: any = className;
// 		let view: UI.BaseAlert = new classZ();
// 		view.uiName = className + "";
// 		return view;
// 	}
// 	/** 创建面板 */
// 	public static createPanel(className: any, isRandom: boolean = false): UI.BasePanel {
// 		let classZ: any = className;
// 		let view: UI.BasePanel = new classZ();
// 		if (isRandom) {
// 			view.uiName = className + Math.random() + "";
// 		}
// 		else {
// 			view.uiName = className + "";
// 		}
// 		return view;
// 	}
// 	/** 创建场景 */
// 	public static createScene(className: any): UI.BaseScene {
// 		let classZ: any = className;
// 		let view: UI.BaseScene = new classZ();
// 		view.uiName = className + "";
// 		return view;
// 	}

// 	/**
//     * 设置滤镜变灰
//     */
// 	public static setFilters(component: egret.DisplayObjectContainer): void {
// 		if (component) {
// 			//颜色矩阵数组
// 			var colorMatrix = [
// 				0.3, 0.6, 0, 0, 0,
// 				0.3, 0.6, 0, 0, 0,
// 				0.3, 0.6, 0, 0, 0,
// 				0, 0, 0, 1, 0
// 			];
// 			var colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
// 			component.filters = [colorFlilter];
// 		}
// 	}

// 	/**
//     * 设置文本红色和通用色切换
//     */
// 	public static changeColor(label: eui.Label, bol: boolean): void {
// 		if (label) {
// 			if (bol) {
// 				label.textColor = 0x503637;
// 			} else {
// 				label.textColor = 0xff0000;
// 			}

// 		}
// 	}

// 	/**
//      *
//      * @param {egret.TextField} textFile
//      * @param {string} str
//      *  "增加<font size='60' color='0x2bff00' i='true' b='false'>100</font>点初始点击伤害"
//      */
// 	public static setText(textFile: egret.TextField, str: string = ""): void {
// 		if (!textFile) return;
// 		var styleParser = new egret.HtmlTextParser();
// 		textFile.textFlow = styleParser.parser(str)
// 	}
// }