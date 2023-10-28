const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  createInventoryController,
  getInventoryController,
} = require("../controllers/inventoryController");

const router = express.Router();

//router
//Ad iventory ||POST
router.post("/create-inventory", authMiddleware, createInventoryController);

//GET ALL FOOD RECRDS
router.get("get-inventroy", authMiddleware, getInventoryController);

module.exports = router;
