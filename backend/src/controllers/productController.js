import Product from "../models/Product.js";

export const getProducts = async (req, res, next) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 6;
    const category = req.query.category || null;
    const search = req.query.search || "";

    const query = {};
    if (category) query.category = category;
    if (search) query.title = { $regex: search, $options: "i" };

    const total = await Product.countDocuments(query);

    const skip = (page - 1) * limit;
    const totalPages = Math.ceil(total / limit);

    const products = await Product.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    res.json({
      products,
      currentPage: page,
      totalPages,
      totalProducts: total,
    });
  } catch (error) {
    next(error);
  }
};

export const addProduct = async (req, res, next) => {
  try {
    const { title, category, description, score } = req.body;
    if (!title || !category || score === undefined) {
      res.status(400);
      throw new Error("Please provide all required fields");
    }

    const product = new Product({ title, category, description, score });
    const savedProduct = await product.save();

    res
      .status(201)
      .json({ message: "Product added successfully", product: savedProduct });
  } catch (error) {
    next(error);
  }
};
export const updateProduct = async (req, res, next) => {
  try {
    const { title, category, description, score } = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        title,
        category,
        description,
        score,
      },
      { new: true }
    );

    if (!updatedProduct) {
      res.status(404);
      throw new Error("Product not found");
    }
    res.json({
      message: "Product updated successfully",
      product: updatedProduct,
    });
  } catch (error) {
    next(error);
  }
};
export const deleteProduct = async (req, res, next) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      res.status(404);
      throw new Error("Product not found");
    }

    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    next(error);
  }
};
