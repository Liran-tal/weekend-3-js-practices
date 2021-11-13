function maskify(str) {
	let masked = '';
	if (str.length > 4){
		str = str.split('');
		masked = "#".repeat(str.length - 4);
		str.splice(0, (str.length - 4), masked);
		str = str.join('');
	}
	return str;
}

console.log(maskify("4556364607935616"));
console.log(maskify("64607935616"));
console.log(maskify( "1"));
console.log(maskify( ""));
console.log(maskify("Skippy"));
console.log(maskify("Nananananananananananananananana Batman!"));