const Fruit = require("../models/Fruit");

const fruitsResolver = {
  Query: {
    fruits() {
      return Fruit.find();
    },
  },
};

module.exports = fruitsResolver;
