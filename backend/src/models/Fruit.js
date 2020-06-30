const mongoose = require("mongoose");

const FruitSchema = mongoose.Schema({
  name: String,
  nutritions: {
    sugar: String,
    calories: String,
  },
});

module.exports = mongoose.model("Fruit", FruitSchema);
