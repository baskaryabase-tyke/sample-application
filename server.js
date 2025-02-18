const express = require("express");
const cors = require("cors");
const app = express();
app.use(require('express-status-monitor')());
app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to node application." });
});

app.get("/greet/:name", (req, res) => {
  console.log(`Hello ${req.params.name}`)
  res.json({ message: "Welcome to node application." + ` ${req.params.name}` });
});

app.get("/requests", (req, res) => {
  res.json({requestsLength: requests.length});
});
var requests = [];
app.use(function(req, res, next) {
    requests.push(Date.now());
    next();
});
require("./app/routes/turorial.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
