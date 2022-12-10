import { ChangeEvent, ChangeEventHandler, FC } from "react";

interface InputProps {
  placeholder: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  name: string;
  value: string;
}

export const Input: FC<InputProps> = (props) => {
  const { placeholder, onChange, name, ...other } = props;
  return (
    <div className="border bg-white rounded-md flex justify-between w-full placeholder-right">
      <input
        type="text"
        placeholder={placeholder}
        className="h-12 w-full text-right"
        onChange={onChange}
        name={name}
        {...other}
      />
    </div>
  );
};

export default Input;
