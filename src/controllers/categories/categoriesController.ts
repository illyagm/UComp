import { Controller, Post, Get, ClassMiddleware, Middleware } from "@overnightjs/core";
import { Request, Response } from 'express';
import { ICategoriesService } from "../../services/categoriesService/ICategoriesService";
import CategoriesService from "../../services/categoriesService/CategoriesService";

//insert iplatform and platformservice


@Controller('category')

export class CategoryController {
    private categoriesService:ICategoriesService = new CategoriesService();
    @Get('getCategories')
    private async getAllAlbums(req: Request, res: Response) {
        let result = await this.categoriesService.getCategories();
        res.send(result);
    }   
    @Post('insertCategory')
    private async insertPlatform(req: Request, res: Response) {
       let { name } = req.body;
       let result = await this.categoriesService.insertCategory(name);
       res.send(result);
    }  
    @Post('editCategory')
    private async editPlatform(req: Request, res: Response) {
        let { categoryId, name } = req.body;
        let result = await this.categoriesService.updateCategory(categoryId, name);
        res.send(result);
    }  
    @Post('deleteCategory')
    private async deletePlatform(req: Request, res: Response) {
        let { categoryId } = req.body;
        let result = await this.categoriesService.deleteCategory(categoryId);
        res.send(result);
    }  
}