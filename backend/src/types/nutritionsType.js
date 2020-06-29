const { gql } = require("apollo-server");

const nutritionsType = gql`
  type Nutritions {
    calories: String
    sugar: String
  }
`;

module.exports = nutritionsType;
