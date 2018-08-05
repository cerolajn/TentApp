const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();
const cookieParser = require('cookie-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const mongo = require('mongodb');

// API file for interacting with MongoDB
const api = require('./routes/api');

// Parsers
// this will let us get the data from a POST

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Angular tent-app output folder
app.use(express.static(path.join(__dirname, 'TentApp')));

// API location
app.use('./routes/api', api);

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'))
});

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));
