import { Schema, Document, model } from 'mongoose';

export interface IPlatform extends Document {
    id: String;
    name: String;
    url: String;
    icon: String;
    timestamps: {
        createdAt: 'created_at';
        updatedAt: 'updated_at';
    }
}

const PlatformSchema : Schema = new Schema ({
    id: String,
    name: String,
    url: String,
    timestamps: {         
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

export default model<IPlatform>("Platform", PlatformSchema);