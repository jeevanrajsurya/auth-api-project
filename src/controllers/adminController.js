const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

// ADMIN LOGIN

const adminLogin = async (req, res) => {

  try {

    const { email, password } = req.body;

    const admin = await User.findOne({ where: { email } });

    if (!admin) {
      return res.status(401).json({
        message: "Invalid email or password"
      });
    }

    if (admin.role !== "admin") {
      return res.status(403).json({
        message: "Access denied. Not an admin"
      });
    }

    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid email or password"
      });
    }

    const accessToken = jwt.sign(
      { id: admin.id, email: admin.email, role: admin.role },
      process.env.JWT_SECRET,
      { expiresIn: "15m" }
    );

    const refreshToken = jwt.sign(
      { id: admin.id },
      process.env.JWT_REFRESH_SECRET,
      { expiresIn: "7d" }
    );

    admin.refreshToken = refreshToken;

    await admin.save();

    res.json({
      message: "Admin login successful",
      accessToken,
      refreshToken
    });

  } catch (error) {

    res.status(500).json({
      message: "Server error"
    });

  }

};

// ADMIN LOGOUT

const adminLogout = async (req, res) => {

  try {

    const adminId = req.user.id;

    const admin = await User.findByPk(adminId);

    if (!admin) {
      return res.status(404).json({
        message: "Admin not found"
      });
    }

    // REMOVE refresh token
    admin.refreshToken = null;

    await admin.save();

    res.json({
      message: "Admin logged out successfully"
    });

  } catch (error) {

    res.status(500).json({
      message: "Server error"
    });

  }

};


// DASHBOARD

const getDashboardStats = async (req, res) => {

  try {

    const totalUsers = await User.count();

    res.json({
      totalUsers,
      totalFlights: 0,
      totalBookings: 0
    });

  } catch (error) {

    res.status(500).json({
      message: "Server error"
    });

  }

};


// RECENT BOOKINGS

const getRecentBookings = async (req, res) => {

  res.json([]);

};


module.exports = {
  adminLogin,
  getDashboardStats,
  getRecentBookings,
  adminLogout
};
