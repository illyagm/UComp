import { IPlatformCategoriesRepository } from './IPlatformCategoriesRepository';
import PlatformCategoriesSchema from '../../models/PlatformCategories/PlatformCategoriesSchema';

export default class PlatformCategoriesRepository implements IPlatformCategoriesRepository {
    public async getCategories(): Promise<any> {
        return await PlatformCategoriesSchema.find({ is_active: true });        
    }
    public async insertCategory(name: String): Promise<any> {
        const checkExistanceCategory = PlatformCategoriesSchema.find({ name:name, is_active: true });
        if ((await checkExistanceCategory).length !== 0) {
            return 'Category Already Exists!';
        } else {
           return await PlatformCategoriesSchema.insertMany(
               [{
                  id: '_' + Math.random().toString(36).substr(2, 9),
                  name: name,
                  is_active: true
               }]
           )
        }
    }
    public async updateCategory(categoryId: String, name: String): Promise<any> {
        const filter = {
            id: categoryId
        };
        const update = {
            name: name
        };
        return await PlatformCategoriesSchema.findOneAndUpdate(filter, update, {
            new: true
        });
    }
    public async deleteCategory(categoryId: String): Promise<any> {
        const filter = { id : categoryId };
        const update = {
            is_active: false
        };
        return await PlatformCategoriesSchema.findOneAndUpdate(filter, update, {
            new: true
        });    }
}