
function getObj(){
	let name = 'crong';

	const getName = ()=>{
		return name;
	}

	const setName = (newName)=>{
		name = newName;
	}

	const printName = ()=>{
		console.log(name);
	}

	return {
		getName,
		setName,
		name

	}
}

let obj = getObj();
console.log(obj);
console.log(obj.getName());
obj.setName('pororo');
console.log(obj.getName());
