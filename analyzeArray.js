function analyzeArray(list) {
	let arr = list;
	arr.sort((a, b) => a - b);
	let n = 0;
	arr.map((l) => n = n + l);
	return {
		average: n / arr.length,
		min: arr[0],
		max: arr[arr.length - 1],
		length: arr.length,
	};
}

module.exports = analyzeArray;
