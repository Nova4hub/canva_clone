import mongoose, { Document, Schema, model, models } from "mongoose";

export interface IImage extends Document {
    title: string;
    transformationType: string;
    publicId: string;
    secureURL: URL;
    width?: number;
    height?: number;
    config?: object;
    transformationURL?: URL;
    aspectRatio?: string;
    color?: string;
    prompt?: string;
    author?: {
        _id: String,
        firstName: String,
        lastName: String
    }
    createdAt?: Date;
    updatedAt?: Date;
}


const ImageSchema = new Schema({
    tite:{type: String , required: true},
    transformationType:{type: String , required: true},
    publicId:{type: String , required: true},
    secureURL:{type: URL , required: true},
    width: {type: Number},
    height: {type: Number},
    config: {type: Object},
    transformationURL: {type: URL},
    aspectRatio: {type: String},
    color: {type: String},
    prompt: {type: String},
    author: {type: Schema.Types.ObjectId, ref:"User"},
    createAt: {type:Date, default: Date.now},
    updateAt: {type:Date, default: Date.now},
})

const Image = models?.image || model('image', ImageSchema)

export default Image