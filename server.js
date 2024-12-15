const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const userSchema = require("./schema/userSchema");
const userResolver = require("./resolvers/userResolver");

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: userSchema,
    rootValue: userResolver,
    graphiql: true, // GraphiQL UI enabled
  })
);

app.listen(4000, () => {
  console.log("Server running at http://localhost:4000/graphql");
});