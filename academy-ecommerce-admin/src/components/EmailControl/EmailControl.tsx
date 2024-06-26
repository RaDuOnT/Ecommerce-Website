import React, { useState, useRef } from "react";
import "./style.css";

interface Props {
  type: string;
  label: string;
}

const EmailControl = ({ type, label }: Props) => {
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

  const [value, setValue] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  // Get a reference to the label element
  const labelRef = useRef<HTMLLabelElement>(null);
  // Get the width of the label element
  const labelWidth = labelRef.current?.offsetWidth;

  return (
    <div className="wrapper">
      <input
        id="input"
        required
        type={type}
        spellCheck="false"
        className={`${value ? "has-value" : ""}`}
        onChange={
            type === "email" ? handleChangeEmail : handleChange
        }
        style={{ paddingRight: `${labelWidth}px` }}
      />
      <label ref={labelRef} htmlFor="input">
        {label}
      </label>
    
    </div>
  );
};

export default EmailControl;
