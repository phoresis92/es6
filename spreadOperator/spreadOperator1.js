
// Spread Operator 펼침연산자

let pre = ['apple', 'orange', 100];
let newData = [...pre];

console.log(pre === newData);
console.log(pre,newData);

console.log('===================================');

let contest = pre.concat();

console.log(pre === contest);
console.log(pre, contest);
