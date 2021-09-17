const express = require("express");
const router = express.Router();

const {
    newPalette,
    getAllPalettes,
    getPalettesById,
    deletePaletteById,
    updatePaletteById
} = require("../controllers/palette.controller");

router.post("/create", newPalette);
router.get("/", getAllPalettes);
router.get("/:paletteId", getPalettesById);
router.delete("/:paletteId", deletePaletteById)
router.put("/:paletteId", updatePaletteById)

module.exports = router;
