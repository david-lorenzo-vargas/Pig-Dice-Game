import { Player } from "@customTypes/types";

export const getNextTurnUserId = (
  userPlaying: number,
  players: Player[]
): number => {
  const userPlayingIndex = players.findIndex(
    (user: Player) => userPlaying === user.id
  );

  if (userPlaying === players[players.length - 1].id) {
    return players[0].id;
  } else {
    return players[userPlayingIndex + 1].id;
  }
};
