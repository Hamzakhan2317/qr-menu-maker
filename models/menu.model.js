import mongoose from "mongoose";

const menuSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    restaurant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
      required: true,
    }, // Reference to the restaurant
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: "Item" }], // Referencing items in the menu
  },
  { timestamps: true }
);

const Menu = mongoose.models.Menu || mongoose.model("Menu", menuSchema);

export default Menu;
