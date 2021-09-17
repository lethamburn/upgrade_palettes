const express = require("express");
const router = express.Router();

const colorController = require("../controllers/color.controller");

router.post("/create", colorController.create);
router.get("/:colorId", colorController.getById);
router.get("/", colorController.getAll);
router.put("/:colorId", colorController.updateById);
router.delete("/:colorId", colorController.deleteById);

module.exports = router;
