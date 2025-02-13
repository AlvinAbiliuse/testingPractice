function reverseString(str) {
	let n = str.length + 1;
	let newStr = [];
	while (n != 0) {
		n--;
		newStr.push(str[n]);
	}
	return newStr.join("");
}

module.exports = reverseString;
