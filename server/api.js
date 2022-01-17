/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server.
|
*/

const express = require("express");

// import models so we can interact with the database
const User = require("./models/user"); //unused so far
const Entry = require("./models/Entry")

// import authentication library
const auth = require("./auth");

// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();

//initialize socket
const socketManager = require("./server-socket");
const { resetWatchers } = require("nodemon/lib/monitor/watch");

router.post("/login", auth.login);
router.post("/logout", auth.logout);
router.get("/whoami", (req, res) => {
  if (!req.user) {
    // not logged in
    return res.send({});
  }

  res.send(req.user);
});

router.post("/initsocket", (req, res) => {
  // do nothing if user not logged in
  if (req.user) socketManager.addUser(req.user, socketManager.getSocketFromSocketID(req.body.socketid));
  res.send({});
});

// |------------------------------|
// | write your API methods below!|
// |------------------------------|

router.get("/entries", auth.ensureLoggedIn, (req,res) => {
  Entry.find({creator_id: req.user}).then((entries) => {res.send(entries)}); //add condition, entries for user
  //Entry.find({}).then((entries) => {res.send(entries)});
  //res.send([])
});

router.post("/entry", auth.ensureLoggedIn, (req,res) => {
  const newEntry = new Entry({
    creator_id: req.body.creator_id,
    creator_name: req.body.creator_name,
    score: req.body.score, //command tbd
  });
  newEntry.save().then((entry) => res.send(entry));
});

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
