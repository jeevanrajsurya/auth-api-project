const express = require("express");
const router = express.Router();

const { registerUser, loginUser, refreshAccessToken } = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

// Register
router.post("/register", registerUser);

// Login
router.post("/login", loginUser);

// Refresh Token
router.post("/refresh-token", refreshAccessToken);

// Protected Route (DUMMY PR)
router.get("/profile", authMiddleware, (req, res) => {
  res.json({
    message: "Profile accessed successfully",
    user: req.user
  });
});

module.exports = router;