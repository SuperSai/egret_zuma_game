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
var ZumaCore = (function (_super) {
    __extends(ZumaCore, _super);
    function ZumaCore() {
        var _this = _super.call(this) || this;
        //最大连击数
        _this._maxCobom = 0;
        //当前连击数
        _this._cobom = 0;
        //游戏是否结束
        _this._canShoot = true;
        //开始滚入的小球的个数
        _this._rollInCount = 35;
        //游戏中球的总数
        _this._rollInTotalCount = 100;
        return _this;
    }
    ZumaCore.prototype.init = function (role, levelVO) {
        var self = this;
        self._role = role;
        self._levelVO = levelVO;
        self.initData();
        self.initBall();
    };
    ZumaCore.prototype.initData = function () {
        var self = this;
        self._rollInCount = self._levelVO.rollInCount;
        self._rollInTotalCount = self._levelVO.rollInTotalCount;
    };
    /** 初始化第一个小球，并开始滚入小球 */
    ZumaCore.prototype.initBall = function () {
        var self = this;
        self._rollBalls = [];
        var _ball = self.getBall();
        self._rollBalls.unshift(_ball);
        self.addChild(_ball);
        //将数组的第16个位置设为起点
        _ball.posIndex = 16;
        App.TimerManager.doFrame(0, 0, self.ballRollIn, self);
        // soundMgr.playRollingSound();
    };
    /** 开始滚入小球 */
    ZumaCore.prototype.ballRollIn = function () {
        var self = this;
        if (self._rollBalls.length < this._rollInCount) {
            for (var i = 0; i < self._rollBalls.length; ++i) {
                //所有小球移动4个位置
                self._rollBalls[i].posIndex += self._levelVO.rollSpeed;
            }
            //第一个球距起点16个位置则补充小球进去
            if (self._rollBalls[0].posIndex == 32) {
                var _ball = self.getBall();
                self._rollBalls.unshift(_ball);
                self.addChild(_ball);
                _ball.posIndex = 16;
            }
        }
        else {
            //停止滚入小球
            App.TimerManager.remove(self.ballRollIn, self);
            //初始化ballShooted数组，用来存储发射出来的小球
            self._ballShooted = [];
            self._ballCrushed = [];
            //初始化Timer，开始驱动小球向前滚动
            App.TimerManager.doTimer(50, 0, self.ballRollComplete, self);
            //发射器初始化
            self._role.initBall();
            //停止滚动声音
            // soundMgr.stopRollingSound();
        }
    };
    /** 滚入小球结束后，由该函数驱动小球向前滚动 */
    ZumaCore.prototype.ballRollComplete = function () {
        var self = this;
        //与第一个小球相连的小球都向前滚动一步
        if (self._rollBalls.length != 0) {
            self.pushBallFrom(0, self._levelVO.stableSpeed);
            //如果总球数不为0并且第一个球距第一个点位置相差16则补充小球
            if (self._rollBalls[0].posIndex == 32 && self._rollInTotalCount != 0) {
                var _ball = self.getBall();
                self._rollBalls.unshift(_ball);
                self.addChild(_ball);
                _ball.posIndex = 16;
            }
        }
    };
    /** 获取一个小球 */
    ZumaCore.prototype.getBall = function () {
        var self = this;
        --self._rollInTotalCount;
        return new Ball(App.RandomUtils.randint(0, self._levelVO.colorBallCount));
    };
    /**
     * 推进小球的函数，传入参数推进的起始位置，推进的步数(为正即为向前推进，为负即为向后回退)
     * 在使用回退道具时要传入负参数
     */
    ZumaCore.prototype.pushBallFrom = function (index, step) {
        var self = this;
        var temp = [];
        temp.push(self._rollBalls[index]);
        //算出所有与ballArray中索引为index的小球"相连"的小球
        for (var i = index; i < self._rollBalls.length - 1; ++i) {
            if (self._rollBalls[i + 1].posIndex - self._rollBalls[i].posIndex <= 16) {
                //如小球位置有误差则纠正
                if (self._rollBalls[i + 1].posIndex - self._rollBalls[i].posIndex < 16) {
                    self._rollBalls[i + 1].posIndex = self._rollBalls[i].posIndex + 16;
                }
                temp.push(self._rollBalls[i + 1]);
            }
            else {
                break;
            }
        }
        //然后将其移动指定的步数
        for (var j = 0; j < temp.length; ++j) {
            temp[j].posIndex += step;
        }
        //每次推动小球都需要判断是否结束游戏
        if (self._rollBalls[self._rollBalls.length - 1].posIndex >= BattleConst.MapData.length - 17) {
            self._canShoot = false;
            // soundMgr.playGameOverSound();
            App.TimerManager.remove(self.ballRollComplete, self);
            App.TimerManager.remove(self.cheackPushCollision, self);
            App.TimerManager.remove(self.attract, self);
            self.removeChild(self._rollBalls[self._rollBalls.length - 1]);
            self._rollBalls.splice(self._rollBalls.length - 1, 1);
            App.TimerManager.doFrame(0, 0, self.ballRollOut, self);
        }
    };
    /** 游戏结束，小球进终点后消除 */
    ZumaCore.prototype.ballRollOut = function () {
        var self = this;
        for (var i = self._rollBalls.length - 1; i >= 0; --i) {
            if (self._rollBalls[i].posIndex > BattleConst.MapData.length - 17) {
                this.removeChild(self._rollBalls[i]);
                self._rollBalls.splice(i, 1);
                if (self._rollBalls.length == 0) {
                    App.TimerManager.remove(this.ballRollOut, this);
                    // soundMgr.stopGameOverSound();
                }
            }
            else {
                self._rollBalls[i].posIndex += 8;
            }
        }
    };
    /** 开始射击 */
    ZumaCore.prototype.shootBall = function () {
        var self = this;
        //发射球时的弧度
        var radian = (self._role.rotation + 90) * Math.PI / 180;
        var _ball = self._role.getCurrentBall();
        _ball.x = self._role.x + 60 * Math.cos(radian);
        _ball.y = self._role.y + 60 * Math.sin(radian);
        self.addChild(_ball);
        /*因发射出来的小球可能不只一个球同时存在，所以建立数组来保存
        小球以及相应发射该小球时的角度(经测试最多同时存在3个)*/
        self._ballShooted.push([_ball, radian]);
        //侦听ENTER_FRAME事件，控制小球的运动
        App.TimerManager.doFrame(0, 0, self.onShootBallMove, self);
    };
    ZumaCore.prototype.onShootBallMove = function () {
        var self = this;
        if (self._ballShooted.length != 0) {
            //这个循环对发射出来的每个球都进行检测
            for (var i = 0; i < self._ballShooted.length; ++i) {
                //这里检测是否越界
                if (self._ballShooted[i][0].x > 0 && self._ballShooted[i][0].x < App.StageUtils.getWidth() && self._ballShooted[i][0].y > 0 && self._ballShooted[i][0].y < App.StageUtils.getHeight()) {
                    //检测碰撞
                    var flag = self.cheackCollision(self._ballShooted[i]);
                    if (flag == -1) {
                        self._ballShooted[i][0].x += Math.cos(self._ballShooted[i][1]) * 16;
                        self._ballShooted[i][0].y += Math.sin(self._ballShooted[i][1]) * 16;
                    }
                    else {
                        // soundMgr.CollisionSound.play(100);
                        var _ball = self._ballShooted[i][0];
                        var radians = self._ballShooted[i][1];
                        var dis = Math.sqrt((self._rollBalls[flag].x - _ball.x) * (self._rollBalls[flag].x - _ball.x) + (self._rollBalls[flag].y - _ball.y) * (self._rollBalls[flag].y - _ball.y));
                        //调整下小球的位置使之与碰撞的小球刚好接触
                        self._ballShooted[i][0].x -= (32 - dis) * Math.cos(radians);
                        self._ballShooted[i][0].y -= (32 - dis) * Math.sin(radians);
                        /*碰到了则算出球应该在哪两个小球中挤入进去,采用检测相邻两个放球的位置与要
                        插入的球的距离的方法，哪个距离近则向哪边插入小球，这也是为什么要将起点跟终
                        点设为与实际路径的起点终点相差16个位置的原因，防止+16或者-16之后造成数组的越界
                        */
                        //算出距前一个小球的位置的距离
                        var PrevX = BattleConst.MapData[self._rollBalls[flag].posIndex - 16][0];
                        var PrevY = BattleConst.MapData[self._rollBalls[flag].posIndex - 16][1];
                        var prevDis = Math.sqrt((_ball.x - PrevX) * (_ball.x - PrevX) + (_ball.y - PrevY) * (_ball.y - PrevY));
                        //算出距下一个小球的位置的距离
                        var NextX = BattleConst.MapData[self._rollBalls[flag].posIndex + 16][0];
                        var NextY = BattleConst.MapData[self._rollBalls[flag].posIndex + 16][1];
                        var nextDis = Math.sqrt((_ball.x - NextX) * (_ball.x - NextX) + (_ball.y - NextY) * (_ball.y - NextY));
                        //比较距离远近，从而得出应在被碰撞的球的前一个位置插入还是后一个位置插入
                        var p = prevDis > nextDis ? "next" : "previous";
                        self.insertBall(self._ballShooted[i][0], flag, p);
                        self._ballShooted.splice(i, 1);
                    }
                }
                else {
                    //越界则从显示列表中remove掉,并从ballShooted中移除该小球
                    self.removeChild(self._ballShooted[i][0]);
                    self._ballShooted.splice(i, 1);
                }
            }
        }
        else {
            //ballShooted中没有小球的话就移除侦听器
            App.TimerManager.remove(self.onShootBallMove, self);
        }
    };
    //-----------检测发射出来的小球与球链中球的碰撞，碰撞了返回被碰撞球的索引，否则返回-1
    ZumaCore.prototype.cheackCollision = function (arr) {
        var self = this;
        var _ball = arr[0];
        //这里检测是否与球链self._rollBalls中的球碰撞,碰撞采用距离计算
        for (var j = 0; j < self._rollBalls.length; ++j) {
            var dis = Math.sqrt((self._rollBalls[j].x - _ball.x) * (self._rollBalls[j].x - _ball.x) + (self._rollBalls[j].y - _ball.y) * (self._rollBalls[j].y - _ball.y));
            if (dis <= 32) {
                return j;
            }
        }
        return -1;
    };
    //--------插入小球，第一个参数是要插入的小球，第二个是被碰撞的小球的索引，第三个是标志向前插入还是向后插入
    ZumaCore.prototype.insertBall = function (obj, index, p) {
        var self = this;
        var posX;
        var posY;
        var insertPos;
        //确定obj要运动到的位置
        if (p == "next") {
            insertPos = self._rollBalls[index].posIndex + 16;
            //插入的位置后面还有小球并且在挤入的时候会发生碰撞就需要检查与这个小球的碰撞情况
            if (self._rollBalls[index + 1] && (self._rollBalls[index + 1].posIndex - self._rollBalls[index].posIndex) < 32) {
                self._ballCrushed.push([obj, self._rollBalls[index + 1]]);
                App.TimerManager.doFrame(0, 0, self.cheackPushCollision, self);
            }
        }
        else {
            //向前插入分两种情况，第一种就是向前插入会挤到前面的球，此时插入的球的位置应是被碰小球的
            //前一个球的posIndex+16位置，并推动后面的球空出位置出来
            if (self._rollBalls[index - 1] && (self._rollBalls[index].posIndex - self._rollBalls[index - 1].posIndex) < 32) {
                insertPos = self._rollBalls[index - 1].posIndex + 16;
                self._ballCrushed.push(new Array(obj, self._rollBalls[index]));
                App.TimerManager.doFrame(0, 0, self.cheackPushCollision, self);
            }
            else {
                insertPos = self._rollBalls[index].posIndex - 16;
            }
        }
        posX = BattleConst.MapData[insertPos][0];
        posY = BattleConst.MapData[insertPos][1];
        //做一个简单的动画效果
        egret.Tween.get(obj).to({ x: posX, y: posY }, 200).call(self.motionFinished, self, [obj, insertPos]);
    };
    //------逐帧检测挤入的小球与后一个小球的碰撞情况，如果距离小于32即为碰撞，
    //------此时要将球后移，直到没碰撞，形成一个挤入的效果-------------------------
    ZumaCore.prototype.cheackPushCollision = function () {
        var self = this;
        if (self._ballCrushed.length != 0) {
            for (var i = 0; i < self._ballCrushed.length; ++i) {
                var dis = Math.sqrt((self._ballCrushed[i][0].x - self._ballCrushed[i][1].x) * (self._ballCrushed[i][0].x - self._ballCrushed[i][1].x) + (self._ballCrushed[i][0].y - self._ballCrushed[i][1].y) * (self._ballCrushed[i][0].y - self._ballCrushed[i][1].y));
                var isCollision = dis < 32 ? true : false;
                var moveStep = 0;
                while (isCollision) {
                    //如果是碰撞的则假设小球向前移动一步在检测是否碰撞，如此下去直到不碰撞了
                    ++moveStep;
                    dis = Math.sqrt((self._ballCrushed[i][0].x - BattleConst.MapData[self._ballCrushed[i][1].posIndex + moveStep][0]) * (self._ballCrushed[i][0].x - BattleConst.MapData[self._ballCrushed[i][1].posIndex + moveStep][0]) + (self._ballCrushed[i][0].y - BattleConst.MapData[self._ballCrushed[i][1].posIndex + moveStep][1]) * (self._ballCrushed[i][0].y - BattleConst.MapData[self._ballCrushed[i][1].posIndex + moveStep][1]));
                    isCollision = dis < 32 ? true : false;
                }
                //执行推进小球的操作,指定moveStep为应推进的步数,执行前需检查被检测碰撞的球
                //是否由于执行消除操作删除了，没有被删除才能执行推动小球,否则将引起数组操作越界
                var index;
                index = self._rollBalls.indexOf(self._ballCrushed[i][1]);
                if (index != -1) {
                    self.pushBallFrom(index, moveStep);
                }
            }
        }
        else {
            App.TimerManager.remove(self.cheackPushCollision, self);
        }
    };
    //-------动画效果完成后要将小球插入到数组中，并调整好位置,第一个参数是要插入的小球，
    //-------第二个是球插入到地图数组中的位置，第三个是标志向前插入还是向后插入----------------------------
    ZumaCore.prototype.motionFinished = function (obj, insertPos) {
        var self = this;
        var index;
        //算出应插入到self._rollBalls中位置的索引,这里采用传入insertPos参数的方式
        //而不是传入被碰撞小球的引用的原因是为了防止消除操作删除掉了小球而算不出
        //数组的插入位置
        for (var i = 0; i < self._rollBalls.length; ++i) {
            if (self._rollBalls[i].posIndex > insertPos) {
                index = i;
                break;
            }
            if (i == self._rollBalls.length - 1) {
                index = i + 1;
            }
        }
        //删除对应ballCrushed中的元素
        self._ballCrushed.splice(self._ballCrushed.indexOf(obj), 1);
        //根据插入的位置在self._rollBalls中插入该小球
        obj.posIndex = insertPos;
        self._rollBalls.splice(index, 0, obj);
        //检查插入后是否有被吸引的小球
        if (self._rollBalls[index - 1] && self._rollBalls[index - 1].color == self._rollBalls[index].color && self._rollBalls[index].posIndex - self._rollBalls[index - 1].posIndex > 17) {
            self.addToBallAttracted(self._rollBalls[index]);
            Log.trace(self._rollBalls[index] == obj);
        }
        if (self._rollBalls[index + 1] && self._rollBalls[index + 1].color == self._rollBalls[index].color && self._rollBalls[index + 1].posIndex - self._rollBalls[index].posIndex > 17) {
            self.addToBallAttracted(self._rollBalls[index + 1]);
        }
        //检查是有要清除的小球
        self.clearCheack(index, true);
    };
    /**
     * 传入检查的起点向两端开始搜索，检查是否应消除小球传入一个参数clear
     * 表示是否执行消去，若为false则只返回搜索到颜色相同的球有几个
     */
    ZumaCore.prototype.clearCheack = function (index, clear) {
        var self = this;
        var temp = [];
        temp.push(self._rollBalls[index]);
        var color = self._rollBalls[index].color;
        //此循环向下搜索
        //是否要清除的参数为false则将不相连的也算起(为判断是否应取消连击计数提供依据)，否则不算，下同
        for (var i = index + 1; i < self._rollBalls.length; i++) {
            if (self._rollBalls[i].color == color) {
                //有一定的间隙也算作是连接,由于挤入的操作会使球插入后不一定绝对
                //只相差16个位置，所以这里判断是否连接的条件应当放宽一点，17而不是16
                if (self._rollBalls[i].posIndex - self._rollBalls[i - 1].posIndex <= 17) {
                    temp.push(self._rollBalls[i]);
                }
                else if (!clear) {
                    temp.push(self._rollBalls[i]);
                }
                else {
                    break;
                }
            }
            else {
                break;
            }
        }
        //此循环向上搜索
        var j = index - 1;
        while (self._rollBalls[j]) {
            if (self._rollBalls[j].color == color) {
                if (self._rollBalls[j + 1].posIndex - self._rollBalls[j].posIndex <= 17) {
                    temp.push(self._rollBalls[j]);
                    --j;
                }
                else if (!clear) {
                    temp.push(self._rollBalls[j]);
                    --j;
                }
                else
                    break;
            }
            else {
                break;
            }
        }
        //将j加1后传给清除小球函数，作为删除小球的起点
        ++j;
        //temp长度大于三则执行消除小球，传入该消除的小球数组以及起始球索引
        if (temp.length > 2 && clear) {
            self.clearBall(j, temp);
        }
        return temp.length;
    };
    //------------------消除小球，并在消除后检测是否两端小球颜色相同，相同则应该吸引过去-----------
    ZumaCore.prototype.clearBall = function (f, arr) {
        var self = this;
        //当前连击数加1
        ++self._cobom;
        //播放的音调
        var id = self._cobom > 5 ? 5 : self._cobom;
        if (self._cobom > 1) {
            // soundMgr.BallExplosionSound.play();
        }
        for (var i = 0; i < arr.length; ++i) {
            //小球爆炸
            arr[i].explode();
            // soundMgr.playCollisionSound(id);
        }
        //从球链数组中删除这些小球前先判断删除后是否游戏过关，如删除后游戏过关就得先获取self._rollBalls中
        //最后一个球的posIndex位置传给extraScore()函数，计算出额外的加分
        if (self._rollBalls.length == arr.length) {
            self._canShoot = false;
            self._lastId = self._rollBalls[self._rollBalls.length - 1].posIndex;
            egret.setTimeout(self.gamePass, self, 600);
        }
        self._rollBalls.splice(f, arr.length);
        //若全部球滚出来了,就需要检查发射器中球的颜色了
        if (self._rollInTotalCount == 0) {
            self.cheackColor(arr[0].color);
        }
        //检测断开的球链两端颜色是否相同应该吸引过去,注意此处删除了小球，应对比颜色的小球索引有变化
        if (self._rollBalls[f - 1] && self._rollBalls[f] && (self._rollBalls[f - 1].color == self._rollBalls[f].color)) {
            //利用clearCheack的返回值来确定是否为连击,吸引结束不会引发消除则更新最大连击数
            //并将当前连击数置为0
            if (self.clearCheack(f, false) < 3) {
                if (self._cobom > self._maxCobom) {
                    self._maxCobom = self._cobom;
                    App.ControllerManager.applyFunc(ControllerConst.Battle, BattleConst.UPDATE_MAXCOBOM, self._maxCobom);
                }
                self._cobom = 0;
            }
            //因在吸引过程中球链可能会有变动，比如爆炸、插入后，导致不能吸引，所以逐帧执行检测是否要吸引,延迟400毫秒执行
            //将被吸引的小球加入检测数组
            self.addToBallAttracted(self._rollBalls[f]);
        }
        else {
            if (self._cobom > self._maxCobom) {
                self._maxCobom = self._cobom;
                App.ControllerManager.applyFunc(ControllerConst.Battle, BattleConst.UPDATE_MAXCOBOM, self._maxCobom);
            }
            self._cobom = 0;
        }
    };
    /** 检查发射器的颜色，使发射器中球不会出现球链中没有的颜色 */
    ZumaCore.prototype.cheackColor = function (color) {
        var self = this;
        //检查球链中的球
        for (var i = 0; i < self._rollBalls.length; ++i) {
            if (self._rollBalls[i].color == color)
                return;
        }
        //检查发射出来的球但还未插入的
        for (var j = 0; j < self._ballShooted.length; ++j) {
            if (self._ballShooted[j].color == color)
                return;
        }
        self._role.colorCleared(color);
    };
    /** 将需要被检测吸引的小球加入ballAttracted数组 */
    ZumaCore.prototype.addToBallAttracted = function (ball) {
        var self = this;
        if (self._ballAttracted == null) {
            self._ballAttracted = [];
            self._ballAttracted.push(ball);
        }
        else {
            self._ballAttracted.push(ball);
        }
        egret.setTimeout(function () {
            App.TimerManager.doFrame(0, 0, self.attract, self);
        }, self, 400);
    };
    /** 传入球断开的球的两端的球的索引点，将球吸引闭合起来 */
    ZumaCore.prototype.attract = function () {
        var self = this;
        if (self._ballAttracted.length != 0) {
            for (var i = 0; i < self._ballAttracted.length; ++i) {
                var index = self._rollBalls.indexOf(self._ballAttracted[i]);
                if (index != -1 && self._rollBalls[index - 1]) {
                    if (self._ballAttracted[i].color == self._rollBalls[index - 1].color) {
                        //算出应移动多少步
                        var steps = self._ballAttracted[i].posIndex - self._rollBalls[index - 1].posIndex > 19 ? 3 : self._ballAttracted[i].posIndex - self._rollBalls[index - 1].posIndex - 16;
                        self.pushBallFrom(index, -steps);
                        //判断吸引是否结束了
                        if (self._ballAttracted[i].posIndex - self._rollBalls[index - 1].posIndex <= 16) {
                            // soundMgr.CollisionSound.play();
                            //吸引结束从数组中删除
                            self._ballAttracted.splice(i, 1);
                            if (self._ballAttracted.length == 0) {
                                App.TimerManager.remove(self.attract, self);
                            }
                            self.clearCheack(index - 1, true);
                        }
                    }
                    else {
                        //此种情况针对由于消除、插入操作造成的不能继续吸引，并且连击条件被破坏
                        self._ballAttracted.splice(i, 1);
                        if (self._cobom > self._maxCobom) {
                            self._maxCobom = self._cobom;
                            App.ControllerManager.applyFunc(ControllerConst.Battle, BattleConst.UPDATE_MAXCOBOM, self._maxCobom);
                        }
                        self._cobom = 0;
                    }
                }
            }
        }
        else {
            App.TimerManager.remove(self.attract, self);
        }
    };
    /** 游戏过关 */
    ZumaCore.prototype.gamePass = function () {
        var self = this;
        App.TimerManager.doTimer(80, 0, self.extraScore, self);
    };
    /** 计算加分 */
    ZumaCore.prototype.extraScore = function () {
        var self = this;
        if (self._lastId + 16 < BattleConst.MapData.length - 17) {
            self._lastId += 16;
            // soundMgr.EndExplosionSound.play();
            // var mc: endExplosion = new endExplosion();
            // mc.x = BattleConst.MapData[self.lastId][0];
            // mc.y = BattleConst.MapData[self.lastId][1];
            // self.addChild(mc);
        }
        else {
            App.TimerManager.remove(self.extraScore, self);
        }
    };
    Object.defineProperty(ZumaCore.prototype, "canShoot", {
        get: function () { return this._canShoot; },
        enumerable: true,
        configurable: true
    });
    return ZumaCore;
}(egret.Sprite));
__reflect(ZumaCore.prototype, "ZumaCore");
//# sourceMappingURL=ZumaCore.js.map