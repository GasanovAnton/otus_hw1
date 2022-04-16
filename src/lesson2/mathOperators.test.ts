import { mul, div, add, minus, factorial, pow, square } from "./mathOperators";

test("mul 1 * 2 to equal 2", () => {
  expect(mul(1, 2)).toBe(2);
});

test("mul 2 * 2 to equal 4", () => {
  expect(mul(2, 2)).toBe(4);
});

test("div 2 / 2 to equal 1", () => {
  expect(div(2, 2)).toBe(1);
});

test("div 4 / 2 to equal 2", () => {
  expect(div(4, 2)).toBe(2);
});

test("add 4 + 2 to equal 6", () => {
  expect(add(4, 2)).toBe(6);
});

test("minus 4 - 2 to equal 2", () => {
  expect(minus(4, 2)).toBe(2);
});

test("square 3 to equal 9", () => {
  expect(square(3)).toBe(9);
});

test("pow 2 ^ 3 to equal 8", () => {
  expect(pow(2, 3)).toBe(8);
});

test("factorial 2 ^ 3 to equal 8", () => {
  expect(factorial(4)).toBe(24);
});