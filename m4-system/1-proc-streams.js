// A slight variation of the sample found here:
// http://nodejs.org/api/process.html#process_process_stdin

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
        process.stdout.write('End!\n');
    });

}());
