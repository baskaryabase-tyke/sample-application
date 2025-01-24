const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = process.env.DB_URL || dbConfig.url;
db.tutorials = require("./tutorial.model.js")(mongoose);
db.authors = require("./author.model.js")(mongoose);

module.exports = db;
