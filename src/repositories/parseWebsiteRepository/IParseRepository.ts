export interface IParseRepository {
    parseAndGetProducts(urlWebsite: String, searchPlatformId: String): Promise<any>;
}