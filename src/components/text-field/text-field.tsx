// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
import { JSX } from "react";
import "./text-field.css";

type TextFieldProps = {
  label?: string;
  value: string;
  placeholder?: string;
  onChange: (newValue: string) => void;
};

const TextField = ({
  label,
  value,
  placeholder,
  onChange,
}: TextFieldProps): JSX.Element => {
  return (
    <div className="text-field-container">
      {label && <label className="text-field-label">{label}</label>}
      <input
        className="text-field"
        type="text"
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextField;
