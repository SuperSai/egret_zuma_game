var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/** 地图编辑 */
var MapEditor = (function () {
    function MapEditor(lineMinWidth) {
        this.lineMinWidth = lineMinWidth;
        this.init();
    }
    /**
     * 初始数据
     */
    MapEditor.prototype.init = function () {
        this._mapList = [];
    };
    /**
     * 根据输入的坐标创建地图
     * @param	posX	x坐标
     * @param	posY	y坐标
     */
    MapEditor.prototype.createMapByPos = function (posX, posY) {
        if (!this._mapList)
            return;
        //存入第一个点
        if (this._mapList.length == 0)
            this._mapList.push([posX, posY, 0]);
        var prevDataAry = this._mapList[this._mapList.length - 1];
        var prevX = prevDataAry[0];
        var prevY = prevDataAry[1];
        var dx = posX - prevX;
        var dy = posY - prevY;
        var dis = App.MathUtils.getDistance(prevX, prevY, posX, posY);
        if (dis >= this.lineMinWidth) {
            var dataAry;
            var x;
            var y;
            //求出线段的角度
            var angle = Math.atan2(dy, dx);
            //分割当前线段宽度
            var linePonumberNum = Math.floor(dis / this.lineMinWidth);
            for (var i = 0; i < linePonumberNum; i += 1) {
                //以最小线段距离和角度求出，最小线段所在的坐标位置
                x = Math.round(prevX + this.lineMinWidth * Math.cos(angle));
                y = Math.round(prevY + this.lineMinWidth * Math.sin(angle));
                //将上一个位置赋值给最小线段所在的坐标位置并保存进列表
                prevX = x;
                prevY = y;
                dataAry = [x, y, 0];
                //更改上一次数据列表中的角度
                prevDataAry[2] = Math.floor(App.MathUtils.rds2dgs(angle));
                prevDataAry = dataAry;
                this._mapList.push(dataAry);
            }
        }
    };
    Object.defineProperty(MapEditor.prototype, "mapList", {
        /**
         * 地图列表
         */
        get: function () { return this._mapList; },
        enumerable: true,
        configurable: true
    });
    /**
     * 地图数据以字符串形式
     * @return		字符串形式
     */
    MapEditor.prototype.mapToString = function () {
        if (!this._mapList)
            return "";
        var ary;
        var length = this._mapList.length;
        var str = "";
        for (var i = 0; i < length; i += 1) {
            ary = this._mapList[i];
            str += ary[0] + "," + ary[1] + "# "; //ary[0] + "," + ary[1] + "," + ary[2] + "# ";
        }
        return str;
    };
    return MapEditor;
}());
__reflect(MapEditor.prototype, "MapEditor");
//# sourceMappingURL=MapEditor.js.map