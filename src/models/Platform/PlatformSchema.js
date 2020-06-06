"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var PlatformSchema = new mongoose_1.Schema({
    id: String,
    name: String,
    url: String,
    is_active: Boolean,
}, {
    timestamps: true
});
exports.default = mongoose_1.model("Platform", PlatformSchema);
