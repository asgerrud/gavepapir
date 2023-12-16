import { Dispatch, SetStateAction } from "react";

interface InputProps {
  label: string;
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
}

const Input = ({ label, value, onChange }: InputProps) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={label} className="mb-2">
        {label}
      </label>
      <input
        id={label}
        type="number"
        className="py-2 px-4 bg-gray-200 rounded-sm"
        min={1}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Input;
