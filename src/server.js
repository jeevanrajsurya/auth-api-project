const express = require("express");
const cors = require("cors");
require("dotenv").config();

const sequelize = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

// database connection
sequelize.sync({ alter: true })
  .then(() => {
    console.log("PostgreSQL connected successfully");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});