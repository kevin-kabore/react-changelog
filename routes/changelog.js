var express = require("express");
var router = express.Router();
var async = require("express-async-await");
var fetch = require("node-fetch");

router.get("/changelog", async function(req, res, next) {
  try {
    var gistPromise = await fetch(
      "https://api.github.com/gists/1eb6340640744e6114d6a648b5c01542"
    );
    var json = await gistPromise.json();
    var file = json.files["releaseTest.md"];
    res.send(file);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
