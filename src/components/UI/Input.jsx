import React from "react";
import { useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { HideIcon } from "../icons/HideIcon";
import { HideDef } from "../icons/HideDef";
export const Input = ({ title, type, name, placeholder }) => {
  const [value, setValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleInputChange = (e) => {
    setValue(e.target.value);
  };
  const handleCrossClick = () => {
    setValue("");
  };
  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <label className="email">
      <span className="email__title">{title}</span>
      <div className="email__input-wrapper">
        <input
          className="email__input"
          type={showPassword ? "text" : type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={handleInputChange}
        />
        <div className="email__input-svg">
          {type !== "password" && (
            <span onClick={handleCrossClick}>
              <CrossIcon />
            </span>
          )}
          {type === "password" && (
            <span className="pas__span" onClick={handleTogglePassword}>
             {showPassword && <HideIcon />} 
             {!showPassword && <HideDef />} 
            </span>
          )}
        </div>
      </div>
    </label>
  );
};
