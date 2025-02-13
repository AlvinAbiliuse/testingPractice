const [add, subtract, divide, multiply] = require("./calculator.js");

test("testing Calculator: ", () => {
	expect(add(5, 1)).toBe(6);
	expect(subtract(5, 1)).toBe(4);
	expect(divide(6, 2)).toBe(3);
	expect(multiply(6, 2)).toBe(12);
});
