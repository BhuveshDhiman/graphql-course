import express from "express";
import { graphqlHTTP } from "express-graphql";
import resolvers from "./resolvers";
import schema from "./schema";

const app = express();

app.get("/", (rqe, res) => {
  res.send("working");
});

const root = resolvers;

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(8082, () => console.log("Running at 8082"));
