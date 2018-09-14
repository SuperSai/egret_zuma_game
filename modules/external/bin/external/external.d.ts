
declare class ext {
    static loadingHide(): void;
    static getRelease(): boolean;
    static getHttpHead(): string;
    static getIsIos(): boolean;
    static getPlatform(): string;
    static getIsShowAdv(): boolean;
    static getIsSelectHead(): boolean;
    static getIsEditNickName(): boolean;
    static getIsSkipLogoPage(): boolean;
    static getIsLog(): boolean;
    static beginFBGameSence(): Promise<any>;
    static showFacebookAd(type: number, placementId: string, fromId: number, missioinId: number, param: string): Promise<any>;
    static preloadingFBAdv(placementId: string): Promise<any>;
    static JsFBGetFriends();
    static JsWan83ShareUrl();
    static JsWan83CreateRole();
    static JsWan83Follow();
    static JsWan83GetFriends(callback);
    static JsWan83Init(parameters, callback);
    static JsPayWan83(json, callback);
    static JsWan83Share(parameters, callback);
    static JsWan83IsShare();
    static addFavorites(Params, callback);
    static getCenterUrl(): string;
    static getPlayerId(): string;
    static getParameters(): Object;
    static jsPopPayTips(score: number): void;
    static newRequest(url, callback, cache);
    static prepareEnterPlatForm();
    static queryProducts(): Promise<any>;
    static pay(goodsId, areaId, playerId): Promise<any>;
    static getGoodsList(): any;
    static bindModal();
    static payOnReady();
    static createAsyncData(friendId, playerId);
    static shareAsync(data, callback);

    static sendRequestJson(url, callback, self);
    static getLocation(callback, self);
    static getUserInfo(callback, self);
    static connectSocket(url, callback, self);
    static getUnionId(url, unionData, callback, self)
    static onSocketOpen(callback, self);
    static onSocketMessage(callback, self);
    static sendSocketMessage(data);
    static onNavigateBackMiniProgram();
    static getLogin(callback, self);
    static shareMessage(titleName, imageUrl, callback);
    static payment(buyQuantity);

    static initHgameSdk(callback, self);
    static getPlatformInfo(callback, self);
    static hgameLogin(callback);
    static hgamePay(data);
    static gameReport(action, baseData, extendData);
    static hgameShare(data, callback);
    static hgameShowVideoAd(callback);
    static loadServerConfig(callback);
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
}
