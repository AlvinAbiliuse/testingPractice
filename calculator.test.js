const [add, subtract, divide, multipy] = require("./calculator.js");

test("testing Calculator: ", () => {
	expect(add(1, 5)).toBe(6);
	expect(subtract(1, 5)).toBe(4);
	expect(divide(6, 2)).toBe(3);
	expect(multiply(6, 2)).toBe(12);
});
