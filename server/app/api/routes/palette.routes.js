const express = require("express");
const router = express.Router();

const paletteController = require("../controllers/palette.controller");

router.post("/create", paletteController.create);
router.get("/:paletteId", paletteController.getById);
router.get("/", paletteController.getAll);
router.put("/:paletteId", paletteController.updateById);
router.delete("/:paletteId", paletteController.deleteById);

module.exports = router;
