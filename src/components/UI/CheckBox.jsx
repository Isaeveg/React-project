import React from "react";

export const CheckBox = ({ label }) => {
  return (
    <label className="checkbox">
      <input type="checkbox" className="checkbox__input" />
      {label && <span className="checkbox__span">{label}</span>}
    </label>
  );
};
