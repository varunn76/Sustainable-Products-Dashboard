import express from "express";
import productRoutes from "./routes/productRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import cors from "cors";

dotenv.config();
const app = express();

connectDB();
const PORT = process.env.PORT || 5001;
console.log("PORT:", process.env.NODE_ENV);

app.use(express.json());
app.use(cors());

app.use("/api/products", productRoutes);

// Middleware
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
