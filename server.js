const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// parse requests
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

// define a simple route
app.get('/', (req, res) => {
    res.json({"message":"Welcome"});
});

app.get('/node', (req, res) => {
    res.json({"message":"Welcome to node"});
});

app.listen(3000, () => {
    console.log("server is running in port 3000");
});
