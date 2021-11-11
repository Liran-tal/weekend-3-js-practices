function centuryFromYear(year) {
	let century = 0;
	let tenth = year % 100;
	if ((tenth > 0) && (tenth <= 99)) {
		century = year / 100 + 1;
	} else{
		century = (year / 100);
	}
	return Math.floor(century);
}

console.log(centuryFromYear(1705)); // returns (18)
console.log(centuryFromYear( 1900)); // returns (19)
console.log(centuryFromYear(1601)); // returns (17)
console.log(centuryFromYear(2000)); // returns (20)