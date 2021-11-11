function leftInBus(passengers_traffic) {
	let leftovers = 0;
	for (const station_data of passengers_traffic) {
		leftovers = leftovers + station_data[0] - station_data[1];
	}
	
	return leftovers;
}



console.log(leftInBus([[0, 0], [5, 3], [6, 3], [0, 4]])); // --> 1
console.log(leftInBus([[5, 0], [3, 3], [6, 5], [0, 6]])); // --> 0