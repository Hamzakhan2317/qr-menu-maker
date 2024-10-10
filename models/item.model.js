import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    section: { type: mongoose.Schema.Types.ObjectId, ref: "Section", required: true }, // Reference to the menu
  },
  { timestamps: true },
);

const Item = mongoose.models.Item || mongoose.model("Item", itemSchema);

export default Item;
