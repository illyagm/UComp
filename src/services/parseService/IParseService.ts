export interface IParseService {
    parseAndGetProducts(urlWebsite: String, searchPlatformId: String): Promise<any>;
}