const express = require("express");
const router = express.Router();

const {
    getAllColors,
    getColorById,
} = require("../controllers/color.controller");

router.get("/", getAllColors);
router.get("/:colorId", getColorById);

module.exports = router;
