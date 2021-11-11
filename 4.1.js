function nthFibonacci(nth) {
	let prev = 0;
	let current = 0;
	let next = 1;

	while (nth > 0) {
		-- nth;
		prev = current;
		current = next;
		next = prev + current;
	}
	return current;
}


console.log("nthFibonacci(1)", nthFibonacci(1)); // --> 
console.log("nthFibonacci(5)", nthFibonacci(5)); // --> 
console.log("nthFibonacci(10)", nthFibonacci(10)); // --> 
console.log("nthFibonacci(20)", nthFibonacci(20)); // --> 