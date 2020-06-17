export interface IParseService {
    getWebsiteDataHTML(urlWebsite: String): Promise<any>;
}