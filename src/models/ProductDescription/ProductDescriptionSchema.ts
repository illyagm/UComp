import { Schema, Document, model } from 'mongoose';

export interface IProductDescription extends Document {
    id: String;
    name: String;
    header: String;
    body: String;
    footer: String;
    links: String;
    pic: String;
    timestamps: {
        createdAt: 'created_at';
        updatedAt: 'updated_at';
    }
}

const ProductDescriptionSchema : Schema = new Schema ({
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

export default model<IProductDescription>("ProductDescription", ProductDescriptionSchema);
