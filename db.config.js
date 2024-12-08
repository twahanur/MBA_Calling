const mongoose = require("mongoose");
const dbConnect = (dbName) => {
    const db = mongoose.createConnection(`${process.env.MONGODB_URI}/${dbName}?retryWrites=true&w=majority`)
    console.log("mongodb connection: ", db)
        .on("error", (error) => {
          console.log(`${dbName} failed to connect.`);
          console.log(error);
        })
        .on("connected", () => {
          console.log(`${dbName} connected.`);
        })
        .on("disconnected", () => {
          console.log(`${dbName} disconnected.`);
        });

        

    return db;
}; 

// Database connection
const db = dbConnect('MBACalling');

module.exports = { db };