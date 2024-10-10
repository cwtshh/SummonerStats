const mongoose = require('mongoose');
const DB_URL = process.env.CONNECTION_STRING;

const connectDb = async() => {
    try {
        await mongoose.connect(DB_URL);
        console.log('Connected to database');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDb;