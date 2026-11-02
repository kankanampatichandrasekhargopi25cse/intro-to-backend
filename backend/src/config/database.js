import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log(`✅ MongoDB connected successfully! Host: ${connectionInstance.connection.host}`);
        return connectionInstance;
    } catch (error) {
        console.log("❌ MongoDB connection failed: ", error.message);
        throw error;
    }
};

export default connectDB;
