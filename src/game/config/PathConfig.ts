class PathConfig {

	public static Root: string = "resource/";
	public static ThemePath: string = PathConfig.Root + "config/" + "default.thm.json";
	public static GameComPath: string = PathConfig.Root + "config/" + "game_com.res.json";
	public static Language: string = PathConfig.Root + GameConfig.Language + "/config/language.txt";
	public static SoundPath: string = PathConfig.Root + "common/sound/";
	public static ItemPath: string = PathConfig.Root + "common/item/{0}.png";
	public static MapPath: string = PathConfig.Root + "common/map/{0}.png";
	public static RolePath: string = PathConfig.Root + "common/role/{0}.png";
	public static LevelPath: string = PathConfig.Root + "common/level/{0}.jpg";

	public static get ConfigUrls(): string[] {
		return [
			//公共资源
			PathConfig.Root + "config/" + "game_com.res.json",
			PathConfig.Root + "config/" + "game_animation.res.json",
			//对应国家的资源
			PathConfig.Root + GameConfig.Language + "/config/" + "default.res.json",
			PathConfig.Root + GameConfig.Language + "/config/" + "game_ui.res.json",
		];
	}
}