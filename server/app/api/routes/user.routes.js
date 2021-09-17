const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controller");

router.post("/register", userController.create);
router.post("/authenticate", userController.authenticate);
router.post("/logout", userController.logout);
router.put("/:userId", userController.addFavPalette);
module.exports = router;
