import mongoose from "mongoose";
import config from "../config/config.js";;

const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGO_URI);
        console.log("Connected to the database");
    } catch (err) {
        console.log("Error connecting to the database: ", err);
    }
}

export default connectDB;