class BoneAnimation extends egret.Sprite {

    private _skeName: string;
    private _complete: Function;
    private _completeTarget: any;
    private _isLoadComplete: boolean = false;
    private _isInPool: boolean = false;
    private _timeScale: number = 1;
    private _position: egret.Point;
    private _positionString: string;
    private _currentAnimationName: string = "";
    private _isPauseAtLastFrame: boolean = false;
    private _removeAtLastFrame: boolean = true;
    private _removeWhenRemoveFromStage: boolean = true;
    private _playTimes: number = 1;
    private _detectFrameEvent: boolean = false;
    private _direction: number = 1;
    public static LOAD_COMPLETE: string = "boneLoadComplete";
    public static LOOP_COMPLETE: string = "boneLoopComplete";
    public static FRAME_EVENT: string = "frameEvent";
    public static traceID: string = "tx_01";
    private _startframeIndex: number = 0;
    private _param: string = "";
    private _param1: any;
    //播放一次然后停住 1
    //播放一次后直接移除 -1
    //无线播放 0


    public constructor(skeName: string) {
        super();
        this._skeName = skeName;
        if (this._skeName == BoneAnimation.traceID) LogManager.logFormat("LoadBone constructor {0}", BoneAnimation.traceID);
    }

    public play(complete: Function = null, thisObject: any = null): void {
        if (this._skeName == BoneAnimation.traceID) LogManager.logFormat("LoadBone play {0}", BoneAnimation.traceID);
        this._complete = complete;
        this._completeTarget = thisObject;
        this.addEventListener(BoneAnimation.LOAD_COMPLETE, this.playNow, this);
        if (this._isLoadComplete) this.playNow();
    }

    public stop(animation: string): void {
        if (this.armature == null) return;
        this.armature.animation.stop(animation);
    }

    private playNow(): void {
        if (this._skeName == BoneAnimation.traceID) LogManager.logFormat("LoadBone playNow {0}", BoneAnimation.traceID);
        if (this._isInPool) LogManager.warningFormat("{0} current is in pool must be not play", this._skeName);
        this.removeEventListener(BoneAnimation.LOAD_COMPLETE, this.playNow, this);
        if (this._currentAnimationName == "") this._currentAnimationName = this.getRandomAnimationName();
        dragonBones.WorldClock.clock.add(this.armature);
        this.armature.animation.gotoAndPlayByFrame(this._currentAnimationName, this._startframeIndex, this.playTimes);
        this.armature.eventDispatcher.addDBEventListener(dragonBones.EventObject.LOOP_COMPLETE, this.playComplete, this);
        if (this.detectFrameEvent) this.armature.eventDispatcher.addDBEventListener(dragonBones.EventObject.FRAME_EVENT, this.onFrameEventFired, this);
        if (this.removeWhenRemoveFromStage) this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onBoneRemove, this);
    }

    public load() {
        if (this._skeName == BoneAnimation.traceID) LogManager.logFormat("LoadBone load start {0}", BoneAnimation.traceID);
        App.ResUtil.loadGroup(this._skeName, this.loadComplete, this, ResUtil.PRIORITY_H);
    }

    private onFrameEventFired(event: egret.Event): void {
        //要去实现
        this.dispatchEvent(new egret.Event(BoneAnimation.FRAME_EVENT, true, true, event.data));
    }

    private loadComplete(): void {
        if (this._skeName == BoneAnimation.traceID) LogManager.logFormat("LoadBone loadComplete start {0}", BoneAnimation.traceID);
        this.armature = App.BoneManager.getArmature(this._skeName);
        this._isLoadComplete = true;
        this.addChild(this.armature.display);
        this.initBone();
        this.dispatchEvent(new egret.Event(BoneAnimation.LOAD_COMPLETE, true, true, this));
        if (this._skeName == BoneAnimation.traceID) LogManager.logFormat("LoadBone loadComplete createComplete {0}", BoneAnimation.traceID);
    }
    /*
    * 为对象池的引用添加一些预设
    * */
    public resetForPool() {
        if (this._skeName == BoneAnimation.traceID) LogManager.logFormat("LoadBone resetForPool {0}", BoneAnimation.traceID);
        this._isInPool = true;
        if (!this._isLoadComplete) return;
        this.armature.animation.stop();
        this.armature.animation.timeScale = this._timeScale = 1;
        this.armature.display.scaleX = this._direction = 1;
        dragonBones.WorldClock.clock.remove(this.armature);
        App.DisplayUtils.resetDisplay(this);
        App.DisplayUtils.resetDisplay(this.armature.display);
    }

    private playComplete() {
        if (this._skeName == BoneAnimation.traceID) LogManager.logFormat("LoadBone playComplete {0}", BoneAnimation.traceID);
        this.armature.eventDispatcher.removeDBEventListener(dragonBones.EventObject.LOOP_COMPLETE, this.playComplete, this);
        if (this.isPauseAtLastFrame) {
            this.armature.animation.stop(this._currentAnimationName);
        }
        if (this.removeAtLastFrame) {
            this.onBoneRemove();
        }
        if (this._complete != null && this._completeTarget != null) {
            this._complete.call(this._completeTarget);
        }
        this.dispatchEvent(new egret.Event(BoneAnimation.LOOP_COMPLETE, true, true, this));
    }

    private onBoneRemove() {
        // 有时候会出现没有播放完成就remove的情况，所以这里还要再remove一次事件；
        if (this._skeName == BoneAnimation.traceID) LogManager.logFormat("LoadBone onBoneRemove {0}", BoneAnimation.traceID);
        this.armature.eventDispatcher.removeDBEventListener(dragonBones.EventObject.LOOP_COMPLETE, this.playComplete, this);
        this.armature.eventDispatcher.removeDBEventListener(dragonBones.EventObject.FRAME_EVENT, this.onFrameEventFired, this);
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onBoneRemove, this);
        if (!ResourcePool.Intance.hasItem(this, ResourcePool.SKE)) {
            ResourcePool.Intance.push(this, ResourcePool.SKE);
        }
    }

    public initBone(): void {
        if (this._skeName == BoneAnimation.traceID) LogManager.logFormat("LoadBone initBone {0}", BoneAnimation.traceID);
        this._isInPool = false;
        if (this._isLoadComplete) this.armature.animation.timeScale = this._timeScale;
        if (this._isLoadComplete) this.armature.display.scaleX = this._direction;
        if (this._positionString) {
            this.position = this.position;
        }
    }

    public gotoAndStopFrame(stopFrame: string = ""): void {
        if (this._skeName == BoneAnimation.traceID) LogManager.logFormat("LoadBone playNow {0}", BoneAnimation.traceID);
        this._currentAnimationName = stopFrame;
        if (this._currentAnimationName == "") this._currentAnimationName = this.getRandomAnimationName();
        this.armature.animation.gotoAndStopByFrame(this._currentAnimationName);
    }

    public gotoAndStopFrameExcept(name: string): void {
        if (this._skeName == BoneAnimation.traceID) LogManager.logFormat("LoadBone playNow {0}", BoneAnimation.traceID);
        this._currentAnimationName = this.getRandomAnimationNameExcept(name);
        this.armature.animation.gotoAndStopByFrame(this._currentAnimationName);
    }

    public armature: dragonBones.Armature;  //人物骨架

    public get skeName(): string {
        return this._skeName;
    }

    public get isLoadComplete(): boolean {
        return this._isLoadComplete;
    }

    public set timeScale(value: number) {
        this._timeScale = value;
        if (this._isLoadComplete) this.armature.animation.timeScale = this._timeScale;
    }

    public get timeScale(): number {
        return this._timeScale;
    }

    public set currentAnimationName(value: string) {
        this._currentAnimationName = value;
    }

    public get currentAnimationName(): string {
        return this._currentAnimationName;
    }

    public get playTimes(): number {
        //这里的pause字段经过特殊定义后，符合某些情况播放次数的定义，0为无限，其他情况为次数
        return this._playTimes;
    }

    public set playTimes(value: number) {
        this._playTimes = value;
    }

    //是否侦测帧事件
    public get detectFrameEvent(): boolean {
        return this._detectFrameEvent;
    }

    public set detectFrameEvent(value: boolean) {
        this._detectFrameEvent = value;
    }

    public get removeAtLastFrame(): boolean {
        return this._removeAtLastFrame;
    }

    public set removeAtLastFrame(value: boolean) {
        this._removeAtLastFrame = value;
    }

    public get isPauseAtLastFrame(): boolean {
        return this._isPauseAtLastFrame;
    }

    public set isPauseAtLastFrame(value: boolean) {
        this._isPauseAtLastFrame = value;
    }

    public get removeWhenRemoveFromStage(): boolean {
        return this._removeWhenRemoveFromStage;
    }

    public set removeWhenRemoveFromStage(value: boolean) {
        this._removeWhenRemoveFromStage = value;
    }

    public get direction(): number {
        return this._direction;
    }

    public set direction(value: number) {
        this._direction = value;
        if (this._isLoadComplete) this.armature.display.scaleX = value;
    }

    public set positionString(value: string) {
        if (value == "") return;
        let values: Array<string> = value.split("|");
        if (values.length != 2) return;
        this._positionString = value;
        let pos: egret.Point = new egret.Point(Number(values[0]), Number(values[1]));
        this.position = pos;
    }

    public get positionString() {
        return this._positionString;
    }

    public set position(value: egret.Point) {
        this._position = value;
        this.x = this._position.x;
        this.y = this._position.y;
    }

    public get position(): egret.Point {
        return this._position;
    }

    public set startframeIndex(value: number) {
        this._startframeIndex = value;
    }

    public get param(): string {
        return this._param;
    }

    public set param(value: string) {
        this._param = value;
    }

    public get param1(): string {
        return this._param1;
    }

    public set param1(value: string) {
        this._param1 = value;
    }

    public get startframeIndex(): number {
        return this._startframeIndex;
    }

    public get allAnimationNames(): string[] {
        return this.armature.animation.animationNames;
    }

    public hasAnimation(name: string): boolean {
        return this.armature == null ? false : this.armature.animation.hasAnimation(name);
    }

    public getFrameCountByName(name: string): number {
        let animation: dragonBones.AnimationData = this.armature.animation.animations[name];
        return animation.frameCount;
    }

    public getRandomAnimationName(): string {
        if (this.allAnimationNames.length == 1) return this.allAnimationNames[0];
        return ObjectUtils.getRandomItem(this.allAnimationNames);
    }

    public getRandomAnimationNameExcept(name: string): string {
        if (this.allAnimationNames.length == 1) return this.allAnimationNames[0];
        let names: string[] = this.allAnimationNames.slice(1);
        return ObjectUtils.getRandomItem(names);
    }

    public dispose(): void {
        if (this._skeName == BoneAnimation.traceID) LogManager.logFormat("LoadBone dispose {0}", BoneAnimation.traceID);
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onBoneRemove, this);
        if (this.armature) {
            this.armature.eventDispatcher.removeDBEventListener(dragonBones.EventObject.LOOP_COMPLETE, this.playComplete, this);
            this.armature.eventDispatcher.removeDBEventListener(dragonBones.EventObject.FRAME_EVENT, this.onFrameEventFired, this);
            dragonBones.WorldClock.clock.remove(this.armature);
            this.armature.dispose();
            this.armature = null;
        }
        this._skeName = null;
        this._complete = null;
        this._completeTarget = null;
        this._position = null;
        this._currentAnimationName = null;
        this._isPauseAtLastFrame = null;
        this._removeAtLastFrame = null;
    }
}