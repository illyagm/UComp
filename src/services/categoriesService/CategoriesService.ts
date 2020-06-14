import { ICategoriesService } from './ICategoriesService';
import { IPlatformCategoriesRepository } from '../../repositories/platformCategoriesRepository/IPlatformCategoriesRepository';
import PlatformCategoriesRepository from '../../repositories/platformCategoriesRepository/PlatformCategoriesRepository';

export default class CategoriesService implements ICategoriesService {
    private categoriesRepository:IPlatformCategoriesRepository = new PlatformCategoriesRepository;
    public async getCategories(): Promise<any> {
        return await this.categoriesRepository.getCategories();
    }
    public async insertCategory(name: String): Promise<any> {
        return await this.categoriesRepository.insertCategory(name);
    }
    public async updateCategory(categoryId: String, name: String): Promise<any> {
        return await this.categoriesRepository.updateCategory(categoryId, name);
    }
    public async deleteCategory(categoryId: String): Promise<any> {
        return await this.categoriesRepository.deleteCategory(categoryId);
    }
}