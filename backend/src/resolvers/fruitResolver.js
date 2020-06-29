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

const fruitResolver = {
  Query: {
    fruit(parent, args, context, info) {
      return fruitsArray.find((fruit) => fruit.id === args.id);
    },
  },
};

module.exports = fruitResolver;
