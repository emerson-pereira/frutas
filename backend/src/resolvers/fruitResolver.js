const Fruit = require("../models/Fruit");

const fruitResolver = {
  Query: {
    fruits() {
      return Fruit.find();
    },
    fruit(_, { id }) {
      return Fruit.findById(id);
    },
  },
  Mutation: {
    createFruit(_, { fruit }) {
      const newFruit = new Fruit(fruit);
      return newFruit.save();
    },
    updateFruit(_, { id, fruit }) {
      return Fruit.findByIdAndUpdate(id, fruit, {
        new: true,
        useFindAndModify: false,
      });
    },
    deleteFruit(_, { id }) {
      return Fruit.findByIdAndRemove(id, {
        useFindAndModify: false,
      });
    },
  },
};

module.exports = fruitResolver;
