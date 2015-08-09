// Load mathfun.js from same directory

(function () {
    'using strict';

    var mathfun = require('./mathfun');

    var processResults = function (err, results, time) {
        if (err) {
            console.log("ERROR: " + err.message);
        } else {
            console.log("The results are: " + results + " (" + time + " ms)");
        }
    };
    
    var i = 0;
    for (i = 0; i < 10; i += 1) {
        console.log("Calling 'evenDoubler' with paramter '" + i + "'");
        mathfun.evenDoubler(i, processResults);
    }
    console.log("-----");

    console.log("The 'foo' variable from module 'mathfun' = " + mathfun.foo);

    // Should return undefined, since maxTime is not exported
    console.log("The 'maxtime' variable is not exported: " + mathfun.maxTime);
}());
