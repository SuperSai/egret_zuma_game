var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var InnerRectangle = (function () {
    function InnerRectangle(para1, para2, para3, para4, lockDirection) {
        if (lockDirection === void 0) { lockDirection = 0; }
        this.para1 = para1;
        this.para2 = para2;
        this.para3 = para3;
        this.para4 = para4;
        this.lockDirection = lockDirection;
    }
    /**
     *
     * 判断两个InnerRectangle是否相等
     *
     * @param innerRect 目标对象
     * @return 是否相等
     *
     *
     */
    InnerRectangle.prototype.equals = function (innerRect) {
        if (innerRect == null)
            return false;
        return this.para4 == innerRect.para4 &&
            this.para1 == innerRect.para1 &&
            this.lockDirection == innerRect.lockDirection &&
            this.para2 == innerRect.para2 &&
            this.para3 == innerRect.para3;
    };
    /**
     *
     * @param outerWidth 相对的宽度
     * @param outerHeight 相对的高度
     * @return 显示区域的矩形
     *
     */
    InnerRectangle.prototype.getInnerRect = function (outerWidth, outerHeight) {
        this._outerWidth = outerWidth;
        this._outerHeight = outerHeight;
        return this.calculateCurrent();
    };
    InnerRectangle.prototype.calculateCurrent = function () {
        var resultRect = new egret.Rectangle();
        if (this.lockDirection == LockDirectionTypes.UNLOCK) {
            resultRect.x = this.para1;
            resultRect.y = this.para3;
            resultRect.width = this._outerWidth - this.para1 - this.para2;
            resultRect.height = this._outerHeight - this.para3 - this.para4;
        }
        else if (this.lockDirection == LockDirectionTypes.LOCK_T) {
            resultRect.x = this.para1;
            resultRect.y = this.para3;
            resultRect.width = this._outerWidth - this.para1 - this.para2;
            resultRect.height = this.para4;
        }
        else if (this.lockDirection == LockDirectionTypes.LOCK_L) {
            resultRect.x = this.para1;
            resultRect.y = this.para3;
            resultRect.width = this.para2;
            resultRect.height = this._outerHeight - this.para3 - this.para4;
        }
        else if (this.lockDirection == LockDirectionTypes.LOCK_R) {
            resultRect.x = this._outerWidth - this.para1 - this.para2;
            resultRect.y = this.para3;
            resultRect.width = this.para1;
            resultRect.height = this._outerHeight - this.para3 - this.para4;
        }
        else if (this.lockDirection == LockDirectionTypes.LOCK_B) {
            resultRect.x = this.para1;
            resultRect.y = this._outerHeight - this.para3 - this.para4;
            resultRect.width = this._outerWidth - this.para1 - this.para2;
            resultRect.height = this.para3;
        }
        else if (this.lockDirection == LockDirectionTypes.NO_SCALE_T) {
            resultRect.x = (this._outerWidth - this.para1) / 2 + this.para4;
            resultRect.y = this.para3;
            resultRect.width = this.para1;
            resultRect.height = this.para2;
        }
        else if (this.lockDirection == LockDirectionTypes.NO_SCALE_B) {
            resultRect.x = (this._outerWidth - this.para1) / 2 + this.para3;
            resultRect.y = this._outerHeight - this.para4 - this.para2;
            resultRect.width = this.para1;
            resultRect.height = this.para2;
        }
        else if (this.lockDirection == LockDirectionTypes.NO_SCALE_L) {
            resultRect.x = this.para1;
            resultRect.y = (this._outerHeight - this.para4) / 2 + this.para2;
            resultRect.width = this.para3;
            resultRect.height = this.para4;
        }
        else if (this.lockDirection == LockDirectionTypes.NO_SCALE_R) {
            resultRect.x = this._outerWidth - this.para2 - this.para3;
            resultRect.y = (this._outerHeight - this.para3) / 2 + this.para1;
            resultRect.width = this.para3;
            resultRect.height = this.para4;
        }
        else if (this.lockDirection == LockDirectionTypes.NO_SCALE_TL) {
            resultRect.x = this.para1;
            resultRect.y = this.para3;
            resultRect.width = this.para2;
            resultRect.height = this.para4;
        }
        else if (this.lockDirection == LockDirectionTypes.NO_SCALE_TR) {
            resultRect.x = this._outerWidth - this.para1 - this.para2;
            resultRect.y = this.para3;
            resultRect.width = this.para1;
            resultRect.height = this.para4;
        }
        else if (this.lockDirection == LockDirectionTypes.NO_SCALE_BL) {
            resultRect.x = this.para1;
            resultRect.y = this._outerHeight - this.para4 - this.para3;
            resultRect.width = this.para2;
            resultRect.height = this.para3;
        }
        else if (this.lockDirection == LockDirectionTypes.NO_SCALE_BR) {
            resultRect.x = this._outerWidth - this.para1 - this.para2;
            resultRect.y = this._outerHeight - this.para4 - this.para3;
            resultRect.width = this.para1;
            resultRect.height = this.para3;
        }
        else if (this.lockDirection == LockDirectionTypes.UNLOCK_OUTSIDE) {
            resultRect.x = -this.para1;
            resultRect.y = -this.para3;
            resultRect.width = this._outerWidth + this.para1 + this.para2;
            resultRect.height = this._outerHeight + this.para4 + this.para3;
        }
        else if (this.lockDirection == LockDirectionTypes.NO_SCALE_C) {
            resultRect.x = (this._outerWidth - this.para2) / 2 + this.para1;
            resultRect.y = (this._outerHeight - this.para4) / 2 + this.para3;
            resultRect.width = this.para2;
            resultRect.height = this.para4;
        }
        else if (this.lockDirection == LockDirectionTypes.LOCK_TL) {
            resultRect.x = this.para1;
            resultRect.y = this.para2;
            resultRect.width = this._outerWidth - this.para3;
            resultRect.height = this._outerHeight - this.para4;
        }
        else if (this.lockDirection == LockDirectionTypes.LOCK_OUTER_DOWN) {
            resultRect.x = this.para1;
            resultRect.y = this.para2;
            resultRect.width = this._outerWidth - this.para3;
            resultRect.height = this.para4;
        }
        return resultRect;
    };
    return InnerRectangle;
}());
__reflect(InnerRectangle.prototype, "InnerRectangle");
//# sourceMappingURL=InnerRectangle.js.map