function nb_year(p0, percent, aug, p) {
	let curr_p = p0;
	years = 0;
	while (curr_p < p) {
		++ years;
		curr_p = curr_p + (curr_p * percent / 100) + aug;
	}
	return years;
}

console.log(nb_year(1500, 5, 100, 5000)) // -> 15
console.log(nb_year(1500000, 2.5, 10000, 2000000)) // -> 10