"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var PlatformCategoriesSchema = new mongoose_1.Schema({
    id: String,
    name: String,
    is_active: Boolean,
}, {
    timestamps: true
});
exports.default = mongoose_1.model("PlatformCategories", PlatformCategoriesSchema);
