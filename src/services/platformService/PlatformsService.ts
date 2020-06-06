import { IPlatformsService } from './IPlatformsService';
import { IPlatformsRepository } from '../../repositories/platformsRepository/IPlatformsRepository';
import PlatformsRepository from '../../repositories/platformsRepository/PlatformsRepository';

export default class PlatformsService implements IPlatformsService {
    private platformsRepository:IPlatformsRepository = new PlatformsRepository();
    public async getPlatforms(): Promise<any> {
        return await this.platformsRepository.getPlatforms();
    }
    public async insertPlatform(name: String, url: String, icon: String): Promise<any> {
        return await this.platformsRepository.insertPlatform(name, url, icon);
    }
    public async updatePlatform(platformId: String, name: String, url: String, icon: String): Promise<any> {
        return await this.platformsRepository.updatePlatform(platformId, name, url, icon);
    }
    public async deletePlatform(platformId: String): Promise<any> {
        return await this.platformsRepository.deletePlatform(platformId);
    }
}