import { capitalize } from "./index.js";
import { reverseString } from "./index.js";
import { calculator } from "./index.js";
import { caesarCipher } from "./index.js";
import { analyzeArray } from "./index.js";

test("Return only first letter capitalized", () => {
  expect(capitalize("herman")).toBe("Herman");
});

test("Reverse string", () => {
  expect(reverseString("uwe")).toBe("ewu");
});

test("Adds 1 + 2 to equal 3", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("Subtract 3 - 2 to equal 1", () => {
  expect(calculator.subtract(3, 2)).toBe(1);
});

test("Divide 6 / 2 to equal 3", () => {
  expect(calculator.divide(6, 2)).toBe(3);
});

test("Multiply 4 * 2 to equal 8", () => {
  expect(calculator.multiply(4, 2)).toBe(8);
});

test("Return Ab2 to be cd4 with key 2", () => {
  expect(caesarCipher("Ab2", 2)).toBe("cd4");
});

test("Return Ab2 to be ?!0 with key -2", () => {
  expect(caesarCipher("Ab2", -2)).toBe("?!0");
});

test("Return Ab2 to be de.5 with key 50", () => {
  expect(caesarCipher("Ab2", 50)).toBe("jk.");
});

test("Return average of array [1, 2, 3] to equal 2", () => {
  expect(analyzeArray([1, 2, 3]).average).toBe(3);
});

test("Return minimun of array [10, 2, 50 to equal 2", () => {
  expect(analyzeArray([10, 2, 50]).min).toBe(2);
});

test("Return maximum of array [10, 2, 50 to equal 50", () => {
  expect(analyzeArray([10, 2, 50]).max).toBe(50);
});

test("Return length of array [10, 2, 50] to equal 3", () => {
  expect(analyzeArray([10, 2, 50]).length).toBe(3);
});
