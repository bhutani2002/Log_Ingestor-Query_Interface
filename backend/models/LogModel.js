const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async() => {
    try{
        const conn = await mongoose.connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true});
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        return conn;
    } catch(error){
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}
// console.log(connectDB);
console.log("Calling connectDB");
connectDB();

// Define MongoDB schema and model
const logSchema = new mongoose.Schema({
    level: String,
    message: String,
    resourceId: String,
    timestamp: Date,
    traceId: String,
    spanId: String,
    commit: String,
    metadata: {
      parentResourceId: String
    }
  });

const LogModel = mongoose.model('Log_Ingestor', logSchema);
module.exports = LogModel