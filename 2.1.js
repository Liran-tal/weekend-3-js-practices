function sumOfTwoLowest(array) {
	array.sort((a, b) => a - b);
	return (array[0] + array[1]);
}

let array1 = [19, 5, 42, 2, 77];
let array2 = [10, 343445353, 3453445, 3453545353453];

console.log("sumOfTwoLowest(array1) = ", sumOfTwoLowest(array1));
console.log("sumOfTwoLowest(array2) = ", sumOfTwoLowest(array2));