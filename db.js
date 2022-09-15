const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();
const {JWT_SECRET,mongoURI} = require('./config/keys')
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