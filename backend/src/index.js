const { ApolloServer } = require("apollo-server");

const query = require("./query");
const types = require("./types");
const resolvers = require("./resolvers");

const typeDefs = [query, ...types];

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
