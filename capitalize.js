function capitalize(str) {
	let n, newStr;
	n = 0;
	newStr = str.map((s) => {
		if (n === 0) {
			n++;
			return s.toUpperCase();
		}
		return s;
	});
	return newStr.join();
}

module.exports = capitalize;
