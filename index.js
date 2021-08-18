require('dotenv').config();
const express = require('express');
const server = express();
const bodyParser = require('body-parser');

server.use(bodyParser.json());
server.use(bodyParser.urlencoded());



server.use(express.static(process.env.STATIC_FOLDER))

server.use((req, res, next) => {
    console.log(req.method, req.ip, req.path);
    next();
})

server.get("/homepage", (req, res) => {
        res.json({name: 'Tanmoy'});
})

server.get("/person", (req, res) => {
    let name = req.query.name;
    let age = req.query.age;
    res.json({name, age});
})

server.get("/school/:name", (req, res) => {
    let school = req.params.name;
    res.json({school: school});
})


server.post("/data", (req, res) => {
    let name = req.body.name;
    let age = req.body.age;
    res.json({name, age});
})

server.listen(process.env.PORT, function () {
    console.log('server start at: http://localhost:8080');
})