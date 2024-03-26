import { Ship } from "./index.js";

test("Times hit to be less than length of ship", () => {
  const testShip = new Ship(5);
  for (let i = 4; i > 0; i--) {
    testShip.hit();
  }
  expect(testShip.length).toBeGreaterThan(testShip.timesHit);
});

test("Ship is sunk when times hit equals length of ship", () => {
  const testShip = new Ship(5);
  for (let i = 5; i > 0; i--) {
    testShip.hit();
  }
  if (testShip.length === testShip.timesHit) {
    testShip.sunk = true;
  }
  expect(testShip.sunk).toBe(true);
});
