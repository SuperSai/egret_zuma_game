class GameEnterManager {

	public setup(): void {
		App.BoneManager.start();
	}

	private static _instance: GameEnterManager;
	public constructor() { }
	public static get Instance(): GameEnterManager {
		if (!this._instance) {
			this._instance = new GameEnterManager();
		}
		return this._instance;
	}
}