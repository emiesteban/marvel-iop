// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
import { JSX } from "react";
import "./text-field.css";

type TextFieldProps = {
  label?: string;
  value: string;
  placeholder?: string;
  onChange: (newValue: string) => void;
  onIntro?: () => void;
  disabled?: boolean;
};

const TextField = ({
  label,
  value,
  placeholder,
  onChange,
  onIntro,
  disabled = false,
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
        onKeyDown={(event) => {
          if (onIntro && event.key === "Enter") {
            onIntro();
          }
        }}
        disabled={disabled}
      />
    </div>
  );
};

export default TextField;
