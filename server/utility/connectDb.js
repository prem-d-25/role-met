import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const mongConnect = async () => {
  try {
    await mongoose.connect(
      process.env.DB_url,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("MongoDB connected successfully!");
  } catch (err) {
    console.error("MongoDB connection failed:", err);
    process.exit(1);
  }
};

export default mongConnect;
