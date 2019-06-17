
//es2015 from method

function addMark(){
	let newData = [];

	for(let i = 0 ; i < arguments.length; i++){
		newData.push(arguments[i] + '!');
	};

	console.log(newData);
};

addMark(1,2,3,4,5);

addMark('a','b','c');

console.log('==================================================');

function addMark2(){
	let newData = Array.from(arguments);
	
	newData.map((value, i)=>{
		console.log(value + '!');
		console.log(i);
	});
	
}

addMark2('q','w','e');

console.log('==================================================');

function fromMap(){
	let data = Array.from(arguments, x => x*2);

	console.log(data);
}

fromMap(1,2,3,4,5);
