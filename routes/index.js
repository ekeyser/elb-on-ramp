var express = require("express");
var router = new express.Router();

router.get("/", function (req, res, next) {
    "use strict";

    res.setHeader("content-type", "application/json");
    res.send(JSON.stringify({id: "sup bitch"}));
});

module.exports = router;
