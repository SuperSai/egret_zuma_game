module UI {
	export class BtnEffectComponent {
		private _view: egret.DisplayObject = null;
		private _btnArr: string[] = [];
		private _curBtn: any;
		private _curType: number//当前点击按钮的特效1，放大缩小，2，按下高亮 3，放大缩小并高亮

		constructor(view: egret.DisplayObject, btnArr: string[]) {
			let self = this;
			self._view = view;
			self._btnArr = btnArr;
			self.initBtnEffect();
		}
		/** 初始化按钮特效 */
		private initBtnEffect(): void {
			let self = this;
			if (self._btnArr && self._btnArr.length) {
				let len: number = self._btnArr.length;
				for (var i = 0; i < len; i++) {
					self._view[self._btnArr[i]].addEventListener(egret.TouchEvent.TOUCH_BEGIN, self.onBtnBegin, self);
					self._view[self._btnArr[i]].anchorOffsetY = self._view[self._btnArr[i]].height / 2;
					self._view[self._btnArr[i]].anchorOffsetX = self._view[self._btnArr[i]].width / 2;
					self._view[self._btnArr[i]].x = self._view[self._btnArr[i]].x + self._view[self._btnArr[i]].width / 2;
					self._view[self._btnArr[i]].y = self._view[self._btnArr[i]].y + self._view[self._btnArr[i]].height / 2;
				}
			}
		}
		/** 按钮特效Begin事件 */
		private onBtnBegin(evt: egret.TouchEvent): void {
			let self = this;
			let target = evt.target;
			if (target) {
				self._curBtn = target;
			}
			let name: string = target.name;
			if (name) {
				var btnType: number = Number(name.split("_")[1]);
				var downLabelColor: number = Number("0x" + name.split("_")[3]);
			}
			let soundType = name.split("#")[1];
			if (soundType) {
				if (soundType == "1") {
					// App.SoundManager.playEffect("");
				} else if (soundType == "2") {
					// App.SoundManager.playEffect("");
				} else if (soundType === "3") {
					// App.SoundManager.playEffect("");
				}
				if (!btnType) {
					btnType = 1;
				}
				self._curType = btnType;
				target.$stage.addEventListener(egret.TouchEvent.TOUCH_CANCEL, self.onTouchCancle, self);
				target.$stage.addEventListener(egret.TouchEvent.TOUCH_END, self.onTouchEnd, self);
				evt.updateAfterEvent();
				if (btnType == 1) {
					target.scaleY = target.scaleY - 0.1;
					target.scaleX = target.scaleX - 0.1;
				} else if (btnType == 2) {
					if (target.numChildren) {
						let down = target.getChildAt(0);
						if (down) {
							down.visible = true;
						}
						let up = target.getChildAt(1);
						if (up) {
							up.visible = false;
						}
						let label = target.getChildAt(2);
						if (downLabelColor) {
							if (label) {
								label.textColor = downLabelColor;
							}
						}
					}
				} else if (btnType == 3) {
					target.scaleY = target.scaleY - 0.1;
					target.scaleX = target.scaleX - 0.1;
					if (target.numChildren) {
						let down = target.getChildAt(0);
						if (down) {
							down.visible = true;
						}
						let up = target.getChildAt(1);
						if (up) {
							up.visible = false;
						}

						let label = target.getChildAt(2);
						if (downLabelColor) {
							if (label) {
								label.textColor = downLabelColor;
							}
						}
					}
				} else if (btnType == 4) {
					let down = target.getChildAt(0);
					if (down) {
						down.visible = true;
					}
					let up = target.getChildAt(1);
					if (up) {
						up.visible = false;
					}
				}
			}
		}

		protected onTouchCancle(event: egret.TouchEvent): void {
			let self = this;
			let target = self._curBtn;
			if (!target) return;
			let stage = event.$currentTarget;
			var upLabelColor: number = Number("0x" + target.name.split("_")[2]);
			stage.removeEventListener(egret.TouchEvent.TOUCH_CANCEL, self.onTouchCancle, self);
			stage.removeEventListener(egret.TouchEvent.TOUCH_END, self.onTouchEnd, self);
			if (self._curType == 1) {
				target.scaleY = target.scaleY + 0.1;
				target.scaleX = target.scaleX + 0.1;
			} else if (self._curType == 2) {
				if (target.numChildren) {
					let down = target.getChildAt(0);
					if (down) {
						down.visible = false;
					}
					let up = target.getChildAt(1);
					if (up) {
						up.visible = true;
					}

					let label = target.getChildAt(2);
					if (upLabelColor) {
						if (label) {
							label.textColor = upLabelColor;
						}
					}
				}
			} else if (self._curType == 3) {
				target.scaleY = target.scaleY + 0.1;
				target.scaleX = target.scaleX + 0.1;

				if (target.numChildren) {
					let down = target.getChildAt(0);
					if (down) {
						down.visible = false;
					}
					let up = target.getChildAt(1);
					if (up) {
						up.visible = true;
					}

					let label = target.getChildAt(2);
					if (upLabelColor) {
						if (label) {
							label.textColor = upLabelColor;
						}
					}
				}
			} else if (self._curType == 4) {
				let down = target.getChildAt(0);
				if (down) {
					down.visible = false;
				}
				let up = target.getChildAt(1);
				if (up) {
					up.visible = true;
				}
			}
		}

		private onTouchEnd(event: egret.TouchEvent): void {
			let self = this;
			let target = self._curBtn;
			if (!target) return;
			let stage = event.$currentTarget;
			var upLabelColor: number = Number("0x" + target.name.split("_")[2]);
			stage.removeEventListener(egret.TouchEvent.TOUCH_CANCEL, self.onTouchCancle, self);
			stage.removeEventListener(egret.TouchEvent.TOUCH_END, self.onTouchEnd, self);
			if (self._curType == 1) {
				target.scaleY = target.scaleY + 0.1;
				target.scaleX = target.scaleX + 0.1;
			} else if (self._curType == 2) {
				if (target.numChildren) {
					let down = target.getChildAt(0);
					if (down) {
						down.visible = false;
					}
					let up = target.getChildAt(1);
					if (up) {
						up.visible = true;
					}
					let label = target.getChildAt(2);
					if (upLabelColor) {
						if (label) {
							label.textColor = upLabelColor;
						}
					}
				}
			} else if (self._curType == 3) {
				target.scaleY = target.scaleY + 0.1;
				target.scaleX = target.scaleX + 0.1;

				if (target.numChildren) {
					let down = target.getChildAt(0);
					if (down) {
						down.visible = false;
					}
					let up = target.getChildAt(1);
					if (up) {
						up.visible = true;
					}

					let label = target.getChildAt(2);
					if (upLabelColor) {
						if (label) {
							label.textColor = upLabelColor;
						}
					}
				}
			} else if (self._curType == 4) {
				let down = target.getChildAt(0);
				if (down) {
					down.visible = false;
				}
				let up = target.getChildAt(1);
				if (up) {
					up.visible = true;
				}
			}
		}
		public dispose() {
			let self = this;
			if (self._btnArr && self._btnArr.length) {
				let len: number = self._btnArr.length;
				for (var i = 0; i < len; i++) {
					self._view[self._btnArr[i]].removeEventListener(egret.TouchEvent.TOUCH_BEGIN, self.onBtnBegin, self);
					self._view[self._btnArr[i]].anchorOffsetY = self._view[self._btnArr[i]].height / 2;
					self._view[self._btnArr[i]].anchorOffsetX = self._view[self._btnArr[i]].width / 2;
					self._view[self._btnArr[i]].x = self._view[self._btnArr[i]].x + self._view[self._btnArr[i]].width / 2;
					self._view[self._btnArr[i]].y = self._view[self._btnArr[i]].y + self._view[self._btnArr[i]].height / 2;
				}
			}
			self._btnArr = [];
			self._curBtn = null;
		}
	}
}