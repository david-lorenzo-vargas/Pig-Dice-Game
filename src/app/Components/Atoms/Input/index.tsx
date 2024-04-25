import { ChangeEvent, HTMLInputTypeAttribute, ReactElement } from "react";

const Input = ({
  placeholder,
  inputName,
  type ='text',
  onChange,
  value,
}: Props): ReactElement => {
  return (
    <div className="w-full">
      <input
        className="bg-lightGray w-full rounded px-3 py-2"
        placeholder={placeholder}
        name={inputName}
        type={type}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

interface Props {
  placeholder: string;
  inputName: string;
  type?: HTMLInputTypeAttribute,
  onChange: (e: ChangeEvent<HTMLInputElement>,) => void;
  value: string;
}

export default Input;
