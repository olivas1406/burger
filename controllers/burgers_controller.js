
var express = require("express");
// var app = express();
var router = express.Router();
var burger = require("../models/burger.js");


//app.get("/", function(req, res) {
router.get("/", function(req, res) {
    var holdBurger = {
        burger: []
    };
    burger.selectAll(function(data) {
        for (var i = 0; i < data.length; i++) {
            info.holdBurger.push(data[i]);
        }
        res.render("index", info);
    });
});

router.get("/burgers", function(req, res) {
    burger.selectAll(function(data) {
    res.render("burger_name", {burger: data});
    });
});

router.get("/add", function(req, res) {
    burger.insertOne([req.body.holdBurger], function() {
    res.redirect("/");
    });
});

router.get("/update/:id", function(req, res) {
    burger.updateOne([req.body.devoured], [req.params.id], function() {
    res.redirect("/");
    });
});

router.get("/delete/:id", function(req, res) {
    burger.deleteOne([req.params.id], function() {
    res.redirect("/");
    });
});

module.exports = router;