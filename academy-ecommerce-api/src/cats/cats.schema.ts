import * as mongoose from 'mongoose';

export const CatsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: false,
    },
    breed: {
        type: String,
        required: false,
    },
});