import mongoose from "mongoose";

const sectionSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    note: { type: String, required: true },
    menu: { type: mongoose.Schema.Types.ObjectId, ref: 'Menu', required: true }, // Reference to the user who owns the restaurant
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: "Item" }], // Referencing items in the menu
  },
  { timestamps: true }
);

const Section =
  mongoose.models.Section || mongoose.model("Section", sectionSchema);

export default Section;
