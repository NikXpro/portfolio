import { ChangeEvent, FC } from "react";
import "./Input.scss";

interface InputProps {
  type: "text" | "number" | "email" | "password";
  label: string;
  value: string | number;
  name: string;
  placeholder: string;
  error: boolean;
  disabled?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<InputProps> = ({
  type,
  label,
  value,
  name,
  placeholder,
  error,
  disabled,
  onChange,
}) => {
  return (
    <div className="input-wrapper">
      <div className="input-wrapper__label-wrapper">
        <label htmlFor={label}>{label}</label>
        {error && <p className="error">Input filed can't be empty!</p>}
      </div>
      <input
        className={error ? "error" : ""}
        type={type}
        id={label}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
};
