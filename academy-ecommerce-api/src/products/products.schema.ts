import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  image: {
    type: [String],
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  manufacturer: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  topNotes: {
    type: [String],
    required: true,
  },
  heartNotes: {
    type: [String],
    required: true,
  },
  baseNotes: {
    type: [String],
    required: true,
  },
  perfumeGroup: {
    type: [String],
    required: true,
  },
});
