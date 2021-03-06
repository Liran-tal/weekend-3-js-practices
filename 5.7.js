function lengthOfShortestWord(str) {
	str = str.split(' ');
	const min_legnth = str.reduce((min_length = 1, word) => {
		return (min_length < word.length 
			? min_length
			: word.length); 
	})
	return min_legnth;
}

console.log("lengthOfShortestWord(Betty bought a bit of butter) => ", lengthOfShortestWord("Betty bought a bit of butter"));
console.log("lengthOfShortestWord(Be safe and may all your lights be green) => ", lengthOfShortestWord("Be safe and may all your lights be green"));