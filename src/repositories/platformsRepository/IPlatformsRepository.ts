export interface IPlatformsRepository {
    getPlatforms() : Promise<any>;
    getPlatformsByCategory(category: String) : Promise<any>;
    insertPlatform(name:String, url:String, category:String[]) : Promise<any>;
    updatePlatform(platformId:String, name:String, url:String, category:String[]) : Promise<any>;
    deletePlatform(platformId:String) : Promise<any>;
}