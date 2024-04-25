import { Player } from "@customTypes/types";
import { getNextTurnUserId } from "./getNextTurnUserId";

const mockPlayers: Player[] = [
  { id: 1, name: "Player 1", score: 0 },
  { id: 2, name: "Player 2", score: 0 },
  { id: 3, name: "Player 3", score: 0 },
];

describe("getNextTurnUserId", () => {
  test("should return the next player ID if userPlaying is not the last player", () => {
    const userPlaying = 1;
    const expectedNextPlayerId = 2;
    expect(getNextTurnUserId(userPlaying, mockPlayers)).toBe(
      expectedNextPlayerId
    );
  });

  test("should return the first player ID if userPlaying is the last player", () => {
    const userPlaying = 3;
    const expectedNextPlayerId = 1;
    expect(getNextTurnUserId(userPlaying, mockPlayers)).toBe(
      expectedNextPlayerId
    );
  });

  test("should return the first player ID if there is only one player", () => {
    const userPlaying = 1;
    const singlePlayerArray: Player[] = [{ id: 1, name: "Player 1", score: 0 }];
    const expectedNextPlayerId = 1;
    expect(getNextTurnUserId(userPlaying, singlePlayerArray)).toBe(
      expectedNextPlayerId
    );
  });
});
