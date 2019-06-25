
let numbers = [1,2,3,4,5];

let processed = numbers.map((num, idx, arr)=>{
	console.log(num + '-' + idx);
	console.log('this is arr[idx]' + arr[idx]);
	console.log('================');
});
