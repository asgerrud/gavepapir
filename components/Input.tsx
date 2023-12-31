import { ChangeEvent, Dispatch, FocusEvent, SetStateAction, useState } from "react";

interface InputProps {
  label: string;
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
}

const Input = ({ label, value, onChange }: InputProps) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleFocus = (event: FocusEvent<HTMLInputElement>) => event.target.select();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    const hasValue = value !== "";

    if (hasValue && Number(value) <= 0) {
      setErrorMessage("Please enter a value greater than 0");
    } else {
      setErrorMessage(null);
    }

    onChange(value);
  };

  return (
    <div className="flex flex-col">
      <label htmlFor={label} className="mb-1 font-semibold">
        {label}
      </label>
      <input
        id={label}
        type="number"
        className="py-2 px-4 bg-gray-200 rounded-sm"
        min={1}
        value={value}
        onFocus={handleFocus}
        onChange={handleChange}
      />
      {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
    </div>
  );
};

export default Input;
