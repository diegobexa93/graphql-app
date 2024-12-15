const express = require("express");
const mongoose = require("mongoose");
const { graphqlHTTP } = require("express-graphql");
const userSchema = require("./schema/userSchema");
const userResolver = require("./resolvers/userResolver");

const app = express();

mongoose.connect("mongodb://localhost:27017/graphql-example");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => console.log("Connected to MongoDB"));

app.use(
  "/graphql",
  graphqlHTTP({
    schema: userSchema,
    rootValue: userResolver,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("Server running at http://localhost:4000/graphql");
});