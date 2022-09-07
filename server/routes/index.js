const express = require("express");
const router = express.Router();

const main = require("./main");
const orders = require("./orders");
const proposals = require("./proposals");
const reviews = require("./reviews");
const taps = require("./taps");
const clients = require("./clients");
const votes = require("./votes");
const workers = require("./workers");

router.use("/orders", orders);
router.use("/proposals", proposals);
router.use("/reviews", reviews);
router.use("/taps", taps);
router.use("/clients", clients);
router.use("/votes", votes);
router.use("/workers", workers);
router.use("/", main);

module.exports = router;