var path = require("path");

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    app.get("/vegasshowdown", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/vegasshowdown.html"));
    });
    app.get("/hollywoodnights", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/hollywoodnights.html"));
    });
    app.get("/motownboogie", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/motownboogie.html"));
    });
}