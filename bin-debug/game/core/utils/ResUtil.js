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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**
 * 资源加载工具类，
 * 支持多个resource.json文件加载
 * 支持一次性加载多个groups
 */
var ResUtil = (function (_super) {
    __extends(ResUtil, _super);
    /** 构造函数 */
    function ResUtil() {
        var _this = _super.call(this) || this;
        _this._loadingGroups = [];
        _this._configs = new Array();
        _this._groups = {};
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, _this.onResourceLoadComplete, _this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, _this.onResourceLoadProgress, _this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, _this.onResourceLoadError, _this);
        return _this;
    }
    /**
     * 添加一个配置文件
     * @param jsonPath resource.json路径
     * @param filePath 访问资源路径
     */
    ResUtil.prototype.addConfig = function (jsonPath, filePath) {
        this._configs.push([jsonPath, filePath]);
    };
    /**
     * 开始加载配置文件
     * @param $onConfigComplete 加载完成执行函数
     * @param $onConfigCompleteTarget 加载完成执行函数所属对象
     */
    ResUtil.prototype.loadConfig = function ($onConfigComplete, $onConfigCompleteTarget) {
        this._onConfigComplete = $onConfigComplete;
        this._onConfigCompleteTarget = $onConfigCompleteTarget;
        this.loadNextConfig();
    };
    /** 加载 */
    ResUtil.prototype.loadNextConfig = function () {
        //加载完成
        if (this._configs.length == 0) {
            this._onConfigComplete.call(this._onConfigCompleteTarget);
            this._onConfigComplete = null;
            this._onConfigCompleteTarget = null;
            return;
        }
        var arr = this._configs.shift();
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigCompleteHandle, this);
        RES.loadConfig(arr[0], arr[1]);
    };
    /** 加载完成 */
    ResUtil.prototype.onConfigCompleteHandle = function (event) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigCompleteHandle, this);
        this.loadNextConfig();
    };
    /**
     * 加载资源组，静默加载(无回调函数)
     * @group 资源组(支持字符串和数组)
     */
    ResUtil.prototype.loadGroupQuiet = function (group, priority, progress) {
        if (priority === void 0) { priority = 1; }
        if (progress === void 0) { progress = null; }
        var groupName = this.combGroupName(group);
        if (this._loadingGroups.indexOf(groupName) < 0) {
            this._loadingGroups.push(groupName);
            RES.loadGroup(groupName, priority, progress);
        }
    };
    /**
     * 加载资源组，带加载完成回调
     * @group 资源组(支持字符串和数组)
     * @onComplete 加载完成回调
     * @thisObject 回调执行对象
     * @priority 优先级
     */
    ResUtil.prototype.loadGroup = function (group, onComplete, thisObject, priority, progress) {
        if (priority === void 0) { priority = 1; }
        if (progress === void 0) { progress = null; }
        var groupName = this.combGroupName(group);
        this.createGroupInfo(groupName, onComplete, null, thisObject);
        if (this._loadingGroups.indexOf(groupName) < 0) {
            this._loadingGroups.push(groupName);
            RES.loadGroup(groupName, priority, progress);
        }
    };
    /**
     * 加载资源组，带加载进度
     * @group 资源组(支持字符串和数组)
     * @onComplete 加载完成回调
     * @onProgress 加载进度回调
     * @thisObject 回调执行对象
     */
    ResUtil.prototype.loadGroupWithPro = function (group, onComplete, onProgress, thisObject) {
        var groupName = this.combGroupName(group);
        this.createGroupInfo(groupName, onComplete, onProgress, thisObject);
        if (this._loadingGroups.indexOf(groupName) < 0) {
            this._loadingGroups.push(groupName);
            RES.loadGroup(groupName);
        }
    };
    /** 组合资源组名。单个资源组直接返回。多个资源组则重新命名。 */
    ResUtil.prototype.combGroupName = function (group) {
        if (typeof (group) == "string") {
            return group;
        }
        else {
            var len = group.length;
            var groupName = "";
            for (var i = 0; i < len; i++) {
                groupName += group[i];
            }
            RES.createGroup(groupName, group, false); //是否覆盖已经存在的同名资源组,默认 false
            return groupName;
        }
    };
    ResUtil.prototype.createGroupInfo = function (groupName, onComplete, onProgress, thisObject) {
        if (onComplete === void 0) { onComplete = null; }
        if (onProgress === void 0) { onProgress = null; }
        if (thisObject === void 0) { thisObject = null; }
        //采用数组存储，原因是有时候会出现多个相同的资源连着开始加载，但是回调函数却属于不同的对象这种情况
        if (!this._groups[groupName])
            this._groups[groupName] = [];
        this._groups[groupName].push({ onComplete: onComplete, thisObject: thisObject, onProgress: onProgress });
    };
    /** 资源组加载完成 */
    ResUtil.prototype.onResourceLoadComplete = function (event) {
        var groupName = event.groupName;
        if (!RES.isGroupLoaded(groupName)) {
            // LogManager.warningFormat("assetManager 的 bug 多发出了一个事件！:" + groupName);
            return;
        }
        var index = this._loadingGroups.indexOf(groupName);
        if (index >= 0) {
            this._loadingGroups.splice(index, 1);
        }
        if (this._groups[groupName]) {
            for (var i = 0; i < this._groups[groupName].length; i++) {
                var loadComplete = this._groups[groupName][i].onComplete;
                var loadCompleteTarget = this._groups[groupName][i].thisObject;
                if (loadComplete != null) {
                    loadComplete.call(loadCompleteTarget);
                }
            }
            this._groups[groupName] = null;
            delete this._groups[groupName];
        }
    };
    /** 资源组加载进度 */
    ResUtil.prototype.onResourceLoadProgress = function (event) {
        var groupName = event.groupName;
        if (this._groups[groupName]) {
            for (var i = 0; i < this._groups[groupName].length; i++) {
                var loadProgress = this._groups[groupName][i].onProgress;
                var loadProgressTarget = this._groups[groupName][i].thisObject;
                if (loadProgress != null) {
                    loadProgress.call(loadProgressTarget, event);
                }
            }
        }
    };
    /** 资源组加载失败 */
    ResUtil.prototype.onResourceLoadError = function (event) {
        this.onResourceLoadComplete(event);
    };
    /** 外部加载声音 */
    ResUtil.prototype.loadAsyncSound = function (path, backcall) {
        if (backcall === void 0) { backcall = null; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                RES.getResByUrl(PathConfig.SoundPath + path, function () {
                    if (backcall)
                        backcall();
                }, this, RES.ResourceItem.TYPE_SOUND);
                return [2 /*return*/];
            });
        });
    };
    ResUtil.PRIORITY_H = 10;
    ResUtil.PRIORITY_M = 5;
    ResUtil.PRIORITY_L = 1;
    return ResUtil;
}(BaseClass));
__reflect(ResUtil.prototype, "ResUtil");
//# sourceMappingURL=ResUtil.js.map