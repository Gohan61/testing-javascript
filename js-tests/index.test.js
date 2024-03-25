import { capitalize } from "./index.js";
import { reverseString } from "./index.js";

test("Return only first letter capitalized", () => {
  expect(capitalize("herman")).toBe("Herman");
});

test("Reverse string", () => {
  expect(reverseString("uwe")).toBe("ewu");
});
