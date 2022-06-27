import { Ship } from "./script";

const newShip = Ship(["B8", "B9", "B10"]);

test("positions are correct", () => {
    expect(newShip.length).toBe(3);
});

test("hitting a ship changes its hit positions array", () => {
    newShip.hit("B9");
    newShip.hit("B8");
    expect(newShip.hitPositions.length).toBe(2);
});

test("ship sinks", () => {
    newShip.hit("B10");
    expect(newShip.isSunk()).toBe(true);
});