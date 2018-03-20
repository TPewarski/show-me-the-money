var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/app/baseView.html'));
});

app.get('/bundle', function(req, res){
    res.sendFile(path.join(__dirname + '/src/entry.jsx'));
});

app.use('/*', (req, res) => {
    res.status(404).send(`Sorry we were unable to locate ${req.originalUrl}`);
});

app.listen(5555);