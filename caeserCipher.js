function shifted(a, shift) {
	let alphabetList, capitalize, toReturn;
	alphabetList = "abcdefghijklmnopqrstuvxyz".split("");
	if (a in alphabetList) {
		capitalize = "false";
	} else if (a.toLowerCase() in alphabetList) {
		capitalize = "true";
	} else return a;

	toReturn = "";
}

function caeserCipher(str, shift) {
	let newStr = [];
	for (let i in str) {
		newStr.push(shifted(i, shift));
	}
}

module.exports = caeserCipher;
