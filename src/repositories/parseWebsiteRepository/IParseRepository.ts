export interface IParseRepository {
    getWebsiteDataHTML(urlWebsite: String): Promise<any>;
}