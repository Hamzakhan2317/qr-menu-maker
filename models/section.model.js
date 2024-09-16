import mongoose from "mongoose";

const sectionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Section =
  mongoose.models.Section || mongoose.model("Section", sectionSchema);

export default Section;
