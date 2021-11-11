function binaryToDecimal(array) {
	let dec = 0;
	let power = 0;
	for (let index = array.length - 1; index >= 0 ; --index) {
		dec += array[index] * (2 ** power);
		++ power;
	}
	return dec;
}

console.log("binaryToDecimal([0, 0, 0, 1]) =>", binaryToDecimal([0, 0, 0, 1]));
console.log("binaryToDecimal([0, 0, 1, 0]) =>", binaryToDecimal([0, 0, 1, 0]));
console.log("binaryToDecimal([0, 1, 0, 1]) =>", binaryToDecimal([0, 1, 0, 1]));
console.log("binaryToDecimal([0, 1, 1, 0]) =>", binaryToDecimal([0, 1, 1, 0]));
console.log("binaryToDecimal([1, 0, 0, 1]) =>", binaryToDecimal([1, 0, 0, 1]));
console.log("binaryToDecimal([1, 0, 1, 1]) =>", binaryToDecimal([1, 0, 1, 1]));
console.log("binaryToDecimal([1, 1, 1, 1]) =>", binaryToDecimal([1, 1, 1, 1]));
console.log("binaryToDecimal([1, 1, 1, 1, 1, 1, 1, 0]) =>", binaryToDecimal([1, 1, 1, 1, 1, 1, 1, 0]));
