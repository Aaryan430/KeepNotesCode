const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();
const { JWT_SECRET, mongoURI } = require('./config/keys')
const connectToMongo = async () => {
    try {
        mongoose.connect(mongoURI,
            {
                useNewUrlParser: "true",
                useUnifiedTopology: "true"

            },
            () => {
                console.log("Connected to Mongo Successfully");
            })
    }
    catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectToMongo;