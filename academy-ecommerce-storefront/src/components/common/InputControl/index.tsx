import React, { useState, useRef } from "react";
import "./style.css";

interface Props {
  type: string;
  label: string;
  id?: string;
  value: string;
  setValue: (value: string) => void;
  phoneLength?: number;
  errorMessage: string | null;
  setError: (value: string) => void;

  // setError: (value: string) => void;
}

const InputControl = ({
  type,
  label,
  id,
  value,
  setValue,
  phoneLength,
  errorMessage,
  setError,
}: Props) => {
  function isValidEmail(email: string): boolean {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChangeEmail = (event: { target: { value: string } }) => {
    if (!isValidEmail(event.target.value)) {
      setError("* Email invalid");
    } else {
      setError("");
    }
    setValue(event.target.value);
  };

  const handleChangePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const pattern = new RegExp(/^[0-9]*$/);
    if (!pattern.test(e.target.value.slice(3))) {
      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
    }
    if (e.target.value.slice(0, 3) !== "+40") {
      e.target.value = "+40" + e.target.value.slice(3);
    }
    setValue(e.target.value);
    if (e.target.value.length < 12) {
      setError("* Telefon invalid");
    } else {
      setError("");
    }
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError("");
    setValue(e.target.value);
  };

  // Get a reference to the label element
  const labelRef = useRef<HTMLLabelElement>(null);
  // Get the width of the label element
  const labelWidth = labelRef.current?.offsetWidth;

  return (
    <div className="wrapper">
      <input
        autoComplete="new-password"
        // autoComplete="new-password"
        // onInput={handleInput}
        defaultValue={value}
        value={value}
        maxLength={phoneLength}
        id={id}
        required
        type={type}
        spellCheck="false"
        className={`${value ? "has-value" : ""} loginInput`}
        onChange={(event) => {
          if (type === "text") handleChangePhoneNumber(event);
          else if (type === "email") handleChangeEmail(event);
          else handleChangePassword(event);
        }}
        style={{ paddingRight: `${labelWidth}px` }}
      />
      <label ref={labelRef} htmlFor="input" className="loginLabel">
        {label}
      </label>
      <div className="error">{errorMessage}</div>
    </div>
  );
};

export default InputControl;
