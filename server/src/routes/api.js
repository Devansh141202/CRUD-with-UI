const express =  require('express');
const customerRoute =  require("../customer/customerRoute");

const app = express();

app.use('/customers',customerRoute);

module.exports = app;