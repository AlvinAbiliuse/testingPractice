function shifted(a, shift) {
	let list, capitalize, toReturn;
	list = "abcdefghijklmnopqrstuvwxyz".split("");
	if (list.includes(a)) {
		capitalize = "false";
	} else if (list.includes(a.toLowerCase())) {
		capitalize = "true";
	} else return a;

	if (list.indexOf(a) + shift > list.length - 1) {
		return list[list.indexOf(a) + shift - (list.length - 1)];
	} else return list[list.indexOf(a) + shift];

	toReturn = "";
}

function caeserCipher(str, shift) {
	let newStr = [];
	for (let i in str) {
		newStr.push(shifted(str[i], shift));
	}
	return newStr.join("");
}

module.exports = caeserCipher;
