const userModel = require("../models/userModel");
const inventoryModel = require("../models/invetoryModel");

//Create inventory
const createInventoryController = async (req, res) => {
  try {
    const { email, inventoryType } = req.body;
    //validation
    const user = await userModel.findOne({ email });
    if (!user) {
      throw new Error("user not found");
    }
    if (inventoryType === "in" && user.role !== "Donor") {
      throw new Error("Not a donor account");
    }
    if (inventoryType === "out" && user.role !== "NGO") {
      throw new Error("Not a NGO");
    }
    //SAVE RECORD
    const inventory = new inventoryModel(req.body);
    await inventory.save();
    return res.status(201).send({
      success: true,
      message: "New Donation Added",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "error in create inventory API",
      error,
    });
  }
};

//GET ALL BLOOD RECORD
const getInventoryController = async (req, res) => {
  try {
    const inventory = await inventoryModel
      .find({
        Organisation: req.body.userId,
      })
      .populate("Donor")
      .populate("NG0")
      .sort({ createdAt: -1 });
    return res.status(200).send({
      success: true,
      message: "get all records successfully",
      inventory,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "error in inventory",
      error,
    });
  }
};

module.exports = { createInventoryController, getInventoryController };
