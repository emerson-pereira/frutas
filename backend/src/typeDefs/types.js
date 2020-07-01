const { gql } = require("apollo-server");

const types = gql`
  type Fruit {
    id: ID!
    name: String
    nutritions: Nutritions
  }

  type Nutritions {
    calories: String
    sugar: String
  }
`;

module.exports = types;
