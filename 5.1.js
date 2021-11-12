function trimString(str) {
	return str.substring(1, (str.length - 1));;
}


console.log("trimString(01):", trimString("01"));
console.log("trimString(012):", trimString("012"));
console.log("trimString(0123456):", trimString("0123456"));