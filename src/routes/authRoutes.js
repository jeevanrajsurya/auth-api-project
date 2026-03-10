const express = require("express");
const router = express.Router();

const { registerUser, loginUser } = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

// Register
router.post("/register", registerUser);

// Login
router.post("/login", loginUser);

// Protected Route (DUMMY PR)
router.get("/profile", authMiddleware, (req, res) => {
  res.json({
    message: "Profile accessed successfully",
    user: req.user
  });
});

module.exports = router;