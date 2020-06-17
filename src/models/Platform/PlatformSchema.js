"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var PlatformSchema = new mongoose_1.Schema({
    id: String,
    name: String,
    url: String,
    category: [{
            type: String,
            enum: [
                'electronica',
                'software',
                'videojuegos',
                'juguetes',
                'ropa',
                'calzado',
                'cripto',
                'fotografia',
                'instrumentos-musicales',
                'libros',
                'alimentacion',
                'alimentacion-animal',
                'limpieza',
                'hogar',
                'otros',
                'other'
            ],
            default: 'other'
        }],
    is_active: Boolean,
}, {
    timestamps: true
});
exports.default = mongoose_1.model("Platform", PlatformSchema);
