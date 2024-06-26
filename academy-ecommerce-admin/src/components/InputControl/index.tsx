import React, { useState, useRef } from "react";
import "./style.css";

interface Props {
  type: string;
  label: string;
  id?: string;
  value: string;
  setValue: (value: string) => void;
  checkCredentials: (value: boolean) => void;
}

const InputControl = ({ type, label, id, value, setValue, checkCredentials }: Props) => {
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  function isValidEmail(email: string): boolean {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChangeEmail = (event: { target: { value: string } }) => {
    if (!isValidEmail(event.target.value)) {
      setError("Email is invalid");
    } else {
      setError(null);
    }
    setValue(event.target.value);
    setMessage(event.target.value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const [isAutofilled, setIsAutofilled] = useState(false);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsAutofilled(event.target.value !== "");
  };

  // Get a reference to the label element
  const labelRef = useRef<HTMLLabelElement>(null);
  // Get the width of the label element
  const labelWidth = labelRef.current?.offsetWidth;

  return (
    <div className="wrapper">
      <input
        // autoComplete="new-password"
        onInput={handleInput}
        value={value}
        id={id}
        required
        type={type}
        spellCheck="false"
        className={`${value ? "has-value" : ""} loginInput`}
        onChange={(event) => {
          type === "email" ? handleChangeEmail(event) : handleChange(event);
        }}
        style={{ paddingRight: `${labelWidth}px` }}
      />
      <label ref={labelRef} htmlFor="input" className="loginLabel">
        {label}
      </label>
      <div className="error">{error}</div>
    </div>
  );
};

export default InputControl;
