function abbreviate(name) {
	let abb = [];
	name = name.split('');
	abb = name.filter((char) => {
		return (char >= 'A' && char <= 'Z'
			? true
			: false);
	});
	return abb.join('.');
}
	
console.log('abbreviate("Sam Harris") => ', abbreviate("Sam Harris")); // S.H
console.log('abbreviate("Patrick Feeney") => ', abbreviate("Patrick Feeney")); // P.F