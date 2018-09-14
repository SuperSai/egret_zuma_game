var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var LockDirectionTypes = (function () {
    function LockDirectionTypes() {
    }
    /**
     * para1: 左边间距
     * para2: 右边间距
     * para3: 高度
     * para4: 底部间距
     */
    LockDirectionTypes.LOCK_B = 4;
    /**
     * para1: 左边间距
     * para2: 宽度
     * para3: 顶部间距
     * para4: 底部间距
     */
    LockDirectionTypes.LOCK_L = 2;
    /**
     * para1: 宽度
     * para2: 右边间距
     * para3: 顶部间距
     * para4: 底部间距
     */
    LockDirectionTypes.LOCK_R = 3;
    /**
     * para1: 左边间距
     * para2: 右边间距
     * para3: 顶部间距
     * para4: 高度
     */
    LockDirectionTypes.LOCK_T = 1;
    /**
     * para1: 左边间距
     * para2: 右边间距
     * para3: 顶部间距
     * para4: 底部间距
     */
    LockDirectionTypes.UNLOCK = 0;
    /**
     * para1: 宽度
     * para2: 高度
     * para3: 顶部间距
     * para4: 居中后的偏移量
     */
    LockDirectionTypes.NO_SCALE_T = 9;
    /**
     * para1: 宽度
     * para2: 高度
     * para3: 居中后的偏移量
     * para4: 底部间距
     */
    LockDirectionTypes.NO_SCALE_B = 10;
    /**
     * para1: 左边间距
     * para2: 居中后的偏移量
     * para3: 宽度
     * para4: 高度
     */
    LockDirectionTypes.NO_SCALE_L = 11;
    /**
     * para1: 居中后的偏移量
     * para2: 右边间距
     * para3: 宽度
     * para4: 高度
     */
    LockDirectionTypes.NO_SCALE_R = 12;
    /**
     * para1: 左边间距
     * para2: 宽度
     * para3: 顶部间距
     * para4: 高度
     */
    LockDirectionTypes.NO_SCALE_TL = 13;
    /**
     * para1: 宽度
     * para2: 右边间距
     * para3: 顶部间距
     * para4: 高度
     */
    LockDirectionTypes.NO_SCALE_TR = 14;
    /**
     * para1: 左边间距
     * para2: 宽度
     * para3: 高度
     * para4: 底部间距
     */
    LockDirectionTypes.NO_SCALE_BL = 15;
    /**
     * para1: 宽度
     * para2: 右边间距
     * para3: 高度
     * para4: 底部间距
     */
    LockDirectionTypes.NO_SCALE_BR = 16;
    /**
     * para1: 居中后的X轴偏移量
     * para2: 宽度
     * para3: 居中后的Y轴偏移量
     * para4: 高度
     */
    LockDirectionTypes.NO_SCALE_C = 17;
    /**
     * para1: 向外扩展的左边间距
     * para2: 向外扩展的右边间距
     * para3: 向外扩展的顶部间距
     * para4: 向外扩展的底部间距
     */
    LockDirectionTypes.UNLOCK_OUTSIDE = -1;
    //		下面的这几个type给OuterRectPos用		
    /**
     * para1: x
     * para2: y
     * para3: 右边间距
     * para4: 底部间距
     */
    LockDirectionTypes.LOCK_TL = 5;
    LockDirectionTypes.LOCK_TR = 6;
    LockDirectionTypes.LOCK_OUTER_DOWN = 18;
    return LockDirectionTypes;
}());
__reflect(LockDirectionTypes.prototype, "LockDirectionTypes");
//# sourceMappingURL=LockDirectionTypes.js.map