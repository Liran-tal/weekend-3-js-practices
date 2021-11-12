// TODO: refactor with binary search
function findUniq(array) {
	let different = undefined;
	let start_idx = 0;
	let end_idx = array.length - 1;

	if (array[start_idx] === array[end_idx]) {
		different = array.filter(elm => {
			return (elm !== array[start_idx] 
				? true 
				: false);
		})
	} else{
		different = (array[start_idx] === array[1] 
			? array[end_idx] 
			: array[start_idx]); 
		console.log("differnt = ", different);
	}


	return different[0];
}


console.log("findUniq([ 1, 1, 1, 2, 1, 1 ]) => ", findUniq([ 1, 1, 1, 2, 1, 1 ])); // === 2
console.log("findUniq([ 0, 0, 0.55, 0, 0 ]) => ", findUniq([ 0, 0, 0.55, 0, 0 ])); // === 0.55