import { ChangeEvent, useState } from "react";
import "./style.css"

interface InputControlInterface {
    type: string;
    labelTitle: string;
}


const InputControl = ({type, labelTitle}:InputControlInterface) => {
  const [value, setValue] = useState<string>("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="md-textbox">
      <input
        type={type}
        onChange={handleChange}
        className={`${value ? "has-value" : ""}`}
        id="textbox"
      />
      <span className="material-symbols-outlined">account_circle</span>
        <label htmlFor="textbox">{labelTitle}</label>
    </div>
  );
};

export default InputControl;
