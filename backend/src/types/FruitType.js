const { gql } = require("apollo-server");

const fruitType = gql`
  type Fruit {
    id: ID!
    name: String
    nutritions: Nutritions
  }
`;

module.exports = fruitType;
