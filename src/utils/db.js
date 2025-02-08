import mongoose from "mongoose";


let conn;

const connectDB = async () => {
    try {
        conn = conn ?? await mongoose.connect(process.env.MONGO_URI);
        console.log(`Connectes successfully ${conn.connection.host}/${conn.connection.name}`)
        return conn
    } catch (error) {
        console.error("Connection Failed!")
       throw new Error("Connection Failed!");
    }
};

export default connectDB;