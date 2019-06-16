
var data = [1, 2, undefined, NaN, ""];
Array.prototype.getIndex = function(){};

for(let idx in data){
	console.log(data[idx]);
}

// 1 2 undefined NaN ''  그리고 function(){} 까지 출력된다.
// 즉 자기자신이 가진 객체 이외에 프로토타입 객체를 이용해 상위의 객체 또한 나타낸다.

console.log('================================================');
for(let value of data){
	console.log(value);
}

// 절대로 for in 을 쓰지말고 for of를 사용하자!!!
// 또한 for of는 배열만을 위한 것은 아니다.
console.log('================================================');
var str = "hello world!!!";
for(let value of str){
	console.log(value);
}
