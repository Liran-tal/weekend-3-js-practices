function calcSum(num) {
	let sum = 1;
	for (let i = 2; i <= num; ++i){
		sum += i
	}
	return sum;
}

console.log("calcSum(2) = ", calcSum(2));
console.log("calcSum(8) = ", calcSum(8));