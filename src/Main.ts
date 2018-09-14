//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class Main extends eui.UILayer {

    protected createChildren(): void {
        super.createChildren();
        let self = this;
        //注入自定义的素材解析器
        let assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        //初始化
        self.initLifecycle();
        self.initScene();
        self.initData();
        self.initPlatform();
    }
    private initLifecycle(): void {
        egret.lifecycle.addLifecycleListener((context) => { })
        egret.lifecycle.onPause = () => { egret.ticker.pause(); }
        egret.lifecycle.onResume = () => { egret.ticker.resume(); }
    }
    /** 初始化所有场景 */
    private initScene(): void {
        App.SceneManager.register(SceneConsts.LOADING, new LoadingScene());
        App.SceneManager.register(SceneConsts.LOGIN, new LoginScene());
        App.SceneManager.register(SceneConsts.HALL, new HallScene());
        App.SceneManager.register(SceneConsts.LEVEL, new LevelScene());
        App.SceneManager.register(SceneConsts.BATTLE, new BattleScene());
    }
    /** 初始化数据 */
    private initData(): void {
        let self = this;
        //允许支持跨域加载图片
        egret.ImageLoader.crossOrigin = "anonymous";
        //适配方式(全屏适配)
        App.StageUtils.startFullscreenAdaptation(720, 1280, null);
        App.LayerManager.setup(App.StageUtils.getStage());
    }
    /** 初始化平台 */
    private initPlatform() {
        let self = this;
        switch (ext.getPlatform()) {
            case "wan83":
                break;
            case "facebook":
                break;
            case "wx":
                ext.getLogin((data, self) => {
                    // PlayerInfoManager.getInstance.nickName = data.data.content;
                    ext.getUserInfo(self.userInfoBack, self);
                }, self);
                break;
            default:
                self.runGame();
                break;
        }
    }
    /** 开始运行游戏 */
    private async runGame() {
        await this.loadResource();
        this.createGameScene();
    }
    /** 加载资源 */
    private async loadResource() {
        try {
            await this.loadGameComConfig();
            await RES.loadGroup("loading");
            const loadingView = new LoadingUI();
            this.stage.addChild(loadingView);
            await this.loadConfigs();
            await this.loadTheme();
            await this.loadCommonGroup(loadingView);
            this.stage.removeChild(loadingView);
        }
        catch (e) {
            console.error(e);
        }
    }

    private loadGameComConfig() {
        return new Promise((resolve, reject) => {
            App.ResUtil.addConfig(PathConfig.GameComPath, PathConfig.Root);
            App.ResUtil.loadConfig(() => {
                resolve();
            }, this);
        })
    }

    /** 加载配置文件 */
    private loadConfigs() {
        return new Promise((resolve, reject) => {
            let configs: Array<string> = PathConfig.ConfigUrls;
            for (let i: number = 0; i < configs.length; i++) {
                App.ResUtil.addConfig(configs[i], PathConfig.Root);
            }
            App.ResUtil.loadConfig(() => {
                resolve();
            }, this);
        })
    }
    /** 加载公共资源组 */
    private loadCommonGroup(loadingView: any) {
        return new Promise((resolve, reject) => {
            App.ResUtil.loadGroup(["common", "global"], () => {
                resolve();
            }, this, 0, loadingView);
        })
    }
    /** 加载皮肤怕配置文件 */
    private loadTheme() {
        return new Promise((resolve, reject) => {
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            let theme = new eui.Theme(PathConfig.ThemePath, this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, () => {
                GlobleData.getInstance.setup();
                RES.getResByUrl(PathConfig.Language, (data: string, url: string) => {
                    App.LanguageManager.setup(data);
                    resolve();
                }, this, RES.ResourceItem.TYPE_TEXT);
            }, this);

        })
    }
    /**
     * 创建场景界面
     */
    protected createGameScene(): void {
        let self = this;
        App.Init();
        //注册所有模块控制器
        App.RegisterManager.initModules();
        //音乐音效处理
        App.SoundManager.setBgOn(true);
        App.SoundManager.setEffectOn(true);
        App.SceneManager.runScene(SceneConsts.LOGIN);
    }
}
