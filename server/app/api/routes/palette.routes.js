const express = require("express");
const router = express.Router();

const paletteController = require("../controllers/palette.controller");

router.post("/create", paletteController.create);
router.get("/:paletteId", paletteController.getById);
router.get("/", paletteController.getAll);

module.exports = router;
