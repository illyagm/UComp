import { Controller, Post, Get, ClassMiddleware, Middleware } from "@overnightjs/core";
import { Request, Response } from 'express';
import { IPlatformsService } from '../../services/platformService/IPlatformsService';
import PlatformsService from '../../services/platformService/PlatformsService';

//insert iplatform and platformservice


@Controller('platform')

export class PlatformController {
    private platformsService:IPlatformsService = new PlatformsService();
    @Get('getPlatforms')
    private async getAllAlbums(req: Request, res: Response) {
        let result = await this.platformsService.getPlatforms();
        res.send(result);
    }   
    @Post('insertPlatform')
    private async insertPlatform(req: Request, res: Response) {
       let { name, url, icon } = req.body;
       let result = await this.platformsService.insertPlatform(name, url, icon);
       res.send(result);
    }  
    @Post('editPlatform')
    private async editPlatform(req: Request, res: Response) {
        let { platformId, name, url, icon } = req.body;
        let result = await this.platformsService.updatePlatform(platformId, name, url, icon);
        res.send(result);
    }  
    @Post('deletePlatform')
    private async deletePlatform(req: Request, res: Response) {
        let { platformId } = req.body;
        let result = await this.platformsService.deletePlatform(platformId);
        res.send(result);
    }  
}