import { ChangeEvent, ReactElement, useCallback, useState } from "react";

import Modal from "@/app/Components/Atoms/Modal";
import Button from "@/app/Components/Atoms/Button";
import Input from "@/app/Components/Atoms/Input";

import UserIcon from "@icon/User";
import Close from "@icon/Close";

import { Player } from "@customTypes/types";

const StartingModal = ({
  mounted,
  onStartPlaying,
}: Props): ReactElement => {
  const [players, setPlayers] = useState<Player[]>([
    {
      id: 0,
      name: 'Player 1',
      score: 0,
    },
    {
      id: 1,
      name: 'Player 2',
      score: 0,
    },
  ]);

  const onAddPlayer = useCallback(() => {
    setPlayers((p: Player[]) => [...p, {
      id: p.length ? p[p.length -1]?.id + 1 : 0,
      name: `Player ${p.length ? p[p.length -1]?.id + 2 : 1}`,
      score: 0
    }]);
  }, []);

  const onNameChange = useCallback((e: ChangeEvent<HTMLInputElement>, id: number) => {
    setPlayers((p: Player[]) => p.map((player: Player) => {
      if (player.id === id) {
        return {...player, name: e.target.value}
      }

      return player;
    }));
  }, []);

  const onRemoveUser = useCallback((id: number) => {
    setPlayers((p: Player[]) => p.filter((player: Player) => player.id !== id));
  }, []);

  return (
    <Modal
      mounted={mounted}
      title="Welcome to Pig Dice Game"
      titleClassNames="text-2xl md:text-4xl font-bold text-veryDarkBlue"
      padding="p-20"
    >
      <div className="p-10">
        <div className="mb-20 max-h-300 overflow-y-scroll">
          {players.map((p: Player, ix: number) => (
            <div
              className="mb-5 flex flex-row items-center w-full"
              key={p.id}
            >
              <div className="text-veryDarkBlue">
                <UserIcon size="40" />
              </div>
              <div className="w-full px-10">
                <Input
                  placeholder="player name"
                  inputName={`player-${ix}`}
                  onChange={(e: ChangeEvent<HTMLInputElement>,) => onNameChange(e, ix)}
                  value={p.name}
                />
              </div>
              <Button
                type="button"
                id={`remove-${ix}`}
                bgColour="bg-white"
                size="w-20"
                onClick={() => onRemoveUser(p.id)}
              >
                <div className="text-cancelRed">
                  <Close />
                </div>
              </Button>
            </div>
          ))}
        </div>
        <div>
          <div className="mb-5">
            <Button
              type="button"
              id="AddPlayerButton"
              onClick={onAddPlayer}
              size="w-full"
              bgColour="bg-cancelRed"
              rounded="rounded-full"
              padding="py-5 px-10"
            >
              <span className="text-white font-semibold">
                Add Player
              </span>
            </Button>
          </div>
          <div>
            <Button
              type="button"
              id="StartPlayingButton"
              onClick={() => onStartPlaying(players)}
              size="w-full"
              bgColour="bg-cancelRed"
              rounded="rounded-full"
              padding="py-5 px-10"
              disabled={players.length < 2}
            >
              <span className="text-white font-semibold">
                Start Playing
              </span>
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

interface Props {
  mounted: boolean;
  onStartPlaying: (players: Player[]) => void;
}

export default StartingModal;
