import { IParseService } from "./IParseService";
import ParseRepository from '../../repositories/parseWebsiteRepository/ParseRepository';
import { IParseRepository } from "../../repositories/parseWebsiteRepository/IParseRepository";
export default class ParseService implements IParseService{
    private parseRepository:IParseRepository = new ParseRepository();
    public async getWebsiteDataHTML(urlWebsite: String): Promise<any> {
        return await this.parseRepository.getWebsiteDataHTML(urlWebsite);
    }
    
}