import PlatformsSchema from '../../models/Platform/PlatformSchema';
import { IPlatformsRepository } from './IPlatformsRepository';

export default class PlatformsRepository implements IPlatformsRepository {

    public async getPlatforms(): Promise<any> {
        return await PlatformsSchema.find({ is_active: true });
    }

    public async getPlatformsByCategory(categoryFilter: String): Promise<any> {
        console.log('inside repo: ' + categoryFilter)
        return await PlatformsSchema.aggregate( [ { $match: {category: categoryFilter, is_active:true} } ]);
    }

    public async insertPlatform(name: String, url: String, category: String[]): Promise<any> {
        const checkExistancePlatform = PlatformsSchema.find({ name: name, is_active: true });
        if ((await checkExistancePlatform).length !== 0) {
            return 'Platform Already Exists!';
        } else {
            const data= [{
                id: '_' + Math.random().toString(36).substr(2, 9),
                name: name,
                url: url,
                category: category,
                is_active: true
            }];
            console.log(data);
            return await PlatformsSchema.insertMany(
                [{
                    id: '_' + Math.random().toString(36).substr(2, 9),
                    name: name,
                    url: url,
                    category: category,
                    is_active: true
                }]
            )
        }
    }
    public async updatePlatform(platformId: String, name: String, url: String, category: any): Promise<any> {
        const filter = {
            id: platformId
        };
        const update = {
            name: name,
            url: url,
            category: category
        };
        console.log(update);
        return await PlatformsSchema.findOneAndUpdate(filter, update, {
            new: true
        });
    }

    public async deletePlatform(platformId: String): Promise<any> {
        const filter = { id: platformId };
        const update = {
            is_active: false
        };
        return await PlatformsSchema.findOneAndUpdate(filter, update, {
            new: true
        });
    }

}