import * as mongoose from 'mongoose';

export const CartSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  items: {
    type: [Object],
  },
  total: {
    type: Number,
    required: true,
  },
});
