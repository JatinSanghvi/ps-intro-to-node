(function () {
    'use strict';

    var maxTime = 1000;

    // If input is even, double it
    // If input is odd, log error
    // (call takes random amount of time < 1s)
    var evenDoubler = function (v, callback) {
        var waitTime = Math.floor(Math.random() * maxTime + 1);
        if (v % 2 !== 0) {
            setTimeout(function () {
                callback(new Error("Odd input"));
            }, waitTime);
        } else {
            setTimeout(function () {
                callback(null, v * 2, waitTime);
            }, waitTime);
        }
    };

    // Version 1:  Named function to process results:

    // var processResults = function(err, results, time) {
    //     if (err) {
    //         console.log("ERROR: " + err.message);
    //     } else {
    //         console.log("The results are: " + results + " (" + time + " ms)");
    //     }
    // };

    // evenDoubler(4, processResults);
    // evenDoubler(5, processResults);


    // Version 2:  Use anonymous function and track callbacks to print "Done!" message

    var processResults = function (err, results, time) {
        if (err) {
            console.log("ERROR: " + err.message);
        } else {
            console.log("The results are: " + results + " (" + time + " ms)");
        }
    };

    var i = 0;
    for (i = 0; i < 10; i += 1) {
        console.log("Calling evenDoubler for value: " + i);
        evenDoubler(i, processResults);
    }

    console.log("Done!");
    console.log("-----");
}());
