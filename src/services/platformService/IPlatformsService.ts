export interface IPlatformsService {
    getPlatforms() : Promise<any>;
    insertPlatform(name:String, url:String, icon:String) : Promise<any>;
    updatePlatform(platformId:String, name:String, url:String, icon:String) : Promise<any>;
    deletePlatform(platformId:String) : Promise<any>;

}