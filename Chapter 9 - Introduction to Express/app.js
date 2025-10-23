//Core Modules
const http = require('http');

// External Module
const express = require('express');

// Local Module
//const reqHandler = require('./user');  curently not working

const app = express();

const server = http.createServer((req,res) => {
    console.log(req);
});
const PORT = 3002;
server.listen(PORT, () => {
    console.log(`Server running at https://localhost:${PORT}`);
});