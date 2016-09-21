self.addEventListener('message', function (msg) {
    setTimeout( function() {
    	console.log('msg', msg);
        self.postMessage(msg);
    }, 10);
})