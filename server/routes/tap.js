const express = require("express");
const router = express.Router();
const controller = require("../controllers/tap");

router.get("/taplist", controller.taplist);
router.post("/tap", controller.witetap);
router.patch("/updatetap",controller.updatetap);
router.delete("/deletetap",controller.deletetap);

module.exports = router;

//누군가 oder,walker를 검색할 때 짧은 소통하는 구간