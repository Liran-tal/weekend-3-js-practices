function findNextSquare(num) {
	let ret = -1;
	num = Math.sqrt(num);
	if (num % 1 === 0) {
		ret = (num + 1) ** 2;
	}

	return ret;
}

console.log(findNextSquare(121)); //--> returns 144
console.log(findNextSquare(625)); //--> returns 676
console.log(findNextSquare(114)); // --> returns -1