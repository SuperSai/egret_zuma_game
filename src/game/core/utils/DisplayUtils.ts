/**
 * 显示对象工具类
 */
class DisplayUtils extends BaseClass {
    /**
     * 构造函数
     */
    public constructor() {
        super();
    }

    public stableFramerate: number = 30;
    public red: number = 0xFC0505;
    public white: number = 0xffffff;
    public black: number = 0x000000;
    public green: number = 0x69FF55;

    public getChildIndex(child: egret.DisplayObject): number {
        if (child == null || child.parent == null) return -1;
        return child.parent.getChildIndex(child);
    }

    public textDotAnimation(label: any): void {
        let mainText: string = label.text;

        let tw = egret.Tween.get(label, { loop: true });
        tw.to({}, 500).call(() => { label.text = mainText + "." });
        tw.to({}, 500).call(() => { label.text = mainText + ".." });
        tw.to({}, 500).call(() => { label.text = mainText + "..." });
        tw.to({}, 500).call(() => { label.text = mainText });

        label.addEventListener(egret.Event.REMOVED_FROM_STAGE, () => {
            egret.Tween.removeTweens(label);
            tw = null;
        }, this);
    }

    public getLocalPos(container: egret.DisplayObjectContainer, child: egret.DisplayObject, localPos: egret.Point): egret.Point {
        let global: egret.Point = child.localToGlobal(localPos.x, localPos.y);
        return container.globalToLocal(global.x, global.y);
    }

    public safeRemoveChild(child: egret.DisplayObject): void {
        if (child == null) return;
        if (child.parent == null) return;
        child.parent.removeChild(child);
    }

    public scaleToNormalSizeWithContainer(display: egret.DisplayObject, container: egret.DisplayObjectContainer): void {
        let scale: number = this.searchContainerScale(display.parent, container);
        display.scaleX = 1 / scale;
        display.scaleY = 1 / scale;
    }

    private searchContainerScale(container: egret.DisplayObjectContainer, targetContainer: egret.DisplayObjectContainer): number {
        let result: number = 1;
        if (container != targetContainer) {
            result = this.searchContainerScale(container.parent, targetContainer) * result;
        }
        return result;
    }

    /**
     * 创建一个Bitmap
     * @param resName resource.json中配置的name
     * @returns {egret.Bitmap}
     */
    public createBitmap(resName: string): egret.Bitmap {
        var result: egret.Bitmap = new egret.Bitmap();
        var texture: egret.Texture = RES.getRes(resName);
        result.texture = texture;
        result.name = resName;
        return result;
    }

    /**
     * 根据不同的屏幕尺寸来设置容器的高度和缩放
     */
    public setBoxLayout(beginNode: egret.DisplayObject, targetNode: egret.DisplayObject, endNode: egret.DisplayObject, gap: number): void {
        var userH: number = endNode.y - (beginNode.y + beginNode.height);
        if (userH > 0) {
            targetNode.scaleY
        }
    }

    /**
     * 从父级移除child
     * @param child
     */
    public removeFromParent(child: egret.DisplayObject) {
        if (!child) return;
        if (child.parent) {
            child.parent.removeChild(child);
        }
        child = null;
    }

    /**
     * 移除所有子对象并回收
     * @param container
     */
    public removeAllChildren(container: any): void {
        if (!container) return;
        if (container && container.numChildren) {
            while (container.numChildren) {
                var node: any = container.getChildAt(0);
                if (node) {
                    if (node.parent) {
                        node.parent.removeChild(node)
                    }
                    node = null;
                }
            }
        }
    }

    public traceAllChildren(container: egret.DisplayObjectContainer): void {
        if (!container) return;
        for (let i: number = 0; i < container.numChildren; i++) {
            let child: egret.DisplayObject = container.getChildAt(i);
            Log.trace("traceAllChildren : item{0} : {1}", i, egret.getQualifiedClassName(child));
        }
    }

    /**
     *
     * @param {egret.TextField} textFile
     * @param {string} str
     *  "haa<font size='60' color='0x2bff00' i='true' b='false'>aaaa</font>aaaaaa<i>aaaa</i>aaaaaaaa"
     */
    public setText(textFile: egret.TextField, str: string = ""): void {
        if (!textFile) return;
        var styleParser = new egret.HtmlTextParser();
        textFile.textFlow = styleParser.parser(str)
    }


    public traceDisplayObjectWhyNotDisplay(display: egret.DisplayObject): void {
        if (display.parent != null) {
            if (this.ifIsDisplay(display) == false) {
                Log.trace("显示出问题了");
            }
            this.traceDisplayObjectWhyNotDisplay(display.parent);
            Log.trace(egret.getQualifiedClassName(display) + ", parent" + egret.getQualifiedClassName(display.parent));
        }
    }

    public resetDisplay(display: egret.DisplayObject): void {
        if (display == null) return;
        display.x = 0;
        display.y = 0;
        display.scaleX = 1;
        display.scaleX = 1;
    }

    public ifIsDisplay(display: egret.DisplayObject): boolean {
        if (!display.visible) return false;
        if (display.alpha == 0) return false;
        if (display.width == 0) return false;
        if (display.height == 0) return false;
        if (display.parent == null) return false;
        return true;
    }

    public SortDisplayBy_Y(list: Array<egret.DisplayObject>, container: egret.DisplayObjectContainer): void {
        list.sort((a: egret.DisplayObject, b: egret.DisplayObject) => {
            let result: egret.DisplayObject;
            return b.y - a.y;
        })
        for (let i: number = 0; i < list.length; i++) {
            container.addChildAt(list[i], 0);
        }
    }
    /*
     *width == 0 && height == 0 will use parent width and height
     *width == -1 && height == -1 will use stage width and height
    */
    public layoutDisplayWithInnerRect(com: egret.DisplayObject, innerRect: InnerRectangle, width: number = 0, height: number = 0): void {
        if (innerRect == null) return;
        if (width == 0 && height == 0) {
            width = com.parent.width;
            height = com.parent.height;
        } else if (width == -1 && height == -1) {
            width = App.StageUtils.getWidth();
            height = App.StageUtils.getHeight();
        }
        var rect: egret.Rectangle = innerRect.getInnerRect(width, height);
        com.x = rect.x;
        com.y = rect.y;
        com.width = rect.width;
        com.height = rect.height;
    }

    public addAsyncBimapToContainer(path: string, container: egret.DisplayObjectContainer, callBack: Function = null) {
        RES.getResByUrl(path, () => {
            let bitmapData = RES.getRes(path);
            let bitmap: egret.Bitmap = new egret.Bitmap(bitmapData);
            container.addChild(bitmap);
            if (callBack) callBack();
        }, this, RES.ResourceItem.TYPE_IMAGE);
    }

    public addAsyncBitmapToImage(path: string, img: eui.Image) {
        RES.getResByUrl(path, () => {
            img.source = RES.getRes(path);
        }, this, RES.ResourceItem.TYPE_IMAGE);
    }

    /**
    * 设置滤镜变灰
    */
    public setFilters(component: egret.DisplayObjectContainer): void {
        if (component) {
            //颜色矩阵数组
            var colorMatrix = [
                0.3, 0.6, 0, 0, 0,
                0.3, 0.6, 0, 0, 0,
                0.3, 0.6, 0, 0, 0,
                0, 0, 0, 1, 0
            ];
            var colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
            component.filters = [colorFlilter];
        }
    }
}
