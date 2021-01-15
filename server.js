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

app.get("/", (req, res) => {
	// Health Check
	res.send("The API is up and running.");
});

app.get("*", (req, res) => {
	res.status(404).json({
		error: 404,
		message: "The resource you requested does not exist."
	});
});

app.listen(process.env.PORT || 8080, () => {
    console.log(`This application is running on port ${process.env.PORT || 8080} `);
});