const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
  inventoryType: {
    type: String,
    required: [true, "inventory type require"],
    enum: ["in", "out"],
  },
  foodType: {
    type: String,
    require: [true, "Food specification is required"],
    enum: ["Biryani", "Rice", "Wheat", "Floor", "Masala", "Juice", "Sugar"],
  },
  quantity: {
    type: Number,
    require: [true, "Food quantity is required"],
  },
  Organisation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: [true, "organisation is required"],
  },
  NGO: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: function () {
      return this.inventoryType === "out";
    },
  },
  Donor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: function () {
      return this.invetoryType == "in";
    },
  },
});

module.exports = mongoose.model("Inventory", inventorySchema);
