export interface IParseRepository {
    parseAmazon(urlWebsite: String): Promise<any>;
    parseEneba(urlWebsite: String): Promise<any>;
    parseInstantGaming(urlWebsite: String): Promise<any>;
    parseMMOGA(urlWebsite: String): Promise<any>;
    parsePCComponentes(urlWebsite: String): Promise<any>;
    parseSteam(urlWebsite: String): Promise<any>;
}