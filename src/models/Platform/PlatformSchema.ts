import { Schema, Document, model } from 'mongoose';

export interface IPlatform extends Document {
    id: String;
    name: String;
    url: String;
    category: [{
        type: String
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
            'other'
        ],
        default: 'other'
    }];
    is_active: Boolean;
    timestamps: true;
}

const PlatformSchema: Schema = new Schema({
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
},
    {
        timestamps: true
    });

export default model<IPlatform>("Platform", PlatformSchema); 