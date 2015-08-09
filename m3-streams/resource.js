// For use with 2-ext-eventemitter.js

(function () {
    'using strict';

    var util = require('util');
    var EventEmitter = require('events').EventEmitter;

    var Resource = function (m) {

        var maxEvents = m;
        var self = this;

        process.nextTick(function () {
            self.emit('start');

            var count = 0;
            var t = setInterval(function () {
                count += 1;
                self.emit('data', count);

                if (count === maxEvents) {
                    self.emit('end', count);
                    clearInterval(t);
                }
            }, 10);

        });
    };

    util.inherits(Resource, EventEmitter);

    module.exports = Resource;
}());
