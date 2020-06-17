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
var PlatformSchema_1 = __importDefault(require("../../models/Platform/PlatformSchema"));
var PlatformsRepository = /** @class */ (function () {
    function PlatformsRepository() {
    }
    PlatformsRepository.prototype.getPlatforms = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, PlatformSchema_1.default.find({ is_active: true })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PlatformsRepository.prototype.getPlatformsByCategory = function (categoryFilter) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('inside repo: ' + categoryFilter);
                        return [4 /*yield*/, PlatformSchema_1.default.aggregate([{ $match: { category: categoryFilter, is_active: true } }])];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PlatformsRepository.prototype.insertPlatform = function (name, url, category) {
        return __awaiter(this, void 0, void 0, function () {
            var checkExistancePlatform, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        checkExistancePlatform = PlatformSchema_1.default.find({ name: name, is_active: true });
                        return [4 /*yield*/, checkExistancePlatform];
                    case 1:
                        if (!((_a.sent()).length !== 0)) return [3 /*break*/, 2];
                        return [2 /*return*/, 'Platform Already Exists!'];
                    case 2:
                        data = [{
                                id: '_' + Math.random().toString(36).substr(2, 9),
                                name: name,
                                url: url,
                                category: category,
                                is_active: true
                            }];
                        console.log(data);
                        return [4 /*yield*/, PlatformSchema_1.default.insertMany([{
                                    id: '_' + Math.random().toString(36).substr(2, 9),
                                    name: name,
                                    url: url,
                                    category: category,
                                    is_active: true
                                }])];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PlatformsRepository.prototype.updatePlatform = function (platformId, name, url, category) {
        return __awaiter(this, void 0, void 0, function () {
            var filter, update;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        filter = {
                            id: platformId
                        };
                        update = {
                            name: name,
                            url: url,
                            category: category
                        };
                        console.log(update);
                        return [4 /*yield*/, PlatformSchema_1.default.findOneAndUpdate(filter, update, {
                                new: true
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PlatformsRepository.prototype.deletePlatform = function (platformId) {
        return __awaiter(this, void 0, void 0, function () {
            var filter, update;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        filter = { id: platformId };
                        update = {
                            is_active: false
                        };
                        return [4 /*yield*/, PlatformSchema_1.default.findOneAndUpdate(filter, update, {
                                new: true
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return PlatformsRepository;
}());
exports.default = PlatformsRepository;
