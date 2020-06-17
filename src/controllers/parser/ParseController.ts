import { Controller, Post, Get, ClassMiddleware, Middleware } from "@overnightjs/core";
import { Request, Response } from 'express';
import { IParseService } from '../../services/parseService/IParseService';
import ParseService from '../../services/parseService/ParseService';

@Controller('searchResults')

export class ParserController {
    private parseService:IParseService = new ParseService();

    @Get('getAmazonProducts')
    private async getAmazonProducts(req: Request, res: Response){
        let { websiteURL } = req.body;
        let result = await this.parseService.parseAmazon(websiteURL);
        console.log(websiteURL);
        res.send(result);
    }
    @Get('getEnebaProducts')
    private async getEneba(req: Request, res: Response){
        let { websiteURL } = req.body;
        let result = await this.parseService.parseEneba(websiteURL);
        console.log(websiteURL);
        res.send(result);
    }
    @Get('getIGProducts')
    private async getIG(req: Request, res: Response){
        let { websiteURL } = req.body;
        let result = await this.parseService.parseInstantGaming(websiteURL);
        console.log(websiteURL);
        res.send(result);
    }
    @Get('getMMOGAProducts')
    private async getMMOGA(req: Request, res: Response){
        let { websiteURL } = req.body;
        let result = await this.parseService.parseMMOGA(websiteURL);
        console.log(websiteURL);
        res.send(result);
    }
    @Get('getPCCompProducts')
    private async getPCComp(req: Request, res: Response){
        let { websiteURL } = req.body;
        let result = await this.parseService.parsePCComponentes(websiteURL);
        console.log(websiteURL);
        res.send(result);
    }
    @Get('getSteamProducts')
    private async getSteam(req: Request, res: Response){
        let { websiteURL } = req.body;
        let result = await this.parseService.parseSteam(websiteURL);
        console.log(websiteURL);
        res.send(result);
    }
}