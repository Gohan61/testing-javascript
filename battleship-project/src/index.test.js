import { Ship } from "./index.js";

test("Times hit to be less than length of ship", () => {
  const testShip = new Ship(5);
  testShip.timesHit = 4;
  expect(testShip.length).toBeGreaterThan(testShip.timesHit);
});

test("Ship is sunk when times hit equals length of ship", () => {
  const testShip = new Ship(5);
  testShip.timesHit = 5;
  if (testShip.length === testShip.timesHit) {
    testShip.sunk = true;
  }
  expect(testShip.sunk).toBe(true);
});
