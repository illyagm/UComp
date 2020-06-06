"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var ProductDescriptionSchema = new mongoose_1.Schema({
    id: String,
    name: String,
    header: String,
    body: String,
    footer: String,
    links: String,
    pic: String,
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});
exports.default = mongoose_1.model("ProductDescription", ProductDescriptionSchema);
