define("test", ['add', 'umd2', 'umd3'], function(add){
  return function(a){
    return add(a, 2);
  };
});