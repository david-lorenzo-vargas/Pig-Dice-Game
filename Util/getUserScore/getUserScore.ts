import { Player } from "@customTypes/types";

export const getUserScore = (player: Player, diceOne: number, diceTwo: number, userPlaying: number, currentTurnScore: number) => {
  if (player.id === userPlaying) {
    if (diceOne === 1 && diceTwo === 1) {
      return {...player, score: 0}
    } else if (diceOne === 1 || diceTwo === 1) {
      return {...player, score: player.score - currentTurnScore}
    }
    return {...player, score: player.score + diceOne + diceTwo}
  }

  return player;
};