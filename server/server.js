import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import employeeRoutes from "./routes/EmployeeRoutes.js";
import * as dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(express.json({ limit: "50mb" }));

const corsOptions = {
  origin: "http://localhost:3000",
  // origin: "*",
  credentials: true,
  //access-control-allow-credentials:true
  // optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(cookieParser());
connectDB();

// Error Handling
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "something went wrong!";

  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

//Routes
app.use("/", employeeRoutes);

app.get("*", (req, res) => {
  res.send(`api routes`);
});
// Creating Express Server
const PORT = process.env.PORT || 5000;
// const port = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
