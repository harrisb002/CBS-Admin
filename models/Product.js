const { model, Schema, models, default: mongoose } = require("mongoose");

const ProductSchema = new Schema(
  {
    title: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    category: { type: mongoose.Types.ObjectId, ref: "Category" },
    properties: { type: Object },
    images: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

export const Product = models.Product || model("Product", ProductSchema);
