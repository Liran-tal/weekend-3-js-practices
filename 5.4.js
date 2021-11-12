function toWeirdCase(str) {
	str_arr = str.split('');
	for (let i = 0; i < str_arr.length; ++i) {
		str_arr[i] = i % 2 === 0 
			? str_arr[i].toUpperCase()
			: str_arr[i].toLowerCase();
	}
	return str_arr.join('');
}

console.log('toWeirdCase("String") => ', toWeirdCase("String")); //=> returns "StRiNg"
console.log('toWeirdCase( "Weird string case" ) => ', toWeirdCase( "Weird string case" )); //=> returns "WeIrD StRiNg CaSe"