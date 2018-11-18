function findUniqNumber(arr){
    return arr.find(function(value){
      return arr.indexOf(value) === arr.lastIndexOf(value);
    })[0] || -1;
}
  var A =  [ 1, 1, 1, 2, 1, 1 ];
  console.log(getUniqueFromArray(A));

  var B = [ 0, 0, 0.55, 0, 0 ];
  console.log(getUniqueFromArray(B));

  var C = [ 1, 3, 1, 2, 3, 1 ];
  console.log(getUniqueFromArray(B));
