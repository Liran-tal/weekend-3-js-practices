function toCamelCase(str) {
	str_arr = str.split('');
	for (let i = 1; i < str_arr.length; ++i){
		if (str_arr[i] === '-' || str_arr[i] === '_'){
			str_arr[i + 1] = str_arr[i + 1].toUpperCase();
			str_arr.splice(i, 1);	
		}
	}
	
	return str_arr.join('');
}

console.log("toCamelCase('the-stealth-warrior') => ", toCamelCase("the-stealth-warrior")); // returns "theStealthWarrior"
console.log('toCamelCase("The_Stealth_Warrior") => ', toCamelCase("The_Stealth_Warrior")); // returns "TheStealthWarrior"