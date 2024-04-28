import pool from "../config/db.config";

const createUser = async (userData) => {
  const { username, email } = userData;
  const query = "INSERT INTO users (username, email) VALUES (?, ?)";
  const [result] = await pool.query(query, [username, email]);
  return result.insertId;
};

const getUserById = async (userId) => {
  const query = "SELECT * FROM users WHERE id = ?";
  const [rows] = await pool.query(query, [userId]);
  return rows[0];
};

const getUsers = async () => {
  const query = "SELECT * FROM users";
  const [rows] = await pool.query(query);
  return rows;
};

const updateUser = async (userId, userData) => {
  const { username, email } = userData;
  const query = "UPDATE users SET username = ?, email = ? WHERE id = ?";
  await pool.query(query, [username, email, userId]);
};

const deleteUser = async (userId) => {
  const query = "DELETE FROM users WHERE id = ?";
  await pool.query(query, [userId]);
};

export { createUser, getUserById, getUsers, updateUser, deleteUser };
