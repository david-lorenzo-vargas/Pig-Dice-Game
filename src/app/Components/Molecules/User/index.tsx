import { ReactElement } from "react";

import UserIcon from "@icon/User";

const User = ({
  name,
  score,
}: Props): ReactElement => {
  return (
    <div className="w-max">
      <div className="text-veryDarkBlue mb-10">
        <UserIcon />
      </div>
      <div className="w-full flex flex-row items-center justify-center">
        <span className="text-xl font-semibold text-veryDarkBlue">
          {name}
        </span>
      </div>
      <div
        className="border-2 border-veryDarkBlue rounded-full flex flex-row justify-end px-2"
      >
        <span>
          {score}
        </span>
      </div>
    </div>
  );
};

interface Props {
  name: string;
  score: number;
}

export default User;
