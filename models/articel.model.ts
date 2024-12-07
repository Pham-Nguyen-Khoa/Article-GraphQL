import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
    title: String,
    avatar: String,
    description: String,
    categoryId: String,
    deleted: {
        type: Boolean,
        default: false,
    },
    deletedAt: Date
}, {
    timestamps: true,
});

const Articel = mongoose.model("Articel", articleSchema, "Articels");

export default  Articel;


