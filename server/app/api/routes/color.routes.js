const express = require("express");
const router = express.Router();

const {
    newColor,
    getAllColors,
    getColorById,
    deleteColorById,
    updateColorById
} = require("../controllers/color.controller");

router.get("/", getAllColors);
router.get("/:colorId", getColorById);

//securizar estas rutas con rol admin o eliminarlas
/* router.post("/create", newColor);
router.delete("/:colorId", deleteColorById);
router.put("/:colorId", updateColorById); */

module.exports = router;
