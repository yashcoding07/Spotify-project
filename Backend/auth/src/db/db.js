import mongoose from "mongoose"
import config from "../config/config.js"

async function connectDB() {
    try {
        await mongoose.connect(config.MONGO_URI)
        console.log("connected to database");
    } catch (error) {
        console.log("Error connecting to the database: " + error);
    }
}

export default connectDB