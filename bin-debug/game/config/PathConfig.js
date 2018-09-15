var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var PathConfig = (function () {
    function PathConfig() {
    }
    Object.defineProperty(PathConfig, "ConfigUrls", {
        get: function () {
            return [
                //公共资源
                PathConfig.Root + "config/" + "game_com.res.json",
                PathConfig.Root + "config/" + "game_animation.res.json",
                //对应国家的资源
                PathConfig.Root + GameConfig.Language + "/config/" + "default.res.json",
                PathConfig.Root + GameConfig.Language + "/config/" + "game_ui.res.json",
            ];
        },
        enumerable: true,
        configurable: true
    });
    PathConfig.Root = "resource/";
    PathConfig.ThemePath = PathConfig.Root + "config/" + "default.thm.json";
    PathConfig.GameComPath = PathConfig.Root + "config/" + "game_com.res.json";
    PathConfig.Language = PathConfig.Root + GameConfig.Language + "/config/language.txt";
    PathConfig.SoundPath = PathConfig.Root + "common/sound/";
    PathConfig.ItemPath = PathConfig.Root + "common/item/{0}.png";
    PathConfig.MapPath = PathConfig.Root + "common/map/{0}.png";
    PathConfig.RolePath = PathConfig.Root + "common/role/{0}.png";
    PathConfig.LevelPath = PathConfig.Root + "common/level/{0}.jpg";
    return PathConfig;
}());
__reflect(PathConfig.prototype, "PathConfig");
//# sourceMappingURL=PathConfig.js.map