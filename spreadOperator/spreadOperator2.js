
// SpreadOperator2

let pre = [100, 200, 'hello', null];
console.log(pre);
let newData = [0,1,2,3, ...pre, 4];
console.log(newData);

console.log('==============================================');

function sum(a,b,c){
	return a+b+c;
};

let pre2 = [100,200,300];
//sum.apply(null, arr);

console.log(sum.apply(null,pre2));
console.log(sum.call(null, 100,200,300,400));

console.log(sum(...pre2));
