var factorial = function(n){
  if( n < 2 ) {
    return 1;
  } else {
    return n * factorial( n-1 );
  }
};


var fibonacci = function(n) {
  if( n === 0 ) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }
  return fibonacci(n-1) + fibonacci(n-2);
};
