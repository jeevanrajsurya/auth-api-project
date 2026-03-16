const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const User = sequelize.define("User", {

  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  full_name: {
    type: DataTypes.STRING,
    allowNull: false
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },

  phone: {
    type: DataTypes.STRING
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false
  },

  refreshToken: {
    type: DataTypes.TEXT
  },

  role: {
    type: DataTypes.STRING,
    defaultValue: "user"
  }

}, {
  tableName: "users",
  timestamps: false
});

module.exports = User;