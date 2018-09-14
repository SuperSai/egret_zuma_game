class BoneManager extends BaseClass {

	private _factory: dragonBones.EgretFactory;

	public constructor() {
		super();
		this._factory = dragonBones.EgretFactory.factory;
	}

	public test_showBone(resId: string) {
		let testBone: BoneAnimation = ResourcePool.Intance.pop(resId, ResourcePool.SKE);
		testBone.playTimes = 0;
		testBone.removeAtLastFrame = false;
		testBone.play();
	}

	public start(): void {
		App.StageUtils.getStage().addEventListener(egret.Event.ENTER_FRAME, this.onUpdate, this);
	}
	public stop() {
		App.StageUtils.getStage().removeEventListener(egret.Event.ENTER_FRAME, this.onUpdate, this);
	}

	private onUpdate(event: Event): void {
		dragonBones.WorldClock.clock.advanceTime(-1);
	}

	public getArmature(path: string): dragonBones.Armature {
		if (this._factory.getDragonBonesData(path) == null) {
			let ske = this.getSkeData(path);
			let textureData = this.getTextureData(path);
			let texture = this.getTexture(path);

			this._factory.parseDragonBonesData(ske);
			this._factory.parseTextureAtlasData(textureData, texture);
		}
		let armature: dragonBones.Armature = this._factory.buildArmature(path);
		return armature;
	}

	private getSkeData(path: string): any {
		return RES.getRes(path + BoneConfig.SKE_END_TAG);
	}
	private getTextureData(path: string): any {
		return RES.getRes(path + BoneConfig.TEXTUREDATA_END_TAG);
	}
	private getTexture(path: string): any {
		return RES.getRes(path + BoneConfig.TEXTURE_END_TAG);
	}
}