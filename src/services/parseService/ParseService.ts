import { IParseService } from "./IParseService";
import ParseRepository from '../../repositories/parseWebsiteRepository/ParseRepository';
import { IParseRepository } from "../../repositories/parseWebsiteRepository/IParseRepository";
export default class ParseService implements IParseService{
    private parseRepository:IParseRepository = new ParseRepository();
    
    public async parseAmazon(urlWebsite: String): Promise<any> {
        return await this.parseRepository.parseAmazon(urlWebsite);
    }
    public async parseEneba(urlWebsite: String): Promise<any> {
        return await this.parseRepository.parseEneba(urlWebsite);
    }
    public async parseInstantGaming(urlWebsite: String): Promise<any> {
        return await this.parseRepository.parseInstantGaming(urlWebsite);
    }
    public async parseMMOGA(urlWebsite: String): Promise<any> {
        return await this.parseRepository.parseMMOGA(urlWebsite);
    }
    public async parsePCComponentes(urlWebsite: String): Promise<any> {
        return await this.parseRepository.parsePCComponentes(urlWebsite);
    }
    public async parseSteam(urlWebsite: String): Promise<any> {
        return await this.parseRepository.parseSteam(urlWebsite);
    }
}