// Sample inspired by http://nodejs.org/api/child_process.html

(function () {
    'use strict';

    var spawn = require('child_process').spawn,
        ps = spawn('ps', ['a']),
        grep = spawn('grep', ['node']);

    ps.stdout.pipe(grep.stdin);
    grep.stdout.pipe(process.stdout);

    ps.stderr.on('data', function (data) {
        console.log('ps stderr: ' + data + '\n');
    });

    grep.stderr.on('data', function (data) {
        console.log('grep stderr: ' + data + '\n');
    });
}());
