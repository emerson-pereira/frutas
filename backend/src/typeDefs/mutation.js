const { gql } = require("apollo-server");

const mutation = gql`
  type Mutation {
    createFruit(fruit: FruitInput): Fruit
    updateFruit(id: String, fruit: FruitInput): Fruit
    deleteFruit(id: String): Fruit
  }

  input FruitInput {
    name: String
    nutritions: NutritionsInput
  }

  input NutritionsInput {
    sugar: String
    calories: String
  }
`;

module.exports = mutation;
