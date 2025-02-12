import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
  name: String,
});

// ✅ Correctly export the model
export const Restaurant =
  mongoose.models.Restaurant || mongoose.model("Restaurant", restaurantSchema);
