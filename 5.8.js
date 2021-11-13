function lengthOfShortestWord(str) {
	str = str.split(' ');
	
	const max_length = str.reduce((max_length = 1, word) => {
		return (max_length > word.length 
			? max_length
			: word.length);
	})
	const longest_array = str.filter(word => {
		return (max_length === word.length);
	})

	return longest_array;
}

console.log("lengthOfShortestWord(Betty bought a bit of butter) => ", lengthOfShortestWord("Betty bought a bit of butter"));
console.log("lengthOfShortestWord(Be safe and may all your lights be green) => ", lengthOfShortestWord("Be safe and may all your lights be green"));