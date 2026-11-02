import dotenv from "dotenv";
import connectDB from "./config/database.js";
import app from "./app.js";

dotenv.config({
    path: "./.env"
});

const startServer = async () => {
    try {
        const PORT = process.env.PORT || 4000;

        // Start Express server listener
        const server = app.listen(PORT, () => {
            console.log(`\n=================================================`);
            console.log(`🚀 Server is running at port: ${PORT}`);
            console.log(`🌐 Base URL: http://localhost:${PORT}`);
            console.log(`=================================================`);
        });

        server.on("error", (error) => {
            console.log("Server ERROR:", error);
            throw error;
        });

        // Connect to MongoDB Atlas
        if (process.env.MONGODB_URI && !process.env.MONGODB_URI.includes("<username>")) {
            console.log("📡 Connecting to MongoDB Atlas...");
            await connectDB();
        } else {
            console.log("\n⚠️ Notice: MONGODB_URI in .env is currently a placeholder.");
            console.log("👉 Paste your MongoDB Atlas cluster URI into .env to enable database operations.\n");
        }
    } catch (err) {
        console.log("MongoDB connection failed !!!", err.message);
    }
};

startServer();
