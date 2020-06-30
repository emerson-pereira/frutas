const Fruit = require("../models/Fruit");

const fruitResolver = {
  Query: {
    fruit(parent, args, context, info) {
      return Fruit.findById(args.id);
    },
  },
};

module.exports = fruitResolver;
