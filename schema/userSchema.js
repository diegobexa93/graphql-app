const { buildSchema } = require("graphql");

const userSchema = buildSchema(`
  type User {
    id: ID!
    name: String
    email: String
    city: String
  }

  type Query {
    getUser(id: ID!): User
  }

  type Mutation {
    createUser(name: String!, email: String!): User
  }
`);

module.exports = userSchema;