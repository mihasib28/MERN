import mongoose from "mongoose";
import { DB_MERN } from "../constants.js";
import dotenv from "dotenv";


dotenv.config();

const PORT = process.env.PORT || 3000;

const connectDB = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_MERN}`)
        console.log(`MongoDB connected !! Host: ${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.log('Database not connected', error);
        process.exit(1)
    }
}

export default connectDB