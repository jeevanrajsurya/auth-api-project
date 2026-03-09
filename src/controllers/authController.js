const bcrypt = require("bcrypt");
const { createUser, findUserByEmail } = require("../models/userModel");

// Register User
const registerUser = async (req, res) => {
  try {
    const { full_name, email, phone, password } = req.body;

    // field validation
    if (!full_name || !email || !phone || !password) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    // Name validation 
    const nameRegex = /^[A-Za-z ]+$/;
    if (!nameRegex.test(full_name)) {
      return res.status(400).json({
        message: "Full name should contain only letters"
      });
    }

    // Email  validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        message: "Invalid email format"
      });
    }

    // Phone number validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      return res.status(400).json({
        message: "Phone number must be 10 digits"
      });
    }

    // Password validation
    if (password.length < 6) {
      return res.status(400).json({
        message: "Password must be at least 6 characters"
      });
    }

    // if user already exists
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists"
      });
    }

    //  Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    //  Create user
    const user = await createUser(full_name, email, phone, hashedPassword);

    res.status(201).json({
      message: "User registered successfully",
      user
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error"
    });
  }
};


// Login User
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    //  Required validation
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required"
      });
    }

    //  Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        message: "Invalid email format"
      });
    }

    //  Check if user exists
    const user = await findUserByEmail(email);

    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password"
      });
    }

    //  Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid email or password"
      });
    }

    res.json({
      message: "Login successful",
      user
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error"
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
};