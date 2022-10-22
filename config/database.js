const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const connectDatabase = () => {
  mongoose
    .connect(process.env.DATABASE, {
      // useNewurlParse: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    })
    .then((data) => {
      console.log(`DB connection successful ${data.connection}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDatabase;
