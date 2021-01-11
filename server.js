const express = require('express');
const bodyParser = require('body-parser');
const apiRoute = require('./routes/currencyApi');
const app = express();

app.use(bodyParser.json()); // application/json

app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();    
});

app.use(apiRoute);

app.listen(8080 || process.env.PORT, () => {
    console.log(`This application is running on port ${8080 || process.env.PORT} `);
});