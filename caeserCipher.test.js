const caeserCipher = require("./caeserCipher.js");

test("CaeserCipher Test", () => {
	expect(caeserCipher("Hello World!", 3)).toBe("Khoor Zruog!");
});
