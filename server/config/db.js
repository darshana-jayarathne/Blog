const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        mongoose.set('strictQuery',false);
        const conn = await mongoose.connect('mongodb://localhost:27017/node-blog');
        console.log(`Database Connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDb;