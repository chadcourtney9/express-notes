const routes = require("express").Router();
const path = require("path");

routes.get("/", function (req, res) {
    res.sendFile(path.join("index.html"))
});

routes.get("/notes", function (req, res) {
    res.sendFile(path.join("../public/notes.html"))
});

routes.get("*", function (req, res) {
    res.sendFile(path.join("index.html"))
});