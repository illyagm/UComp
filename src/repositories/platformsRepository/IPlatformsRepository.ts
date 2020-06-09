export interface IPlatformsRepository {
    getPlatforms() : Promise<any>;
    insertPlatform(name:String, url:String) : Promise<any>;
    updatePlatform(platformId:String, name:String, url:String) : Promise<any>;
    deletePlatform(platformId:String) : Promise<any>;
}