import { productModel } from "../models/product.model.js";

const getAllProducts = async (req, res) => {
  try {
    const response = await productModel.findAll();
    res.json(response);
  } catch (error) {
    console.log();
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await productModel.findById(id);
    res.json(response);
  } catch (error) {
    console.log();
  }
};

const createProduct = async (req, res) => {
  try {
    const { productName, description, precio } = req.body;
    const response = await productModel.create(
      productName,
      description,
      precio
    );
    res.json(response);
  } catch (error) {
    console.log();
  }
};

export const productController = {
  getAllProducts,
  getProductById,
  createProduct,
};
