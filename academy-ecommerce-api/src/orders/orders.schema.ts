import * as mongoose from 'mongoose';

export const OrdersSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    itemId: {
        type: String,
        required: false,
    },
    date: {
        type: Date,
        required: false,
    },
    quantity: {
        type: Number,
        required: false,
    },
    price: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        required: false,
    },
    address: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    zipcode: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
});
