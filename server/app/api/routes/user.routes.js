const express = require("express");
const router = express.Router();

const {createUser, authenticate} = require("../controllers/user.controller");

router.post("/register", createUser);
router.post("/authenticate", authenticate);

module.exports = router;
