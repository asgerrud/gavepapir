import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

interface InputProps {
  label: string;
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
}

const Input = ({ label, value, onChange }: InputProps) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value !== "" && Number(value) <= 0) {
      setErrorMessage("Please enter a value greater than 0");
    } else {
      setErrorMessage(null);
    }

    onChange(value);
  };

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
        onChange={handleChange}
      />
      {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
    </div>
  );
};

export default Input;
