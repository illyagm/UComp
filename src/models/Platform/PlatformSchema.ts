import { Schema, Document, model } from 'mongoose';

export interface IPlatform extends Document {
    id: String;
    name: String;
    url: String;
    is_active: Boolean;
    timestamps: true;
}

const PlatformSchema: Schema = new Schema({
    id: String,
    name: String,
    url: String,
    is_active: Boolean, 
},
    {
        timestamps: true
    });

export default model<IPlatform>("Platform", PlatformSchema); 