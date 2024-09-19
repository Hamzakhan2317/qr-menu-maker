import mongoose from "mongoose";

const menuSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    restaurant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
      required: true,
    }, // Reference to the restaurant
    sections: [{ type: mongoose.Schema.Types.ObjectId, ref: "Section" }], // Referencing items in the menu
  },
  { timestamps: true }
);

const Menu = mongoose.models.Menu || mongoose.model("Menu", menuSchema);

export default Menu;
