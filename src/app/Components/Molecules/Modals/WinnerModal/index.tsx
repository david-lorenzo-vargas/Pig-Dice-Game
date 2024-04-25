import { ReactElement } from "react";

import Modal from "@/app/Components/Atoms/Modal";
import Button from "@/app/Components/Atoms/Button";

import { Player } from "@customTypes/types";

const WinnerModal = ({
  mounted,
  winner,
  onPlayAgain,
}: Props): ReactElement => {
  return (
    <Modal
      mounted={mounted}
      title="Congratulations"
      titleClassNames="text-2xl md:text-4xl font-bold text-veryDarkBlue"
      padding="p-20"
    >
      <>
        <div className="flex flex-col items-center justify-center py-20">
          <div>
            <span className="text-3xl font-semibold">{winner.name}</span>
          </div>
          <div>
            <span>{`Your score is: ${winner.score}`}</span>
          </div>
        </div>
        <Button
          type="button"
          id="PlayAgainButton"
          onClick={onPlayAgain}
          size="w-full"
          bgColour="bg-cancelRed"
          rounded="rounded-full"
          padding="py-5 px-10"
        >
          <span className="text-white font-semibold">
            Play again
          </span>
        </Button>
      </>
    </Modal>
  );
};

interface Props {
  mounted: boolean;
  winner: Player;
  onPlayAgain: () => void;
}

export default WinnerModal;
