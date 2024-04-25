import { ReactElement, useMemo } from "react";

const Dot = () => <div className="rounded-full h-20 w-20 bg-white" />;

const Dice = ({
  activeNumber,
}: Props): ReactElement => {
  const dice = useMemo(() => {
    if (activeNumber === 1) {
      return (
        <div>
          <Dot />
        </div>
      );
    } else if (activeNumber === 2) {
      return (
        <div className="flex flex-row items-center justify-between h-full w-full rotate-45">
          <Dot />
          <Dot />
        </div>
      );
    } else if (activeNumber === 3) {
      return (
        <div className="flex flex-row items-center justify-between h-full w-full rotate-45">
          <Dot />
          <Dot />
          <Dot />
        </div>
      );
    } else if (activeNumber === 4) {
      return (
        <div className="h-full w-full flex flex-col justify-between p-10">
          <div className="flex flex-row items-center justify-between">
            <Dot />
            <Dot />
          </div>
          <div className="flex flex-row items-center justify-between">
            <Dot />
            <Dot />
          </div>
        </div>
      );
    } else if (activeNumber === 5) {
      return (
        <div className="h-full w-full flex flex-col justify-between p-10">
          <div className="flex flex-row items-center justify-between">
            <Dot />
            <Dot />
          </div>
          <div className="w-full flex flex-row items-center justify-center">
            <Dot />
          </div>
          <div className="flex flex-row items-center justify-between">
            <Dot />
            <Dot />
          </div>
        </div>
      );
    } else {
      return (
        <div className="h-full w-full flex flex-col justify-between p-10">
          <div className="flex flex-row items-center justify-between">
            <Dot />
            <Dot />
          </div>
          <div className="flex flex-row items-center justify-between">
            <Dot />
            <Dot />
          </div>
          <div className="flex flex-row items-center justify-between">
            <Dot />
            <Dot />
          </div>
        </div>
      );
    }
  }, [activeNumber]);

  return (
    <div
      className="w-100 h-100 bg-cancelRed flex flex-row items-center justify-center"
    >
      {dice}
    </div>
  );
};

interface Props {
  activeNumber: number;
}

export default Dice;
