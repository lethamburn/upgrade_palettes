const express = require("express");
const router = express.Router();

const colorController = require("../controllers/color.controller");

router.post("/create", colorController.create);
router.get("/:colorId", colorController.getById)

module.exports = router;
