/* Simple Hello World in Node.js */
function copy(arr1,arr2){
  for(var i=0; i<arr1.length; i+=1){
      arr2[i]=arr1[i];
  }  
}
var fs = require('fs');
var array_string = fs.readFileSync('IntegerArray.txt').toString().split("\n");
var array_int =array_string.map(Number);
var array_int_copy=[];
copy(array_int,array_int_copy);
array_int_copy.sort(function(a,b){ return a-b;});
var n=1;
for (var i=0;i<array_int.length;i+=1){
    if(array_int[i] !== array_int_copy) { n+=1}
}
console.log(n);
