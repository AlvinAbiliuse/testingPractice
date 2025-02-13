function shifted(a, shift) {
	let list, capitalize, toReturn;
	list = "abcdefghijklmnopqrstuvxyz".split("");
	if (a in list) {
		capitalize = "false";
	} else if (a.toLowerCase() in list) {
		capitalize = "true";
	} else return a;

	if (list.indexOf(a) + shift > list.length - 1) {
		return list[list.indexOf(a) + shift - list.length];
	} else return list[list.indexOf(a) + shift];

	toReturn = "";
}

function caeserCipher(str, shift) {
	let newStr = [];
	for (let i in str) {
		newStr.push(shifted(i, shift));
	}
	return newStr.join("");
}

module.exports = caeserCipher;
console.log(caeserCipher("Hello, World!"));
