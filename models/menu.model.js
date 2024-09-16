import mongoose from "mongoose";

const menuSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Menu =
  mongoose.models.Menu || mongoose.model("Menu", menuSchema);

export default Menu;
