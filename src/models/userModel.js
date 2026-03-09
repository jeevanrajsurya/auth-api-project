const pool = require("../config/db");

// create new user
const createUser = async (full_name, email, phone, password) => {
  const query = `
    INSERT INTO users (full_name, email, phone, password)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `;

  const values = [full_name, email, phone, password];

  const result = await pool.query(query, values);
  return result.rows[0];
};

// find user by email
const findUserByEmail = async (email) => {
  const query = "SELECT * FROM users WHERE email = $1";

  const result = await pool.query(query, [email]);
  return result.rows[0];
};

module.exports = {
  createUser,
  findUserByEmail,
};