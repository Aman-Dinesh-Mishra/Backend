import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    /* console.log("🔍 MONGO_URI:", process.env.MONGO_URI);*/
    const connectionInstance = await mongoose.connect(
      "mongodb+srv://aman:aman123@aman.e8v8ted.mongodb.net"
      /* `${process.env.MONGO_URI}/${DB_NAME}`*/
    );
    console.log(
      `\n MongoDB connection done !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB connection error ", error);
    process.exit(1);
  }
};
export default connectDB;
