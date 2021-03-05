const router = require("express").Router();
const fs = require("fs");
const path = require("path");
const savedNotes = require("../db/db.json")

updateDb = () => {
    fs.writeFile(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify(savedNotes),
        function writeJSON(err) {
            if (err) return console.log(err);
        }
    )
}



module.exports = (app) => {

    app.get("../api/notes", function (req, res) {
        res.json({ savedNotes });
    });

    app.post("./api/notes", function (req, res) {
        savedNotes.push(req.body);
        res.json({ savedNotes });

    });
    updateDb();
};

module.exports = router;