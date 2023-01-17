import app from "./app";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT;

const DB: string | any = process.env.DATABASE;

mongoose.set("strictQuery", true);

mongoose.connect(DB, () => {
  console.log("DB connection successful");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
