const router = require("express").Router();
const auth = require("../../api/middleware/auth");
const { createUser,  login, getUsers, getUserById, getUserByIdNumber } = require("./user.controller");

router.post("/", createUser);
router.post("/id", getUserByIdNumber);

router.get("/all", getUsers);
router.get("/", auth, getUserById);
router.post("/login", login);
module.exports = router;
