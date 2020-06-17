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
    ParseRepository.prototype.parseAmazon = function (urlWebsite) {
        return __awaiter(this, void 0, void 0, function () {
            var fetchDataWebsite, html, $_1, productsMap, error_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fetchDataWebsite = function (url) { return __awaiter(_this, void 0, void 0, function () {
                            var result, error_2;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, , 3]);
                                        return [4 /*yield*/, got_1.default.get('' + urlWebsite)];
                                    case 1:
                                        result = _a.sent();
                                        return [2 /*return*/, result.body];
                                    case 2:
                                        error_2 = _a.sent();
                                        throw error_2;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, fetchDataWebsite(urlWebsite)];
                    case 2:
                        html = _a.sent();
                        $_1 = cheerio_1.default.load(html);
                        productsMap = $_1('.s-result-item > .sg-col-inner > .celwidget').map(function (index, elem) { return __awaiter(_this, void 0, void 0, function () {
                            var imageUrl, productName, productUrl, productRating, numberOfRatings, productPrice;
                            return __generator(this, function (_a) {
                                imageUrl = $_1(elem).find('.s-image').attr('src');
                                productName = $_1(elem).find('.a-text-normal > span.a-text-normal').text().trim();
                                productUrl = $_1(elem).find('.rush-component > .a-link-normal').attr('href');
                                productRating = $_1(elem).find('.a-icon > .a-icon-alt').text().trim();
                                numberOfRatings = $_1(elem).find('.a-link-normal > .a-size-base').text().trim();
                                productPrice = $_1(elem).find('.a-price-whole').text().trim();
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
                    case 3:
                        error_1 = _a.sent();
                        throw error_1;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ParseRepository.prototype.parseEneba = function (urlWebsite) {
        return __awaiter(this, void 0, void 0, function () {
            var fetchDataWebsite, html, $_2, productsMap3, error_3;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fetchDataWebsite = function (url) { return __awaiter(_this, void 0, void 0, function () {
                            var result, error_4;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, , 3]);
                                        return [4 /*yield*/, got_1.default.get('' + urlWebsite)];
                                    case 1:
                                        result = _a.sent();
                                        return [2 /*return*/, result.body];
                                    case 2:
                                        error_4 = _a.sent();
                                        throw error_4;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, fetchDataWebsite(urlWebsite)];
                    case 2:
                        html = _a.sent();
                        $_2 = cheerio_1.default.load(html);
                        productsMap3 = $_2('._2rxjGA').map(function (index, elem) { return __awaiter(_this, void 0, void 0, function () {
                            var imageUrl, productName, productUrl, productRating, numberOfRatings, productPrice;
                            return __generator(this, function (_a) {
                                imageUrl = $_2(elem).find('._2vZ2Ja > src').attr('src');
                                productName = $_2(elem).find('._1LGeh3 > ._1ZwRcm > span').text().trim();
                                productUrl = $_2(elem).find('._2idjXd').attr('href');
                                productRating = '';
                                numberOfRatings = '';
                                productPrice = $_2(elem).find('._2zDsnm > ._3RZkEb').text().trim();
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
                    case 3:
                        error_3 = _a.sent();
                        throw error_3;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ;
    ParseRepository.prototype.parseInstantGaming = function (urlWebsite) {
        return __awaiter(this, void 0, void 0, function () {
            var fetchDataWebsite, html, $_3, productsMap4, error_5;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fetchDataWebsite = function (url) { return __awaiter(_this, void 0, void 0, function () {
                            var result, error_6;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, , 3]);
                                        return [4 /*yield*/, got_1.default.get('' + urlWebsite)];
                                    case 1:
                                        result = _a.sent();
                                        return [2 /*return*/, result.body];
                                    case 2:
                                        error_6 = _a.sent();
                                        throw error_6;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, fetchDataWebsite(urlWebsite)];
                    case 2:
                        html = _a.sent();
                        $_3 = cheerio_1.default.load(html);
                        productsMap4 = $_3('.search > .item').map(function (index, elem) { return __awaiter(_this, void 0, void 0, function () {
                            var imageUrl, productName, productUrl, productRating, numberOfRatings, productPrice;
                            return __generator(this, function (_a) {
                                imageUrl = $_3(elem).find('.cover > img').attr('href');
                                productName = $_3(elem).find('.name').text().trim();
                                productUrl = $_3(elem).find('.cover').attr('href');
                                productRating = '';
                                numberOfRatings = '';
                                productPrice = $_3(elem).find('.shadow > .price').text().trim() + ' (' + $_3(elem).find('.shadow > .discount').text().trim() + ' descuento)';
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
                    case 3:
                        error_5 = _a.sent();
                        throw error_5;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ;
    ParseRepository.prototype.parseMMOGA = function (urlWebsite) {
        return __awaiter(this, void 0, void 0, function () {
            var fetchDataWebsite, html, $_4, productsMap5, error_7;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fetchDataWebsite = function (url) { return __awaiter(_this, void 0, void 0, function () {
                            var result, error_8;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, , 3]);
                                        return [4 /*yield*/, got_1.default.get('' + urlWebsite)];
                                    case 1:
                                        result = _a.sent();
                                        return [2 /*return*/, result.body];
                                    case 2:
                                        error_8 = _a.sent();
                                        throw error_8;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, fetchDataWebsite(urlWebsite)];
                    case 2:
                        html = _a.sent();
                        $_4 = cheerio_1.default.load(html);
                        productsMap5 = $_4('.searchCont').map(function (index, elem) { return __awaiter(_this, void 0, void 0, function () {
                            var imageUrl, productName, productUrl, productRating, numberOfRatings, productPrice;
                            return __generator(this, function (_a) {
                                imageUrl = $_4(elem).find('.itemImg > a').attr('data-background');
                                productName = $_4(elem).find('.itemCont > a').text().trim();
                                productUrl = $_4(elem).find('.itemImg > a').attr('href');
                                productRating = '';
                                numberOfRatings = '';
                                productPrice = $_4(elem).find('.itemPrice > .smallBoldText').text().trim() + ' ( ' + $_4(elem).find('.itemPrice > del').text().trim() + ' antes)';
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
                    case 3:
                        error_7 = _a.sent();
                        throw error_7;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ;
    ParseRepository.prototype.parsePCComponentes = function (urlWebsite) {
        return __awaiter(this, void 0, void 0, function () {
            var fetchDataWebsite, html, $_5, productsMap2, error_9;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fetchDataWebsite = function (url) { return __awaiter(_this, void 0, void 0, function () {
                            var result, error_10;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, , 3]);
                                        return [4 /*yield*/, got_1.default.get('' + urlWebsite)];
                                    case 1:
                                        result = _a.sent();
                                        return [2 /*return*/, result.body];
                                    case 2:
                                        error_10 = _a.sent();
                                        throw error_10;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, fetchDataWebsite(urlWebsite)];
                    case 2:
                        html = _a.sent();
                        $_5 = cheerio_1.default.load(html);
                        productsMap2 = $_5('#articleListContent > .row > .col-md-4').map(function (index, elem) { return __awaiter(_this, void 0, void 0, function () {
                            var imageUrl, productName, productUrl, productRating, numberOfRatings, productPrice;
                            return __generator(this, function (_a) {
                                imageUrl = $_5(elem).find('.tarjeta-articulo__foto > .img-fluid').attr('src');
                                productName = $_5(elem).find('.tarjeta-articulo__nombre > h3 > a').text().trim();
                                productUrl = $_5(elem).find('.tarjeta-articulo__nombre > h3 > a').attr('href');
                                productRating = $_5(elem).find('.rating-container > .rating-stars').attr('style');
                                numberOfRatings = $_5(elem).find('.tarjeta-articulo__extras > .total_valoration').text().trim();
                                productPrice = $_5(elem).find('.tarjeta-articulo__precios > .tarjeta-articulo__precio-actual').text().trim();
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
                    case 3:
                        error_9 = _a.sent();
                        throw error_9;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ;
    ParseRepository.prototype.parseSteam = function (urlWebsite) {
        return __awaiter(this, void 0, void 0, function () {
            var fetchDataWebsite, html, $_6, productsMap6, error_11;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fetchDataWebsite = function (url) { return __awaiter(_this, void 0, void 0, function () {
                            var result, error_12;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, , 3]);
                                        return [4 /*yield*/, got_1.default.get('' + urlWebsite)];
                                    case 1:
                                        result = _a.sent();
                                        return [2 /*return*/, result.body];
                                    case 2:
                                        error_12 = _a.sent();
                                        throw error_12;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, fetchDataWebsite(urlWebsite)];
                    case 2:
                        html = _a.sent();
                        $_6 = cheerio_1.default.load(html);
                        productsMap6 = $_6('.search_result_row').map(function (index, elem) { return __awaiter(_this, void 0, void 0, function () {
                            var imageUrl, productName, productUrl, productRating, numberOfRatings, productPrice;
                            return __generator(this, function (_a) {
                                imageUrl = $_6(elem).find('img').attr('src');
                                productName = $_6(elem).find('span.title').text().trim();
                                productUrl = $_6(elem).attr('href');
                                productRating = '';
                                numberOfRatings = '';
                                productPrice = $_6(elem).find('.search_price_discount_combined').text().trim();
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
                    case 3:
                        error_11 = _a.sent();
                        throw error_11;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ;
    return ParseRepository;
}());
exports.default = ParseRepository;
