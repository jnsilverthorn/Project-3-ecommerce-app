const app = require("express").Router();
const flightController = require("../../controllers/flightController");

app.route("/save/:id").post(flightController.saveFlight);

app.route("/search/:depart-:arrival").get(flightController.searchFlight);

module.exports = app;
