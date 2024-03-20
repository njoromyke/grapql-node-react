const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const morgan = require("morgan");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;

const app = express();

connectDB();

app.use(cors());

app.use(morgan("dev"));

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
    
  })
);

app.get("/", (req, res) => {
  res.send("Welcome to the GraphQL server");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}- in ${process.env.NODE_ENV} mode.Visit http://localhost:${PORT}/graphql`);
});
