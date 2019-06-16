
//for of  - 순회하기

var data = [ 1, 2, undefined, NaN, null, ""];
 for(var i = 0 ; i < data.length ; i++){
    console.log(data[i]);
 }
console.log('============================================');
 data.forEach(function(value){
 	console.log(value);	
 });

console.log('============================================');
for(let idx in data){
	console.log(data[idx]);
}

console.log('============================================');
