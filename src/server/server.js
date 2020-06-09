"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = __importStar(require("body-parser"));
var express_fileupload_1 = __importDefault(require("express-fileupload"));
var controllers = __importStar(require("../controllers"));
var mongoose_1 = __importDefault(require("mongoose"));
var core_1 = require("@overnightjs/core");
var logger_1 = require("@overnightjs/logger");
var cors_1 = __importDefault(require("cors"));
var Startup = /** @class */ (function (_super) {
    __extends(Startup, _super);
    function Startup() {
        var _this = _super.call(this, true) || this;
        _this.SERVER_STARTED = 'Server started on port: ';
        mongoose_1.default.connect('mongodb://localhost:27017/UComparator', { useNewUrlParser: true, useUnifiedTopology: true });
        mongoose_1.default.set('useFindAndModify', false);
        _this.app.use(express_fileupload_1.default({
            createParentPath: true,
        }));
        _this.app.use(bodyParser.json());
        _this.app.use(bodyParser.urlencoded({ extended: true }));
        _this.app.use(cors_1.default());
        _this.setupControllers();
        return _this;
    }
    Startup.prototype.setupControllers = function () {
        var ctlrInstances = [];
        for (var name_1 in controllers) {
            if (controllers.hasOwnProperty(name_1)) {
                var controller = controllers[name_1];
                ctlrInstances.push(new controller());
            }
        }
        _super.prototype.addControllers.call(this, ctlrInstances);
    };
    Startup.prototype.start = function (port) {
        var _this = this;
        this.app.get('*', function (req, res) {
            res.send(_this.SERVER_STARTED + port);
        });
        this.app.listen(port, function () {
            logger_1.Logger.Imp(_this.SERVER_STARTED + port);
        });
    };
    return Startup;
}(core_1.Server));
exports.default = Startup;
