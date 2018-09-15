var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var UI;
(function (UI) {
    var BtnEffectComponent = (function () {
        function BtnEffectComponent(view, btnArr) {
            this._view = null;
            this._btnArr = [];
            var self = this;
            self._view = view;
            self._btnArr = btnArr;
            self.initBtnEffect();
        }
        /** 初始化按钮特效 */
        BtnEffectComponent.prototype.initBtnEffect = function () {
            var self = this;
            if (self._btnArr && self._btnArr.length) {
                var len = self._btnArr.length;
                for (var i = 0; i < len; i++) {
                    self._view[self._btnArr[i]].addEventListener(egret.TouchEvent.TOUCH_BEGIN, self.onBtnBegin, self);
                    self._view[self._btnArr[i]].anchorOffsetY = self._view[self._btnArr[i]].height / 2;
                    self._view[self._btnArr[i]].anchorOffsetX = self._view[self._btnArr[i]].width / 2;
                    self._view[self._btnArr[i]].x = self._view[self._btnArr[i]].x + self._view[self._btnArr[i]].width / 2;
                    self._view[self._btnArr[i]].y = self._view[self._btnArr[i]].y + self._view[self._btnArr[i]].height / 2;
                }
            }
        };
        /** 按钮特效Begin事件 */
        BtnEffectComponent.prototype.onBtnBegin = function (evt) {
            var self = this;
            var target = evt.target;
            if (target) {
                self._curBtn = target;
            }
            var name = target.name;
            if (name) {
                var btnType = Number(name.split("_")[1]);
                var downLabelColor = Number("0x" + name.split("_")[3]);
            }
            var soundType = name.split("#")[1];
            if (soundType) {
                if (soundType == "1") {
                    // App.SoundManager.playEffect("");
                }
                else if (soundType == "2") {
                    // App.SoundManager.playEffect("");
                }
                else if (soundType === "3") {
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
                }
                else if (btnType == 2) {
                    if (target.numChildren) {
                        var down = target.getChildAt(0);
                        if (down) {
                            down.visible = true;
                        }
                        var up = target.getChildAt(1);
                        if (up) {
                            up.visible = false;
                        }
                        var label = target.getChildAt(2);
                        if (downLabelColor) {
                            if (label) {
                                label.textColor = downLabelColor;
                            }
                        }
                    }
                }
                else if (btnType == 3) {
                    target.scaleY = target.scaleY - 0.1;
                    target.scaleX = target.scaleX - 0.1;
                    if (target.numChildren) {
                        var down = target.getChildAt(0);
                        if (down) {
                            down.visible = true;
                        }
                        var up = target.getChildAt(1);
                        if (up) {
                            up.visible = false;
                        }
                        var label = target.getChildAt(2);
                        if (downLabelColor) {
                            if (label) {
                                label.textColor = downLabelColor;
                            }
                        }
                    }
                }
                else if (btnType == 4) {
                    var down = target.getChildAt(0);
                    if (down) {
                        down.visible = true;
                    }
                    var up = target.getChildAt(1);
                    if (up) {
                        up.visible = false;
                    }
                }
            }
        };
        BtnEffectComponent.prototype.onTouchCancle = function (event) {
            var self = this;
            var target = self._curBtn;
            if (!target)
                return;
            var stage = event.$currentTarget;
            var upLabelColor = Number("0x" + target.name.split("_")[2]);
            stage.removeEventListener(egret.TouchEvent.TOUCH_CANCEL, self.onTouchCancle, self);
            stage.removeEventListener(egret.TouchEvent.TOUCH_END, self.onTouchEnd, self);
            if (self._curType == 1) {
                target.scaleY = target.scaleY + 0.1;
                target.scaleX = target.scaleX + 0.1;
            }
            else if (self._curType == 2) {
                if (target.numChildren) {
                    var down = target.getChildAt(0);
                    if (down) {
                        down.visible = false;
                    }
                    var up = target.getChildAt(1);
                    if (up) {
                        up.visible = true;
                    }
                    var label = target.getChildAt(2);
                    if (upLabelColor) {
                        if (label) {
                            label.textColor = upLabelColor;
                        }
                    }
                }
            }
            else if (self._curType == 3) {
                target.scaleY = target.scaleY + 0.1;
                target.scaleX = target.scaleX + 0.1;
                if (target.numChildren) {
                    var down = target.getChildAt(0);
                    if (down) {
                        down.visible = false;
                    }
                    var up = target.getChildAt(1);
                    if (up) {
                        up.visible = true;
                    }
                    var label = target.getChildAt(2);
                    if (upLabelColor) {
                        if (label) {
                            label.textColor = upLabelColor;
                        }
                    }
                }
            }
            else if (self._curType == 4) {
                var down = target.getChildAt(0);
                if (down) {
                    down.visible = false;
                }
                var up = target.getChildAt(1);
                if (up) {
                    up.visible = true;
                }
            }
        };
        BtnEffectComponent.prototype.onTouchEnd = function (event) {
            var self = this;
            var target = self._curBtn;
            if (!target)
                return;
            var stage = event.$currentTarget;
            var upLabelColor = Number("0x" + target.name.split("_")[2]);
            stage.removeEventListener(egret.TouchEvent.TOUCH_CANCEL, self.onTouchCancle, self);
            stage.removeEventListener(egret.TouchEvent.TOUCH_END, self.onTouchEnd, self);
            if (self._curType == 1) {
                target.scaleY = target.scaleY + 0.1;
                target.scaleX = target.scaleX + 0.1;
            }
            else if (self._curType == 2) {
                if (target.numChildren) {
                    var down = target.getChildAt(0);
                    if (down) {
                        down.visible = false;
                    }
                    var up = target.getChildAt(1);
                    if (up) {
                        up.visible = true;
                    }
                    var label = target.getChildAt(2);
                    if (upLabelColor) {
                        if (label) {
                            label.textColor = upLabelColor;
                        }
                    }
                }
            }
            else if (self._curType == 3) {
                target.scaleY = target.scaleY + 0.1;
                target.scaleX = target.scaleX + 0.1;
                if (target.numChildren) {
                    var down = target.getChildAt(0);
                    if (down) {
                        down.visible = false;
                    }
                    var up = target.getChildAt(1);
                    if (up) {
                        up.visible = true;
                    }
                    var label = target.getChildAt(2);
                    if (upLabelColor) {
                        if (label) {
                            label.textColor = upLabelColor;
                        }
                    }
                }
            }
            else if (self._curType == 4) {
                var down = target.getChildAt(0);
                if (down) {
                    down.visible = false;
                }
                var up = target.getChildAt(1);
                if (up) {
                    up.visible = true;
                }
            }
        };
        BtnEffectComponent.prototype.dispose = function () {
            var self = this;
            if (self._btnArr && self._btnArr.length) {
                var len = self._btnArr.length;
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
        };
        return BtnEffectComponent;
    }());
    UI.BtnEffectComponent = BtnEffectComponent;
    __reflect(BtnEffectComponent.prototype, "UI.BtnEffectComponent");
})(UI || (UI = {}));
//# sourceMappingURL=BtnEffectComponent.js.map