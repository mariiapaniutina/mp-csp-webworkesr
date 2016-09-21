var csp = require('js-csp'),
    workerChannel = require('./index.js');
 
var worker = new Worker('echo.js'); // or preferably webworkify + compatible modified echo.js! 
 
var end = csp.timeout(100);
 
var w = workerChannel(worker);
 
csp.go(function* () {
    var count = 0;
    var chi = w.chi;  // Input channel 
    var cho = w.cho;  // Output channel 
    while(true) {
        yield csp.put(chi, ++count);
        var result = yield csp.alts(cho, end);
        if (result.channel === end || result.value === csp.CLOSED) {
            return;
        }
        var msg = result.value;
        console.log(msg.data);
    }
})