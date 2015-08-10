(function () {
    'use strict';

    var https = require('https');

    console.log("Going to make request...");

    // // Version 1:  http.request with string URL

    // var req = https.request('https://www.google.com/', function (response) {
    //     console.log(response.statusCode);
    //     response.pipe(process.stdout);
    // });

    // req.end();

    // // Version 2:  http.request with options object

    // var options = {
    //     host: 'encrypted.google.com',
    //     port: 443,
    //     path: '/',
    //     method: 'GET'
    // };

    // req = https.request(options, function (response) {
    //     console.log(response.statusCode);
    //     response.pipe(process.stdout);
    // });

    // req.end();

    // // Version 3:  http.get()

    // https.get('https://www.google.com/', function (response) {
    //     console.log(response.statusCode);
    //     response.pipe(process.stdout);
    // });

    // Version 4:  pluralsight.com, notice does not follow redirects

    https.get('https://www.pluralsight.com/', function (response) {
        console.log(response.statusCode);
        response.pipe(process.stdout);
    });
}());
