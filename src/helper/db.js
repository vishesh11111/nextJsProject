
import mongoose from "mongoose"

export const connectDb = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGODB_URL, {
            dbName: "LearnnextJs"
        })
        console.log("db connected... ")
        // console.log(connection);
    } catch (error) {
        console.log("failed to connect with data base");
        console.log(error);
    }
}