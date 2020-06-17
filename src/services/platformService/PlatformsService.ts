import { IPlatformsRepository } from '../../repositories/platformsRepository/IPlatformsRepository';
import PlatformsRepository from '../../repositories/platformsRepository/PlatformsRepository';
import { IPlatformsService } from './IPlatformsService';

export default class PlatformsService implements IPlatformsService {
    private platformsRepository:IPlatformsRepository = new PlatformsRepository();
    public async getPlatforms(): Promise<any> {
        return await this.platformsRepository.getPlatforms();
    }

    public async getPlatformsByCategory(category: String): Promise<any> {
        return await this.platformsRepository.getPlatformsByCategory(category);
    }
     
    public async insertPlatform(name: String, url: String, category: String[]): Promise<any> {
        return await this.platformsRepository.insertPlatform(name, url, category);
    }

    public async updatePlatform(platformId: String, name: String, url: String, category: String[]): Promise<any> {
        return await this.platformsRepository.updatePlatform(platformId, name, url, category);
    }
    
    public async deletePlatform(platformId: String): Promise<any> {
        return await this.platformsRepository.deletePlatform(platformId);
    }
} 