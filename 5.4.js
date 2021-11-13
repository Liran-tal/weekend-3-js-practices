function toWeirdCase(str) {
	const new_str = [];
	const word_arr = str.split(' ');
	for (let i = 0; i < word_arr.length; ++i) {
		new_word = word_arr[i].split('');
		for (let j = 0; j < word_arr[i].length; j++) {
			if (j % 2 === 0 ){
				new_word[j] = new_word[j].toUpperCase();
			}
		}
		new_str.push(new_word.join(''));
	}
	return new_str.join(' ');
}

console.log('toWeirdCase("String") => ', toWeirdCase("String")); //=> returns "StRiNg"
console.log('toWeirdCase( "Weird string case" ) => ', toWeirdCase( "Weird string case" )); //=> returns "WeIrD StRiNg CaSe"