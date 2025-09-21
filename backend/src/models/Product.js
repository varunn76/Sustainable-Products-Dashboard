import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    score: { type: Number, required: true, min: 0, max: 100 },
    description: { type: String },
  },
  { timestamps: true }
);
const Product = mongoose.model("Product", productSchema);

export default Product;
