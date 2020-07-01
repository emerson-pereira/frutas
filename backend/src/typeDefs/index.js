const query = require("./query");
const mutation = require("./mutation");
const types = require("./types");

const schema = [query, mutation];

const typeDefs = [...schema, types];

module.exports = typeDefs;
