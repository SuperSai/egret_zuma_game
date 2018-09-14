class BoneAnimationVO {
    public constructor() {
    }

    public skename: string;
    public timeScale: number;
    private _currentAnimationName: string;
    public set currentAnimationName(value: string) {
        if (value != "0") {
            this._currentAnimationName = value;
        }
    }

    public get currentAnimationName(): string {
        return this._currentAnimationName;
    }
    public playTimes: number;

    private _detectFrameEvent: boolean
    //是否侦测帧事件
    public get detectFrameEvent(): boolean {
        return this._detectFrameEvent;
    }

    public set detectFrameEvent(value: boolean) {
        this._detectFrameEvent = Number(value) == 1;
    }

    private _removeAtLastFrame: boolean;
    public get removeAtLastFrame(): boolean {
        return this._removeAtLastFrame;
    }

    public set removeAtLastFrame(value: boolean) {
        this._removeAtLastFrame = Number(value) == 1;
    }

    private _isPauseAtLastFrame: boolean;
    public get isPauseAtLastFrame(): boolean {
        return this._isPauseAtLastFrame;
    }

    public set isPauseAtLastFrame(value: boolean) {
        this._isPauseAtLastFrame = Number(value) == 1;
    }

    private _removeWhenRemoveFromStage: boolean;
    public get removeWhenRemoveFromStage(): boolean {
        return this._removeWhenRemoveFromStage;
    }

    public set removeWhenRemoveFromStage(value: boolean) {
        this._removeWhenRemoveFromStage = Number(value) == 1;
    }

    private _positionOffset: string = "";
    public set positionOffset(value: string) {
        if (value != "0") {
            this._positionOffset = value;
        }
    }

    public get positionOffset(): string {
        return this._positionOffset;
    }
}