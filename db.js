const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();
const mongoURI = process.env.MONGO_URI;

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, 
        {
            useNewUrlParser: "true",
            useUnifiedTopology: "true"
          
          },
        ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;