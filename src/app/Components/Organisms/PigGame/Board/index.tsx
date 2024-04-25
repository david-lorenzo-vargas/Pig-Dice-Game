'use client'

import { ReactElement, useCallback, useEffect, useMemo, useState } from "react";
import ReactConfetti from "react-confetti";

import Dice from "@/app/Components/Atoms/Dice";
import Button from "@/app/Components/Atoms/Button";
import StartingModal from "@/app/Components/Molecules/Modals/StartingModal";
import WinnerModal from "@/app/Components/Molecules/Modals/WinnerModal";
import User from "@/app/Components/Molecules/User";

import { randomNumber } from "@util/randomNumber/randomNumber";
import { getUserScore } from "@util/getUserScore/getUserScore";
import { getNextTurnUserId } from "@util/getNextTurnUserId/getNextTurnUserId";

import { Player, WindowSize } from "@customTypes/types";

const Board = (): ReactElement => {
  const [windowSize, setWindowSize] = useState<WindowSize | undefined>(undefined);
  const [isFirstRound, setIsFirstRound] = useState<boolean>(true);

  const [diceOne, setDiceOne] = useState<number>(1);
  const [diceTwo, setDiceTwo] = useState<number>(1);

  const [currentTurnScore, setCurrentTurnScore] = useState<number>(0);

  const [userStartedPlaying, setUserStartedPlaying] = useState<boolean>(false);

  const [userPlaying, setUserPlaying] = useState<number>(0);

  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    const { innerWidth: width, innerHeight: height } = window;

    setWindowSize(() => ({ width, height }));
  }, []);

  const onPassTurn = useCallback(() => {
    setUserStartedPlaying(() => false);

    setCurrentTurnScore(() => 0);

    setUserPlaying((u: number) => getNextTurnUserId(u, players))
  }, [players, getNextTurnUserId]);

  const onRollDice = useCallback(() => {
    const diceOne = randomNumber();
    const diceTwo = randomNumber();

    setDiceOne(() => diceOne);
    setDiceTwo(() => diceTwo);

    setCurrentTurnScore((c: number) => c + diceOne + diceTwo);

    setPlayers((p: Player[]) => p.map((user: Player) => getUserScore(user, diceOne, diceTwo, userPlaying, currentTurnScore)));

    if (diceOne === 1 || diceTwo === 1) {
      onPassTurn();
    }

    if (!userStartedPlaying) {
      setUserStartedPlaying(() => true);
    }
  }, [userStartedPlaying, userPlaying, onPassTurn, currentTurnScore]);

  const onStartPlaying = useCallback((p: Player[]) => {
    setIsFirstRound(() => false);
    setPlayers(() => p);
    setUserPlaying(() => p[0].id);
  }, []);

  const weHaveAWinner = useMemo(() => {
    return players.map((p: Player) => p.score).some(((s: number) => s >= 100))
  }, [players]);

  const onReset = useCallback(() => {
    setIsFirstRound(() => true);
    setDiceOne(() => 1);
    setDiceTwo(() => 1);
    setUserStartedPlaying(() => false);
    setUserPlaying(() => 0);
    setPlayers(() => []);
    setCurrentTurnScore(() => 0);
  }, []);

  return (
    <div>
      {weHaveAWinner && (
        <>
          <ReactConfetti
            width={windowSize?.width}
            height={windowSize?.height}
          />
          <WinnerModal
            mounted={weHaveAWinner}
            winner={players.find((p: Player) => p.score >= 100) as Player}
            onPlayAgain={onReset}
          />
        </>
      )}
      <div className="flex flex-row items-center justify-center mb-40">
        <div className="px-1">
          <Dice activeNumber={diceOne} />
        </div>
        <div className="px-1">
          <Dice activeNumber={diceTwo} />
        </div>
      </div>
      <div className="mb-40 mx-auto">
        <div className="mb-20">
          <Button
            type="button"
            id="rollDice"
            bgColour="bg-veryDarkBlue"
            rounded="rounded-full"
            padding="py-10 px-20"
            size="w-full"
            onClick={onRollDice}
          >
            <span
              className="text-white font-semibold"
            >
              Roll Dice
            </span>
          </Button>
        </div>
        {userStartedPlaying && (
          <div>
            <Button
              type="button"
              id="rollDice"
              bgColour="bg-veryDarkBlue"
              rounded="rounded-full"
              padding="py-10 px-20"
              size="w-full"
              onClick={onPassTurn}
            >
              <span
                className="text-white font-semibold"
              >
                Pass Turn
              </span>
            </Button>
          </div>
        )}
      </div>
      <div className="flex flex-row items-center justify-center flex-wrap">
        {players.map((p: Player) => (
          <div
            key={p.id}
            className={`
              border
              border-2
              p-10
              rounded
              ${userPlaying === p.id ? ' border-acceptGreen' : 'border-transparent'}
            `}
          >
            <User
              name={p.name}
              score={p.score}
            />
          </div>
        ))}
      </div>
      <StartingModal
        mounted={isFirstRound}
        onStartPlaying={onStartPlaying}
      />
    </div>
  );
};

export default Board;