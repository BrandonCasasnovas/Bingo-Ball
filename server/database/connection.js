const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // mongodb coonection string
        const con = await mongoose.connect(process.env.MONGO_URI, {
            /**
             * @description useNewUrlParser, useUnifiedTopology, useFindAndModify, and useCreateIndex are no longer 
             * supported options. Mongoose 6 (current iteration) always behaves as if useNewUrlParser, useUnifiedTopology, and useCreateIndex are true, 
             * and useFindAndModify is false. These arguments are no longer needed so were removed from program (lines 15-15).
            */
            // useNewUrlParser:true,
            // useUnifiedTopology:true,
            // useFindAndModify: false,
            // useCreateIndex: true
        })

        console.log(`Mongo DB Connected : ${con.connection.host}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;