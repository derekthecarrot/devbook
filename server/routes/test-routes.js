const { testGet } = require("../controllers/test-controllers");

const router = require("express").Router();

router.get("/", testGet);

module.exports = router;
