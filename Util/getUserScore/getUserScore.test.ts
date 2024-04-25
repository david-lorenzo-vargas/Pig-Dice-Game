import { Player } from "@customTypes/types";
import { getUserScore } from "./getUserScore";

const mockPlayer: Player = { id: 1, name: "John", score: 10 };
const mockUserPlaying = 1;
const mockCurrentTurnScore = 5;

describe("getUserScore", () => {
  test("should reset score to 0 if both dice are 1", () => {
    const diceOne = 1;
    const diceTwo = 1;
    const updatedPlayer = getUserScore(
      mockPlayer,
      diceOne,
      diceTwo,
      mockUserPlaying,
      mockCurrentTurnScore
    );
    expect(updatedPlayer.score).toBe(0);
  });

  test("should not include currentTurnScore to player's score if either dice is 1", () => {
    const diceOne = 1;
    const diceTwo = 2;
    const updatedPlayer = getUserScore(
      mockPlayer,
      diceOne,
      diceTwo,
      mockUserPlaying,
      mockCurrentTurnScore
    );
    expect(updatedPlayer.score).toBe(mockPlayer.score - mockCurrentTurnScore);
  });

  test("should add both dice values to score if neither is 1 and user is playing", () => {
    const diceOne = 2;
    const diceTwo = 3;
    const updatedPlayer = getUserScore(
      mockPlayer,
      diceOne,
      diceTwo,
      mockUserPlaying,
      mockCurrentTurnScore
    );
    expect(updatedPlayer.score).toBe(mockPlayer.score + diceOne + diceTwo);
  });

  test("should return player without modifying score if user is not playing", () => {
    const diceOne = 2;
    const diceTwo = 3;
    const userNotPlaying = 2;
    const updatedPlayer = getUserScore(
      mockPlayer,
      diceOne,
      diceTwo,
      userNotPlaying,
      mockCurrentTurnScore
    );
    expect(updatedPlayer).toEqual(mockPlayer);
  });
});
