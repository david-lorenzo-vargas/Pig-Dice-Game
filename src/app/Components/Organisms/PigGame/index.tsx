import { ReactElement } from "react";

import Board from "./Board";

const PigGame = (): ReactElement => {
  return (
    <div className="border w-full h-full flex flex-col items-center">
      <div className="py-40">
        <h1 className="text-4xl md:text-8xl">
          Pig Dice Game
        </h1>
      </div>
      <Board />
    </div>
  );
};

export default PigGame;
