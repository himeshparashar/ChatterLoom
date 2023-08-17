import mongoose from 'mongoose';

let isConnected: boolean = false;

export const connectToDB = async () => {
    mongoose.set("strictQuery", true);

    if (!process.env.MONGODB_URL) {
        throw new Error("MONGODB_URL is not found");
    }
    if (isConnected) {
        console.log("Already connected to DB");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL);

        isConnected = true;
        console.log("Connected to DB");

    } catch (error) {
        console.error("Error connecting to DB");
        throw error;
    }
}