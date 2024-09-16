import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Restaurant =
  mongoose.models.Restaurant || mongoose.model("Restaurant", restaurantSchema);

export default Restaurant;
