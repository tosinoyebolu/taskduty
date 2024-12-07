import mongoose from "mongoose";

let isConnected = false

export const connectedToDb = async () => {

    if(isConnected) {
    console.log("Already connected to the database");
    return true;
}

//establish connection to database
try {
    await mongoose.connect(process.env.MONGODB_URI, {
        dbName: "TaskNotes",
        });
        isConnected = true;
        console.log("MongoDb is Connected");
        return true;
} catch (error) {
    console.error("Failed to connect to MongoDB", error);
return false;
}
};
