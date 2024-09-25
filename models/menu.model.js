import mongoose from "mongoose";

const menuSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    restaurant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
      required: true,
    }, // Reference to the restaurant
    status: { type: String, default: "active" }, // New column for status
    sections: [{ type: mongoose.Schema.Types.ObjectId, ref: "Section" }], // Referencing items in the menu
    note: { type: String }, // New column for notes
    description: { type: String }, // New column for description
  },
  { timestamps: true }
);

const Menu = mongoose.models.Menu || mongoose.model("Menu", menuSchema);

export default Menu;
