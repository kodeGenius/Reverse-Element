// reverse array
const reverseArray =(num) =>{
	let result = [];
	for(let i = num.length - 1; i >= 0; i--){
		result.push(num[i]);
	}
	return result;
}

console.log(reverseArray(['a','b','c','d']))
