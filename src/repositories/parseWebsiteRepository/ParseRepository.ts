import { IParseRepository } from './IParseRepository';
import axios from 'axios';
import cheerio from 'cheerio';

export default class ParseRepository implements IParseRepository {

    public async getWebsiteDataHTML(urlWebsite: String): Promise<any> {
        // Usage!
        const fetchDataWebsite = async (url: String) => {
            try {
                const result = await axios.get('' + urlWebsite);
                return result.data;
            } catch (error) {
                throw error;
            }
        };
        
        try {
            const html = await fetchDataWebsite(urlWebsite);
            const $ = cheerio.load(html);
            //AMAZON
            const productsMap = $('.s-result-item > .sg-col-inner > .celwidget').map(async (index, elem) => {
                let imageUrl = $(elem).find('.s-image').attr('src');
                let productName = $(elem).find('.a-text-normal > span.a-text-normal').text().trim();
                let productUrl =  $(elem).find('.rush-component > .a-link-normal').attr('href');
                let productRating = $(elem).find('.a-icon > .a-icon-alt').text().trim();
                let numberOfRatings = $(elem).find('.a-link-normal > .a-size-base').text().trim();
                let productPrice = $(elem).find('.a-price-whole').text().trim();
                console.log('Created Promise for url: ' + imageUrl);
                    return {
                        index,
                        imageUrl,
                        productName,
                        productUrl,
                        productRating,
                        numberOfRatings,
                        productPrice
                    }
            }).get();

            //PCCOMPONENTES
            return Promise.all(productsMap);
        } catch (error) {
            throw error;
        }





    }
}

/*

products: {
    productImageUrl,
    productTitle,
    productRating,
    numberOfRatings,
    productUrl
    price
}

producto no patrocinado: div class: sg-col-4-of-24 sg-col-4-of-12 sg-col-4-of-36 s-result-item s-asin sg-col-4-of-28 sg-col-4-of-16 sg-col sg-col-4-of-20 sg-col-4-of-32
producto patrocinado: div class: sg-col-4-of-24 sg-col-4-of-12 sg-col-4-of-36 s-result-item s-asin sg-col-4-of-28 sg-col-4-of-16 AdHolder sg-col sg-col-4-of-20 sg-col-4-of-32

*/