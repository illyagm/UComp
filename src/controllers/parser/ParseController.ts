import { Controller, Post, Get, ClassMiddleware, Middleware } from "@overnightjs/core";
import { Request, Response } from 'express';
import { IParseService } from '../../services/parseService/IParseService';
import ParseService from '../../services/parseService/ParseService';

@Controller('searchResults')

export class ParserController {
    private parseService:IParseService = new ParseService();

    @Post('getProducts')
    private async getAmazonProducts(req: Request, res: Response){
        let { websiteURL, platformId } = req.body;
        let result = await this.parseService.parseAndGetProducts(websiteURL, platformId);
        console.log(websiteURL + ' id:' + platformId);
        res.send(result);
    }
}