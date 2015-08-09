(function () {
    'use strict';

    process.stdin.setEncoding('utf8');

    process.stdin.on('readable', function () {
        var chunk = process.stdin.read();
        if (chunk !== null) {
            process.stdout.write('Data! -> ' + chunk);
        }
    });

    process.stdin.on('end', function () {
        process.stderr.write('End!\n');
    });

    process.on('SIGTERM', function () {
        process.stderr.write('Why are you trying to terminate me?!?  :-)\n');
    });

    console.log('Node is running as process #' + process.pid);
}());
