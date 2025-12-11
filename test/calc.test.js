const { add, mul } = require("../src/calc");

test("adds numbers", () => {
    expect(add(2, 3)).toBe(5);
});

test("multiplies numbers", () => {
    expect(mul(4, 5)).toBe(20);
});
