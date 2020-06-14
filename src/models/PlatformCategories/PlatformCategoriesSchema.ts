import { Schema, Document, model } from 'mongoose';

export interface IPlatformCategoriesSchema extends Document { 
    id: String;
    name: String;
    is_active: Boolean;
    timestamps: true;
}

const PlatformCategoriesSchema: Schema = new Schema({
    id: String,
    name: String,
    is_active: Boolean,
},
{
    timestamps: true
});

export default model<IPlatformCategoriesSchema>("PlatformCategories", PlatformCategoriesSchema); 
