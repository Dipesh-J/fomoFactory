import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import route from "./route/route";
dotenv.config();

const app = express();
app.use(express.json())

mongoose.connect(
    process.env.MONGO_URI! //{ useNewUrlParser: true, useUnifiedTopology: true }
).then(()=> console.log(`MongoDB Connected Successfully`))
.catch((err)=> console.log(err))

app.use("/",route)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
