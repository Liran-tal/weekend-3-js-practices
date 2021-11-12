function repeatStr(times, str) {
	let multi_str = '';
	for (let i = 0; i < times; i++) {
		multi_str += str;		
	}

	return multi_str;
}

console.log("repeatStr(6, 'I')", repeatStr(6, "I")); // "IIIIII"
console.log("repeatStr(5, 'Hello')", repeatStr(5, "Hello")); // "HelloHelloHelloHelloHello"