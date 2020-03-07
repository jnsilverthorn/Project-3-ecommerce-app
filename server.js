require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;

const app = express();

// Parse request as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// //if in production, serve up our minified react application
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

app.use(routes);

//establish connection to mongodb
const MONGODB_CONNECT = process.env.MONGODB_URI || "mongodb://localhost/store";

//connect to mongo
mongoose.connect(MONGODB_CONNECT);

app.listen(PORT, () => {
  console.log(`PORT LISTENING ON PORT: ${PORT}`);
});
