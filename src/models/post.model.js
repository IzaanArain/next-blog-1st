import mongoose from "mongoose";

const { Schema } = mongoose

const postScheme = new Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const postModel = mongoose.models.Post ||  mongoose.model("Post", postScheme)
export default postModel;
