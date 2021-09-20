const express = require("express");
const { isAuth } = require("../../middlewares/auth.middleware");
const router = express.Router();

const {
    newPalette,
    getAllPalettes,
    getPalettesById,
    deletePaletteById,
    updatePaletteById
} = require("../controllers/palette.controller");


router.post("/create", [isAuth], newPalette);
router.get("/", [isAuth], getAllPalettes);
router.get("/:paletteId", getPalettesById);
router.delete("/:paletteId", deletePaletteById)
router.put("/:paletteId", updatePaletteById)

module.exports = router;
