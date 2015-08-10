(function () {
    'use strict';

    function handler(req, res) {
        fs.readFile(__dirname + '/index.html', function (err, data) {
            if (err) {
                res.writeHead(500);
                return res.end('Error loading index.html');
            }

            res.writeHead(200);
            res.end(data);
        });
    }

    var app = require('http').createServer(handler);
    var io = require('socket.io')(app);
    var fs = require('fs');

    // use process.env.PORT and process.env.IP for Cloud9
    // or replace with your port and (optionally) IP as necessary
    app.listen(process.env.PORT, process.env.IP);

    io.on('connection', function (socket) {
        setInterval(function () {
            var timestamp = Date.now();
            console.log('Emitted: ' + timestamp);
            socket.emit('timer', timestamp);
        }, 2000);

        socket.on('submit', function (data) {
            console.log('Submitted: ' + data);
        });
    });

    console.log('Server running!');
}());
