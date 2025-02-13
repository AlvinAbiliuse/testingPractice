const caeserCipher = require("./caeserCipher.js");

test("CaeserCipher Test", () => {
	expect(caeserCipher("hello world!", 3)).toBe("khoor zruog!");
});
