const { gql } = require("apollo-server");

const query = gql`
  type Query {
    fruits: [Fruit]
    fruit(id: ID!): Fruit
  }
`;

module.exports = query;
