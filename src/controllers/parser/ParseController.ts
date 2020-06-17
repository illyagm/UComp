import { Controller, Post, Get, ClassMiddleware, Middleware } from "@overnightjs/core";
import { Request, Response } from 'express';
import { IParseService } from '../../services/parseService/IParseService';
import ParseService from '../../services/parseService/ParseService';

@Controller('parser')

export class ParserController {
    private parseService:IParseService = new ParseService();
    @Get('getHtmlWebsite')
    private async getHtml(req: Request, res: Response){
        let { websiteURL } = req.body;
        let result = await this.parseService.getWebsiteDataHTML(websiteURL);
        console.log(websiteURL);
        res.send(result);
    }
}