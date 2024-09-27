import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String },
    country: { type: String },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    }, // Reference to the user who owns the restaurant
    menus: [{ type: mongoose.Schema.Types.ObjectId, ref: "Menu" }], // Referencing menus in the restaurant
  },
  { timestamps: true }
);

const Restaurant =
  mongoose.models.Restaurant || mongoose.model("Restaurant", restaurantSchema);

export default Restaurant;
