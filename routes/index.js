var express = require("express");
var router = new express.Router();

router.get("/", function (req, res, next) {
    "use strict";

    res.setHeader("content-type", "application/json");
    res.send(JSON.stringify({status: "OK"}));
});

module.exports = router;
