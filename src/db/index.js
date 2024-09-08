import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionTnstance = await mongoose.connect(
      `${process.env.DATABASE_URL}/${DB_NAME}`
    );
    console.log(
      `Mongoo Db connected DB Host!! : ${connectionTnstance.connection.host}`
    );
  } catch (error) {
    console.log("MongoDb connection erroe: ", error);
    process.exit(1);
  }
};

export default connectDB;
