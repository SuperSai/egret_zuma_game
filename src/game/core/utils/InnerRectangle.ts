class InnerRectangle
{
		
	constructor(para1:number,para2:number,para3:number,para4:number,lockDirection:number = 0)
	{
		this.para1 = para1;
		this.para2 = para2;
		this.para3 = para3;
		this.para4 = para4;
		this.lockDirection = lockDirection;
	}

	public lockDirection:number;
	public para1:number;
	public para2:number;
	public para3:number;
	public para4:number;
	private _outerHeight:number;
	private _outerWidth:number;
	private _resultRect:egret.Rectangle;
	/**
	 * 
	 * 判断两个InnerRectangle是否相等
	 * 
	 * @param innerRect 目标对象
	 * @return 是否相等
	 * 
	 * 
	 */		
	public equals(innerRect:InnerRectangle):boolean
	{
		if(innerRect == null)return false;
		return this.para4 == innerRect.para4 &&
			this.para1 == innerRect.para1 &&
			this.lockDirection == innerRect.lockDirection &&
			this.para2 == innerRect.para2 &&
			this.para3 == innerRect.para3
	}
	/**
	 * 
	 * @param outerWidth 相对的宽度
	 * @param outerHeight 相对的高度
	 * @return 显示区域的矩形
	 * 
	 */		
	public getInnerRect(outerWidth:number,outerHeight:number):egret.Rectangle
	{
		this._outerWidth = outerWidth;
		this._outerHeight = outerHeight;
		return this.calculateCurrent();
	}
	
	private calculateCurrent():egret.Rectangle
	{
		var resultRect:egret.Rectangle = new egret.Rectangle();
		if(this.lockDirection == LockDirectionTypes.UNLOCK)
		{
			resultRect.x = this.para1;
			resultRect.y = this.para3;
			resultRect.width = this._outerWidth - this.para1 - this.para2;
			resultRect.height = this._outerHeight - this.para3 - this.para4;
		}else if(this.lockDirection == LockDirectionTypes.LOCK_T)
		{
			resultRect.x = this.para1;
			resultRect.y = this.para3;
			resultRect.width = this._outerWidth - this.para1 - this.para2;
			resultRect.height = this.para4;
		}else if(this.lockDirection == LockDirectionTypes.LOCK_L)
		{
			resultRect.x = this.para1;
			resultRect.y = this.para3;
			resultRect.width =this.para2;
			resultRect.height = this._outerHeight - this.para3 - this.para4;
		}else if(this.lockDirection == LockDirectionTypes.LOCK_R)
		{
			resultRect.x =this._outerWidth -  this.para1 - this.para2;
			resultRect.y = this.para3;
			resultRect.width = this.para1;
			resultRect.height = this._outerHeight - this.para3 - this.para4;
		}else if(this.lockDirection == LockDirectionTypes.LOCK_B)
		{
			resultRect.x = this.para1;
			resultRect.y = this._outerHeight -  this.para3 - this.para4;
			resultRect.width = this._outerWidth - this.para1 - this.para2;
			resultRect.height = this.para3;
		}else if(this.lockDirection == LockDirectionTypes.NO_SCALE_T)
		{
			resultRect.x = (this._outerWidth - this.para1)/2 +this.para4;
			resultRect.y = this.para3;
			resultRect.width = this.para1;
			resultRect.height = this.para2;
		}else if(this.lockDirection == LockDirectionTypes.NO_SCALE_B)
		{
			resultRect.x = (this._outerWidth - this.para1)/2 +this.para3;
			resultRect.y = this._outerHeight - this.para4 - this.para2;
			resultRect.width = this.para1;
			resultRect.height = this.para2;
		}else if(this.lockDirection == LockDirectionTypes.NO_SCALE_L)
		{
			resultRect.x = this.para1;
			resultRect.y = (this._outerHeight - this.para4)/2+this.para2;
			resultRect.width = this.para3;
			resultRect.height = this.para4;
		}else if(this.lockDirection == LockDirectionTypes.NO_SCALE_R)
		{
			resultRect.x = this._outerWidth - this.para2 - this.para3;
			resultRect.y = (this._outerHeight - this.para3)/2 + this.para1;
			resultRect.width = this.para3;
			resultRect.height = this.para4;
		}else if(this.lockDirection == LockDirectionTypes.NO_SCALE_TL)
		{
			resultRect.x = this.para1;
			resultRect.y = this.para3;
			resultRect.width = this.para2;
			resultRect.height = this.para4;
		}else if(this.lockDirection == LockDirectionTypes.NO_SCALE_TR)
		{
			resultRect.x = this._outerWidth - this.para1 - this.para2;
			resultRect.y = this.para3;
			resultRect.width = this.para1;
			resultRect.height = this.para4;
		}else if(this.lockDirection == LockDirectionTypes.NO_SCALE_BL)
		{
			resultRect.x = this.para1;
			resultRect.y = this._outerHeight - this.para4 - this.para3;
			resultRect.width = this.para2;
			resultRect.height = this.para3;
		}else if(this.lockDirection == LockDirectionTypes.NO_SCALE_BR)
		{
			resultRect.x = this._outerWidth - this.para1 - this.para2;
			resultRect.y = this._outerHeight - this.para4 - this.para3;
			resultRect.width = this.para1;
			resultRect.height = this.para3;
		}else if(this.lockDirection == LockDirectionTypes.UNLOCK_OUTSIDE)
		{
			resultRect.x = -this.para1;
			resultRect.y = -this.para3;
			resultRect.width = this._outerWidth + this.para1 + this.para2;
			resultRect.height = this._outerHeight + this.para4 + this.para3;
		}else if(this.lockDirection == LockDirectionTypes.NO_SCALE_C)
		{
			resultRect.x = (this._outerWidth - this.para2)/2+this.para1;
			resultRect.y = (this._outerHeight - this.para4)/2+this.para3;
			resultRect.width = this.para2;
			resultRect.height = this.para4;
		}else if(this.lockDirection == LockDirectionTypes.LOCK_TL)
		{
			resultRect.x = this.para1;
			resultRect.y = this.para2;
			resultRect.width = this._outerWidth - this.para3;
			resultRect.height = this._outerHeight - this.para4;
		}else if(this.lockDirection == LockDirectionTypes.LOCK_OUTER_DOWN)
		{
			resultRect.x = this.para1;
			resultRect.y = this.para2;
			resultRect.width = this._outerWidth - this.para3;
			resultRect.height = this.para4;
		}
		
		return resultRect;
	}
}
