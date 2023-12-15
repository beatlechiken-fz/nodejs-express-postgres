import { pool } from "../database/connection.js";

const findAll = async () => {
  const { rows } = await pool.query("SELECT * FROM products");
  return rows;
};

const findById = async (_id) => {
  console.log(_id);
  const query = "SELECT * FROM products WHERE id=$1";
  console.log(query);
  const { rows } = await pool.query(query, [_id]);
  return rows[0];
};

const create = async (productName, description, precio) => {
  const query =
    "INSERT INTO products (product_name, description, precio) VALUES ($1, $2, $3) RETURNING *";
  const { rows } = await pool.query(query, [productName, description, precio]);
  return rows[0];
};

export const productModel = {
  findAll,
  findById,
  create,
};
