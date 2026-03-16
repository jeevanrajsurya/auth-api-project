const express = require("express");

const router = express.Router();

const { adminLogin, getDashboardStats, getRecentBookings, adminLogout } = require("../controllers/adminController");

const adminMiddleware = require("../middleware/adminMiddleware");


// admin login
router.post("/login", adminLogin);

//admin logout
router.post("/logout", adminMiddleware, adminLogout);

// dashboard stats
router.get("/dashboard/stats", adminMiddleware, getDashboardStats);

// recent bookings
router.get("/dashboard/recent-bookings", adminMiddleware, getRecentBookings);

module.exports = router;