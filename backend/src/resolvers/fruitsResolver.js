const fruitType = require("../types/FruitType");

const fruitsArray = [
  {
    id: "1",
    name: "Banana",
    nutritions: {
      calories: "1",
      sugar: "1",
    },
  },
  {
    id: "2",
    name: "Apple",
    nutritions: {
      calories: "2",
      sugar: "2",
    },
  },
];

const fruitsResolver = {
  Query: {
    fruits() {
      return fruitsArray;
    },
  },
};

module.exports = fruitsResolver;
