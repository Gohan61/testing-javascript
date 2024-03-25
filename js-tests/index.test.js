import { capitalize } from "./index.js";

test("Return only first letter capitalized", () => {
  expect(capitalize("herman")).toBe("Herman");
});
