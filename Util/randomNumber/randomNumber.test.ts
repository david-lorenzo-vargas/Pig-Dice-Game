import { randomNumber } from "./randomNumber";

describe("randomNumber", () => {
  test("should return a number between 1 and 6 (inclusive)", () => {
    const result = randomNumber();
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(6);
  });
});
