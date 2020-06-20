"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var got_1 = __importDefault(require("got"));
var cheerio_1 = __importDefault(require("cheerio"));
var ParseRepository = /** @class */ (function () {
    function ParseRepository() {
    }
    ParseRepository.prototype.parseAndGetProducts = function (urlWebsite, searchPlatformId) {
        return __awaiter(this, void 0, void 0, function () {
            var fetchDataWebsite, html, $, productsMap, productsMap3, productsMap4, productsMap5, productsMap2, productsMap6;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fetchDataWebsite = function (url) { return __awaiter(_this, void 0, void 0, function () {
                            var result, error_1;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, , 3]);
                                        return [4 /*yield*/, got_1.default.get('' + urlWebsite)];
                                    case 1:
                                        result = _a.sent();
                                        return [2 /*return*/, result.body];
                                    case 2:
                                        error_1 = _a.sent();
                                        throw error_1;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); };
                        return [4 /*yield*/, fetchDataWebsite(urlWebsite)];
                    case 1:
                        html = _a.sent();
                        $ = cheerio_1.default.load(html);
                        //parse depending on the selected platform id
                        switch (searchPlatformId) {
                            case "_w5itz82oz":
                                try {
                                    productsMap = $('.s-result-item > .sg-col-inner > .celwidget').map(function (index, elem) { return __awaiter(_this, void 0, void 0, function () {
                                        var imageUrl, productName, productUrl, productRating, numberOfRatings, productPrice;
                                        return __generator(this, function (_a) {
                                            imageUrl = $(elem).find('.s-image').attr('src');
                                            productName = $(elem).find('.a-text-normal > span.a-text-normal').text().trim();
                                            productUrl = 'https://www.amazon.es/' + $(elem).find('.rush-component > .a-link-normal').attr('href');
                                            productRating = $(elem).find('.a-icon > .a-icon-alt').text().trim();
                                            numberOfRatings = $(elem).find('.a-link-normal > .a-size-base').text().trim();
                                            productPrice = $(elem).find('span .a-price-whole').children().remove().end().text().trim();
                                            console.log('Created Promise for url: ' + imageUrl);
                                            return [2 /*return*/, {
                                                    index: index,
                                                    imageUrl: imageUrl,
                                                    productName: productName,
                                                    productUrl: productUrl,
                                                    productRating: productRating,
                                                    numberOfRatings: numberOfRatings,
                                                    productPrice: productPrice
                                                }];
                                        });
                                    }); }).get();
                                    return [2 /*return*/, Promise.all(productsMap)];
                                }
                                catch (error) {
                                    throw error;
                                }
                            case "_c2a2a6g33":
                                try {
                                    productsMap3 = $('._2rxjGA').map(function (index, elem) { return __awaiter(_this, void 0, void 0, function () {
                                        var imageUrl, productName, productUrl, productRating, numberOfRatings, productPrice;
                                        return __generator(this, function (_a) {
                                            imageUrl = $(elem).find('._2vZ2Ja > img').attr('src');
                                            productName = $(elem).find('._1LGeh3 > ._1ZwRcm > span').text().trim();
                                            productUrl = 'https://www.eneba.com' + $(elem).find('._2idjXd').attr('href');
                                            productRating = 'NA';
                                            numberOfRatings = 'NA';
                                            productPrice = ($(elem).find('._2zDsnm > ._3RZkEb').text().trim()).replace('€', '');
                                            return [2 /*return*/, {
                                                    index: index,
                                                    imageUrl: imageUrl,
                                                    productName: productName,
                                                    productUrl: productUrl,
                                                    productRating: productRating,
                                                    numberOfRatings: numberOfRatings,
                                                    productPrice: productPrice
                                                }];
                                        });
                                    }); }).get();
                                    return [2 /*return*/, Promise.all(productsMap3)];
                                }
                                catch (error) {
                                    throw error;
                                }
                            case "_homqldlzj":
                                try {
                                    productsMap4 = $('.search > .item').map(function (index, elem) { return __awaiter(_this, void 0, void 0, function () {
                                        var imageUrl, productName, productUrl, productRating, numberOfRatings, productPrice;
                                        return __generator(this, function (_a) {
                                            imageUrl = $(elem).find('.cover > img').attr('src');
                                            productName = $(elem).find('.name').text().trim();
                                            productUrl = $(elem).find('.cover').attr('href');
                                            productRating = 'NA';
                                            numberOfRatings = 'NA';
                                            productPrice = ($(elem).find('.shadow > .price').text().trim() + ' (' + $(elem).find('.shadow > .discount').text().trim() + ' descuento) ').replace('€', '');
                                            return [2 /*return*/, {
                                                    index: index,
                                                    imageUrl: imageUrl,
                                                    productName: productName,
                                                    productUrl: productUrl,
                                                    productRating: productRating,
                                                    numberOfRatings: numberOfRatings,
                                                    productPrice: productPrice
                                                }];
                                        });
                                    }); }).get();
                                    return [2 /*return*/, Promise.all(productsMap4)];
                                }
                                catch (error) {
                                    throw error;
                                }
                            case "_0c7dkduby":
                                try {
                                    productsMap5 = $('.searchCont').map(function (index, elem) { return __awaiter(_this, void 0, void 0, function () {
                                        var imageUrl, productName, productUrl, productRating, numberOfRatings, productPrice;
                                        return __generator(this, function (_a) {
                                            imageUrl = 'https://www.mmoga.es' + $(elem).find('.itemImg > a').attr('data-background');
                                            productName = $(elem).find('.itemCont > a').text().trim();
                                            productUrl = 'https://www.mmoga.es' + $(elem).find('.itemImg > a').attr('href');
                                            productRating = 'NA';
                                            numberOfRatings = 'NA';
                                            productPrice = ($(elem).find('.itemPrice > .smallBoldText').text().trim()).replace('€', '');
                                            return [2 /*return*/, {
                                                    index: index,
                                                    imageUrl: imageUrl,
                                                    productName: productName,
                                                    productUrl: productUrl,
                                                    productRating: productRating,
                                                    numberOfRatings: numberOfRatings,
                                                    productPrice: productPrice
                                                }];
                                        });
                                    }); }).get();
                                    return [2 /*return*/, Promise.all(productsMap5)];
                                }
                                catch (error) {
                                    throw error;
                                }
                            case "_5pjw82zqk":
                                try {
                                    productsMap2 = $('#articleListContent > .row > .col-md-4').map(function (index, elem) { return __awaiter(_this, void 0, void 0, function () {
                                        var imageUrl, productName, productUrl, productRating, numberOfRatings, productPrice;
                                        return __generator(this, function (_a) {
                                            imageUrl = $(elem).find('.tarjeta-articulo__foto > .img-fluid').attr('data-src');
                                            productName = $(elem).find('.tarjeta-articulo__nombre > h3 > a').text().trim();
                                            productUrl = 'https://www.pccomponentes.com' + $(elem).find('.tarjeta-articulo__nombre > h3 > a').attr('href');
                                            productRating = $(elem).find('.rating-container > .rating-stars').attr('style');
                                            numberOfRatings = ($(elem).find('.tarjeta-articulo__extras > .total_valoration').text().trim()).replace(/[()]/g, '');
                                            productPrice = ($(elem).find('.tarjeta-articulo__precios > .tarjeta-articulo__precio-actual').text().trim()).replace('€', '');
                                            return [2 /*return*/, {
                                                    index: index,
                                                    imageUrl: imageUrl,
                                                    productName: productName,
                                                    productUrl: productUrl,
                                                    productRating: productRating,
                                                    numberOfRatings: numberOfRatings,
                                                    productPrice: productPrice
                                                }];
                                        });
                                    }); }).get();
                                    return [2 /*return*/, Promise.all(productsMap2)];
                                }
                                catch (error) {
                                    throw error;
                                }
                            case "_iqegee9gd":
                                try {
                                    productsMap6 = $('.search_result_row').map(function (index, elem) { return __awaiter(_this, void 0, void 0, function () {
                                        var imageUrl, productName, productUrl, productRating, numberOfRatings, productPrice;
                                        return __generator(this, function (_a) {
                                            imageUrl = $(elem).find('img').attr('src');
                                            productName = $(elem).find('span.title').text().trim();
                                            productUrl = $(elem).attr('href');
                                            productRating = 'NA';
                                            numberOfRatings = 'NA';
                                            productPrice = ($(elem).find('.search_price').children().remove().end().text()).replace('€', '');
                                            return [2 /*return*/, {
                                                    index: index,
                                                    imageUrl: imageUrl,
                                                    productName: productName,
                                                    productUrl: productUrl,
                                                    productRating: productRating,
                                                    numberOfRatings: numberOfRatings,
                                                    productPrice: productPrice
                                                }];
                                        });
                                    }); }).get();
                                    return [2 /*return*/, Promise.all(productsMap6)];
                                }
                                catch (error) {
                                    throw error;
                                }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return ParseRepository;
}());
exports.default = ParseRepository;
