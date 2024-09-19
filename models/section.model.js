import mongoose from "mongoose";

const sectionSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    menus: [{ type: mongoose.Schema.Types.ObjectId, ref: "Item" }], // Referencing items in the menu
  },
  { timestamps: true }
);

const Section =
  mongoose.models.Section || mongoose.model("Section", sectionSchema);

export default Section;
