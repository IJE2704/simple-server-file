const express = require("express");
const { foodData } = require("../data/food");
const router = express.Router();

router.post(
  "/addFood",
  (req, res, next) => {
    const newFood = req.body;
    if (!newFood.id) {
      return res.status(404).json({ message: "Food id is not found" });
    }

    const existId = foodData.find((data) => data.id === newFood.id);
    if (existId) {
      return res.status(404).json({ message: "This food id is already exist" });
    }

    const existFood = foodData.find((data) => data.name === newFood.name);
    if (existFood) {
      return res.status(404).json({ message: "This food is already exist" });
    }
    next();
  },
  (req, res) => {
    const newFood = req.body;

    foodData.push(newFood);
    console.log(foodData)
    res
      .status(201)
      .json({ message: "Food added successfully", data: foodData });
  }
);

router.get("/food", (req, res) => {
  res.send(foodData);
});

module.exports = router;
