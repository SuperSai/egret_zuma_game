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
/**
 * 显示对象工具类
 */
var DisplayUtils = (function (_super) {
    __extends(DisplayUtils, _super);
    /**
     * 构造函数
     */
    function DisplayUtils() {
        var _this = _super.call(this) || this;
        _this.stableFramerate = 30;
        _this.red = 0xFC0505;
        _this.white = 0xffffff;
        _this.black = 0x000000;
        _this.green = 0x69FF55;
        return _this;
    }
    DisplayUtils.prototype.getChildIndex = function (child) {
        if (child == null || child.parent == null)
            return -1;
        return child.parent.getChildIndex(child);
    };
    DisplayUtils.prototype.textDotAnimation = function (label) {
        var mainText = label.text;
        var tw = egret.Tween.get(label, { loop: true });
        tw.to({}, 500).call(function () { label.text = mainText + "."; });
        tw.to({}, 500).call(function () { label.text = mainText + ".."; });
        tw.to({}, 500).call(function () { label.text = mainText + "..."; });
        tw.to({}, 500).call(function () { label.text = mainText; });
        label.addEventListener(egret.Event.REMOVED_FROM_STAGE, function () {
            egret.Tween.removeTweens(label);
            tw = null;
        }, this);
    };
    DisplayUtils.prototype.getLocalPos = function (container, child, localPos) {
        var global = child.localToGlobal(localPos.x, localPos.y);
        return container.globalToLocal(global.x, global.y);
    };
    DisplayUtils.prototype.safeRemoveChild = function (child) {
        if (child == null)
            return;
        if (child.parent == null)
            return;
        child.parent.removeChild(child);
    };
    DisplayUtils.prototype.scaleToNormalSizeWithContainer = function (display, container) {
        var scale = this.searchContainerScale(display.parent, container);
        display.scaleX = 1 / scale;
        display.scaleY = 1 / scale;
    };
    DisplayUtils.prototype.searchContainerScale = function (container, targetContainer) {
        var result = 1;
        if (container != targetContainer) {
            result = this.searchContainerScale(container.parent, targetContainer) * result;
        }
        return result;
    };
    /**
     * 创建一个Bitmap
     * @param resName resource.json中配置的name
     * @returns {egret.Bitmap}
     */
    DisplayUtils.prototype.createBitmap = function (resName) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(resName);
        result.texture = texture;
        result.name = resName;
        return result;
    };
    /**
     * 根据不同的屏幕尺寸来设置容器的高度和缩放
     */
    DisplayUtils.prototype.setBoxLayout = function (beginNode, targetNode, endNode, gap) {
        var userH = endNode.y - (beginNode.y + beginNode.height);
        if (userH > 0) {
            targetNode.scaleY;
        }
    };
    /**
     * 从父级移除child
     * @param child
     */
    DisplayUtils.prototype.removeFromParent = function (child) {
        if (!child)
            return;
        if (child.parent) {
            child.parent.removeChild(child);
        }
        child = null;
    };
    /**
     * 移除所有子对象并回收
     * @param container
     */
    DisplayUtils.prototype.removeAllChildren = function (container) {
        if (!container)
            return;
        if (container && container.numChildren) {
            while (container.numChildren) {
                var node = container.getChildAt(0);
                if (node) {
                    if (node.parent) {
                        node.parent.removeChild(node);
                    }
                    node = null;
                }
            }
        }
    };
    DisplayUtils.prototype.traceAllChildren = function (container) {
        if (!container)
            return;
        for (var i = 0; i < container.numChildren; i++) {
            var child = container.getChildAt(i);
            // LogManager.logFormat("traceAllChildren : item{0} : {1}",i,egret.getQualifiedClassName(child));
        }
    };
    /**
     *
     * @param {egret.TextField} textFile
     * @param {string} str
     *  "haa<font size='60' color='0x2bff00' i='true' b='false'>aaaa</font>aaaaaa<i>aaaa</i>aaaaaaaa"
     */
    DisplayUtils.prototype.setText = function (textFile, str) {
        if (str === void 0) { str = ""; }
        if (!textFile)
            return;
        var styleParser = new egret.HtmlTextParser();
        textFile.textFlow = styleParser.parser(str);
    };
    DisplayUtils.prototype.traceDisplayObjectWhyNotDisplay = function (display) {
        if (display.parent != null) {
            if (this.ifIsDisplay(display) == false) {
                console.log("显示出问题了");
            }
            this.traceDisplayObjectWhyNotDisplay(display.parent);
            console.log(egret.getQualifiedClassName(display) + ", parent" + egret.getQualifiedClassName(display.parent));
        }
    };
    DisplayUtils.prototype.resetDisplay = function (display) {
        if (display == null)
            return;
        display.x = 0;
        display.y = 0;
        display.scaleX = 1;
        display.scaleX = 1;
    };
    DisplayUtils.prototype.ifIsDisplay = function (display) {
        if (!display.visible)
            return false;
        if (display.alpha == 0)
            return false;
        if (display.width == 0)
            return false;
        if (display.height == 0)
            return false;
        if (display.parent == null)
            return false;
        return true;
    };
    DisplayUtils.prototype.SortDisplayBy_Y = function (list, container) {
        list.sort(function (a, b) {
            var result;
            return b.y - a.y;
        });
        for (var i = 0; i < list.length; i++) {
            container.addChildAt(list[i], 0);
        }
    };
    /*
     *width == 0 && height == 0 will use parent width and height
     *width == -1 && height == -1 will use stage width and height
    */
    DisplayUtils.prototype.layoutDisplayWithInnerRect = function (com, innerRect, width, height) {
        if (width === void 0) { width = 0; }
        if (height === void 0) { height = 0; }
        if (innerRect == null)
            return;
        if (width == 0 && height == 0) {
            width = com.parent.width;
            height = com.parent.height;
        }
        else if (width == -1 && height == -1) {
            width = App.StageUtils.getWidth();
            height = App.StageUtils.getHeight();
        }
        var rect = innerRect.getInnerRect(width, height);
        com.x = rect.x;
        com.y = rect.y;
        com.width = rect.width;
        com.height = rect.height;
    };
    DisplayUtils.prototype.addAsyncBimapToContainer = function (path, container, callBack) {
        if (callBack === void 0) { callBack = null; }
        RES.getResByUrl(path, function () {
            var bitmapData = RES.getRes(path);
            var bitmap = new egret.Bitmap(bitmapData);
            container.addChild(bitmap);
            if (callBack)
                callBack();
        }, this, RES.ResourceItem.TYPE_IMAGE);
    };
    DisplayUtils.prototype.addAsyncBitmapToImage = function (path, img) {
        RES.getResByUrl(path, function () {
            img.source = RES.getRes(path);
        }, this, RES.ResourceItem.TYPE_IMAGE);
    };
    /**
    * 设置滤镜变灰
    */
    DisplayUtils.prototype.setFilters = function (component) {
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
    };
    return DisplayUtils;
}(BaseClass));
__reflect(DisplayUtils.prototype, "DisplayUtils");
//# sourceMappingURL=DisplayUtils.js.map