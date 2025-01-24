const db = require("../models");
const Tutorial = db.tutorials;

exports.Wrapper = (method, data) => {
    switch (method) {
        case "CREATE":
            const tutorial = new Tutorial(data);
            return tutorial.save(data)
        case "FIND":
            return Tutorial.find(data).limit(5)
    }
}