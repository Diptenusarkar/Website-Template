const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const schema = require("./graphql");

const cors = require("cors");
const mongoose = require("mongoose");
mongoose.pluralize(null);

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());
// Routes Exports
// const resolvers = require("./route/Doctor");
const slotsRoute = require("./route/Slots");
const patientRoute = require("./route/Patient");

// doctor and slot route
// app.use("/", doctorRoute);
app.use("/", slotsRoute);
app.use("/", patientRoute);

// base route
app.get("/", (req, res) => {
  res.send("Zain responding from http rerver");
});

// apollo server
async function startServer() {
  const server = new ApolloServer({
    schema,
    introspection: true,
    cors: {
      origin: "*",
      credentials: true
    },
  });

  await server.start();

  server.applyMiddleware({ app, path: "/api" });
  app.get("/health-check", (req, res, next) => {
    res.send(
      ` Current Server is up and running & listening on ${process.env.PORT}${
        server.graphqlPath
      } at Datetime ${new Date()} `
    );
  });
  // mongodb connection
  mongoose
    .connect(process.env.URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      let port = 8000;
      app.listen(port, () => {
        console.log(`Server started & listening on port ${port}`);
      });
    })
    .catch((error) => {
      console.error("MongoDB connection error:", error);
    });
}
startServer();
