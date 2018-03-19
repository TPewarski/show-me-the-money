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
    console.log('uh oh you dont have a handler for this request', req.originalUrl);
})

app.listen(5555);