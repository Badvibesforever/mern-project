import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.set("trust proxy", 1);

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);

      try {
        const hostname = new URL(origin).hostname;

        const isAllowed =
          hostname === "localhost" ||
          hostname.endsWith(".vercel.app") ||
          hostname.includes("jesses-projects-61296501.vercel.app");

        if (isAllowed) {
          return callback(null, true);
        }

        callback(new Error("CORS: Origin not allowed → " + origin));
      } catch (err) {
        callback(err);
      }
    },
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

app.get("/api/test", (req, res) => {
  res.json({ message: "Test route works" });
});

app.listen(PORT, () => {
  connectDB();
  console.log("🚀 Server started at http://localhost:" + PORT);
});
