const express = require('express');

const app = express();

const productRoutes = require('./api/routes/products')

app.use('/products', productRoutes)

app.listen(3000)