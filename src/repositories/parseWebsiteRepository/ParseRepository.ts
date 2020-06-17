import { IParseRepository } from './IParseRepository';
import got from 'got';
import cheerio from 'cheerio';
export default class ParseRepository implements IParseRepository {

    public async parseAmazon(urlWebsite: String): Promise<any> {
        const fetchDataWebsite = async (url: String) => {
            try {
                const result = await got.get('' + urlWebsite);
                return result.body;
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
                let productUrl = $(elem).find('.rush-component > .a-link-normal').attr('href');
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
            return Promise.all(productsMap);
        } catch (error) {
            throw error;
        }
    }

    public async parseEneba(urlWebsite: String): Promise<any> {
        const fetchDataWebsite = async (url: String) => {
            try {
                const result = await got.get('' + urlWebsite);
                return result.body;
            } catch (error) {
                throw error;
            }
        };
        try {
            const html = await fetchDataWebsite(urlWebsite);
            const $ = cheerio.load(html);
            //Eneba
            //there's no rating on the product cars
            const productsMap3 = $('._2rxjGA').map(async (index, elem) => {
                let imageUrl = $(elem).find('._2vZ2Ja > src').attr('src');
                let productName = $(elem).find('._1LGeh3 > ._1ZwRcm > span').text().trim();
                let productUrl = $(elem).find('._2idjXd').attr('href');
                let productRating = '';
                let numberOfRatings = '';
                let productPrice = $(elem).find('._2zDsnm > ._3RZkEb').text().trim();
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
            return Promise.all(productsMap3);

        } catch (error) {
            throw error;
        }
    };

    public async parseInstantGaming(urlWebsite: String): Promise<any> {
        const fetchDataWebsite = async (url: String) => {
            try {
                const result = await got.get('' + urlWebsite);
                return result.body;
            } catch (error) {
                throw error;
            }
        };

        try {
            const html = await fetchDataWebsite(urlWebsite);
            const $ = cheerio.load(html);
            //Instant-gaming
            const productsMap4 = $('.search > .item').map(async (index, elem) => {
                let imageUrl = $(elem).find('.cover > img').attr('href');
                let productName = $(elem).find('.name').text().trim();
                let productUrl = $(elem).find('.cover').attr('href');
                let productRating = '';
                let numberOfRatings = '';
                let productPrice = $(elem).find('.shadow > .price').text().trim() + ' (' + $(elem).find('.shadow > .discount').text().trim() + ' descuento)';
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
            return Promise.all(productsMap4);

        } catch (error) {
            throw error;
        }
    };

    public async parseMMOGA(urlWebsite: String): Promise<any> {
        const fetchDataWebsite = async (url: String) => {
            try {
                const result = await got.get('' + urlWebsite);
                return result.body;
            } catch (error) {
                throw error;
            }
        };
        try {
            const html = await fetchDataWebsite(urlWebsite);
            const $ = cheerio.load(html);
            //MMoGaming 
            const productsMap5 = $('.searchCont').map(async (index, elem) => {
                let imageUrl = $(elem).find('.itemImg > a').attr('data-background');
                let productName = $(elem).find('.itemCont > a').text().trim();
                let productUrl = $(elem).find('.itemImg > a').attr('href');
                let productRating = '';
                let numberOfRatings = '';
                let productPrice = $(elem).find('.itemPrice > .smallBoldText').text().trim() + ' ( ' + $(elem).find('.itemPrice > del').text().trim() + ' antes)';
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
            return Promise.all(productsMap5);

        } catch (error) {
            throw error;
        }
    };

    public async parsePCComponentes(urlWebsite: String): Promise<any> {
        const fetchDataWebsite = async (url: String) => {
            try {
                const result = await got.get('' + urlWebsite);
                return result.body;
            } catch (error) {
                throw error;
            }
        };
        try {
            const html = await fetchDataWebsite(urlWebsite);
            const $ = cheerio.load(html);
            //PCCOMPONENTES
            const productsMap2 = $('#articleListContent > .row > .col-md-4').map(async (index, elem) => {
                let imageUrl = $(elem).find('.tarjeta-articulo__foto > .img-fluid').attr('src');
                let productName = $(elem).find('.tarjeta-articulo__nombre > h3 > a').text().trim();
                let productUrl = $(elem).find('.tarjeta-articulo__nombre > h3 > a').attr('href');
                let productRating = $(elem).find('.rating-container > .rating-stars').attr('style');
                let numberOfRatings = $(elem).find('.tarjeta-articulo__extras > .total_valoration').text().trim();
                let productPrice = $(elem).find('.tarjeta-articulo__precios > .tarjeta-articulo__precio-actual').text().trim();
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
            return Promise.all(productsMap2);

        } catch (error) {
            throw error;
        }
    };

    public async parseSteam(urlWebsite: String): Promise<any> {
        const fetchDataWebsite = async (url: String) => {
            try {
                const result = await got.get('' + urlWebsite);
                return result.body;
            } catch (error) {
                throw error;
            }
        };
        try {
            const html = await fetchDataWebsite(urlWebsite);
            const $ = cheerio.load(html);
            //Steam
            const productsMap6 = $('.search_result_row').map(async (index, elem) => {
                let imageUrl = $(elem).find('img').attr('src')
                let productName = $(elem).find('span.title').text().trim();
                let productUrl = $(elem).attr('href');
                let productRating = '';
                let numberOfRatings = '';
                let productPrice = $(elem).find('.search_price_discount_combined').text().trim();
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
            return Promise.all(productsMap6);
        } catch (error) {
            throw error;
        }
    };

}