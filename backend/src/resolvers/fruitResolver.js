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
    async createFruit(_, { fruit }) {
      const newFruit = new Fruit(fruit);
      return newFruit.save();
    },
    async updateFruit(_, { id, fruit }) {
      const updatedFruit = await Fruit.findByIdAndUpdate(id, fruit, {
        new: true,
        useFindAndModify: false,
      });

      return updatedFruit;
    },
    async deleteFruit(_, { id }) {
      const removedFruit = await Fruit.findByIdAndRemove(id, {
        useFindAndModify: false,
      });
      return removedFruit;
    },
  },
};

module.exports = fruitResolver;
