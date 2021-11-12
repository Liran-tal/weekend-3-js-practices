function nthTribonacci(signature, nth) {
	// Checks valid input
	if (isNaN(nth) || nth === 0 || !validSignature(signature)){
		return [];
	}

	let first = signature[0];
	let secound = signature[1];
	let third = signature[2];
	let next = first + secound + third;
	while (nth > 1) {
		-- nth;
		first = secound;
		secound = third;
		third = next
		next = first + secound + third;
	}
	return first;
}

function validSignature(signature){
	let is_valid = true;
	for (let i = 0; i < 2; ++i){
		if (isNaN(signature[i]) || signature[i] < 0 || signature[i] > 1){
			is_valid = false;
		}
	}
	if (signature[2] !== 1){
		is_valid = false;
	}
	return is_valid;
}

console.log("nthTribonacci([0, 0, 1], 0)", nthTribonacci([0, 0, 1], 0)); // --> 
console.log("nthTribonacci([0, 1, 0], 3)", nthTribonacci([0, 1, 0], 0)); // --> 
console.log("nthTribonacci([0, 0, 1], 3)", nthTribonacci([0, 0, 1], 3)); // --> 
console.log("nthTribonacci([1, 1, 1], 3)", nthTribonacci([1, 1, 1], 3)); // --> 
console.log("nthTribonacci([0, 0, 1], 6)", nthTribonacci([0, 0, 1], 6)); // --> 
console.log("nthTribonacci([1, 1, 1], 6)", nthTribonacci([1, 1, 1], 6)); // --> 
console.log("nthTribonacci([0, 0, 1], 8)", nthTribonacci([0, 0, 1], 8)); // --> 
console.log("nthTribonacci([1, 1, 1], 8)", nthTribonacci([1, 1, 1], 8)); // --> 