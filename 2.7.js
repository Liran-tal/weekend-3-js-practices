function basicOp(operator, operand1, operand2) {
	let res = 0;
	switch (operator) {
		case '+':
			res = operand1 + operand2;
			break;
		case '-':
			res = operand1 - operand2;
			break;
		case '/':
			res = operand1 / operand2;
			break;
		case '*':
			res = operand1 * operand2;
			break;
	}
	return res;
}




console.log(basicOp('+', 4, 7)) // Output: 11
console.log(basicOp('-', 15, 18)) // Output: -3
console.log(basicOp('*', 5, 5)) // Output: 25
console.log(basicOp('/', 49, 7)) // Output: 7