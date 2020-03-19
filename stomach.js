/**
 * Module dependencies.
 */
"use strict";
var express = require("express"),
    path = require("path"),
    app = express(),
    compression = require("compression");
app.use(compression({level: 9}));//express compression to support gzip

app.set("port", process.env.PORT || 8081);
app.use(express.static(path.join(__dirname, "dist")));

// angular启动页
app.get("/", function (req, res) {
    res.sendfile("dist/index.html");
});

app.listen(app.get("port"), function () {
    console.log("Express server listening on port " + app.get("port"));
});
