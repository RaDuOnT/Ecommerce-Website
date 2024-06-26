import * as mongoose from 'mongoose';

export const ReviewSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    productId: {
        type: String,
        required: true,
    },
    rating: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    createdAt: {
        type: String,
        required: true,
    },
});