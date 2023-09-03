import mongoose from "mongoose";

export const connectMongodb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("connected to mongo db");
  } catch (error) {
    console.log("Error Connectiong to mongoDb:", error);
  }
};
