const express = require('express');
const app = express();
const cors = require('cors');

// import routes
const productRoute = require('./routes/productRoute');

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Ecommerce home Route is working! YaY!');
});

app.use('/api/v1/products', productRoute);

module.exports = app;
