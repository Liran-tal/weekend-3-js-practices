function lengthOfShortestWord(str) {
	str = str.split(' ');
	const max_legnth = str.reduce((max_length = 1, word) => {
		return (max_length < word.length 
			? max_length
			: word.length); 
	})
	return max_legnth;
}

console.log("lengthOfShortestWord(Betty bought a bit of butter) => ", lengthOfShortestWord("Betty bought a bit of butter"));
console.log("lengthOfShortestWord(Be safe and may all your lights be green) => ", lengthOfShortestWord("Be safe and may all your lights be green"));