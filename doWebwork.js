var fib = function(n){
	if(n == 0 || n == 1){
    return n;
  }
  return fib(n-1) + fib(n-2);
};

self.addEventListener('message', function(e) {
	var val = fib(e.data.msg);
    self.postMessage('fib ' + val);
}, false);