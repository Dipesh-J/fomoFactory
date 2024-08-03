import express from "express";
import dotenv from "dotenv";
import route from "./route/route";
import { mongooseConnect } from "./utils/db/mongoose.connect";
import cors from "cors";
dotenv.config();

const app = express();
app.use(express.json())
app.use(cors({
  origin: ["http://localhost:3000","http://localhost:5173"], // Frontend's origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'] // Allowed headers
}));


app.use("/",route)

mongooseConnect();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
