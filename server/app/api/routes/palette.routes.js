const express = require("express");
const { isAuth } = require("../../middlewares/auth.middleware");
const router = express.Router();

const {
    newPalette,
    getAllPalettes,
    getPalettesById,
    deletePaletteById,
    updatePaletteById,
    getAllPalettesByUser
} = require("../controllers/palette.controller");


router.post("/create", [isAuth], newPalette);
router.get("/", [isAuth], getAllPalettes);
router.get("/palettesbyuser", [isAuth], getAllPalettesByUser)
router.get("/:paletteId", [isAuth], getPalettesById);
router.delete("/:paletteId", [isAuth], deletePaletteById)
router.put("/:paletteId", [isAuth], updatePaletteById)

module.exports = router;
