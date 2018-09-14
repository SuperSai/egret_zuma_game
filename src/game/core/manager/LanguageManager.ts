/**
 *Create Time:2018.2.5
 */
class LanguageManager extends BaseClass {
    public static isOpenLanguage: boolean = true;
    private _languageMap: TSDictionary<string, string> = new TSDictionary<string, string>();

    private _reg: RegExp = new RegExp("\\{(\\d+)\\}");

    /**
     * 初始化数据
     */
    public setup(data: string): void {
        let self = this;
        let languageArr: string[] = String(data).split("\r\n");
        if (languageArr.length) {
            for (var i = 0; i < languageArr.length; i++) {
                var obj = languageArr[i];
                if (obj == "#" || obj == "") {
                    continue;
                } else {
                    let strArr: string[] = obj.split(":");
                    if (self._languageMap.ContainsKey(strArr[0])) {
                        self._languageMap.Remove(strArr[0]);
                    }
                    if (strArr.length <= 2) {
                        self._languageMap.Add(strArr[0], strArr[1]);
                    } else {
                        self._languageMap.Add(strArr[0], strArr.slice(1).join(""));
                    }
                }
            }
        }
    }

    public getLanguageMapData(): any {
        let self = this;
        return self._languageMap.getValues();
    }

    public getLanguageById(key: string): string {
        let self = this;
        return self._languageMap.TryGetValue(key);
    }

    /**
     * 设置容器语言
     * @param {egret.DisplayObjectContainer} node
     */
    public setModuleLanguage(node: egret.DisplayObjectContainer): void {
        let self = this;
        if (!node || node && !node.numChildren || !LanguageManager.isOpenLanguage) return;
        self.SearchAndModifyNodeLanguage(node);
    }

    private SearchAndModifyNodeLanguage(node: egret.DisplayObjectContainer) {
        for (var i = 0; i < node.numChildren; i++) {
            var child: egret.DisplayObject = node.getChildAt(i);
            if (child instanceof egret.DisplayObjectContainer) {
                this.SearchAndModifyNodeLanguage(child);
            }

            if (child instanceof eui.Label) {

                if (child.name != "") {
                    var name: string = child.name.split("@")[1];
                    if (name) {
                        child.text = this.getLanguageById(name);
                    }
                }
            } else if (child instanceof eui.EditableText) {
                if (child.name != "") {
                    var name: string = child.name.split("@")[1];
                    if (name) {
                        child.prompt = this.getLanguageById(name);
                    }
                }
            } else if (child instanceof eui.Button) {
                if (child.name != "") {
                    var name: string = child.name.split("@")[1];
                    if (name) {
                        child.label = this.getLanguageById(name);
                    }
                }
            }
        }
    }

    /**
     * 获取文本内容
     * @param {string} key
     * @returns {string}
     */
    public getLanguageText(key: string, ...arg): string {
        let self = this;
        return self.getTranslationWithArray(key, arg);
    }

    private getTranslationWithArray(key: string, argsArr: any[]): string {
        let self = this;
        if (self._languageMap.ContainsKey(key)) {
            return self.replaceStr(self._languageMap.TryGetValue(key), argsArr);
        }
    }

    public languageReplace(str: string, args: any[]): string {
        let self = this;
        return self.replaceStr(str, args);
    }
    /**
     * 根据正则表达式去替换内容
     */
    private replaceStr(repContent: string, argsArr: any[]): string {
        let self = this;
        if (argsArr && argsArr.length > 0) {
            let data: RegExpExecArray = self._reg.exec(repContent);
            while (data && argsArr.length > 0) {
                let id: number = Number(data[1]);
                let str: string = String(argsArr[id]);
                if (id >= 0 && id < argsArr.length) {
                    var idx: number = str.indexOf("$");
                    if (idx > -1) {
                        str = str.slice(0, idx) + "$" + str.slice(idx);
                    }
                    repContent = repContent.replace(self._reg, str);
                }
                else {
                    repContent = repContent.replace(self._reg, "{}");
                }
                data = self._reg.exec(repContent);
            }
        }
        return repContent;
    }
}
