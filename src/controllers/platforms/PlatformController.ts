import { Controller, Post, Get, ClassMiddleware, Middleware } from "@overnightjs/core";
import { Request, Response } from 'express';

//insert iplatform and platformservice


@Controller('platform')

export class PlatformController {
    @Get('getPlatforms')
    private async getAllAlbums(req: Request, res: Response) {
        res.send('all platforms');
    }   
    @Post('insertPlatform')
    private async insertPlatform(req: Request, res: Response) {
        res.send('insert platform');  
    }  
    @Post('editPlatform')
    private async editPlatform(req: Request, res: Response) {
        res.send('edit platform');  
    }  
    @Post('deletePlatform')
    private async deletePlatform(req: Request, res: Response) {
        res.send('delete platform');  
    }  
}