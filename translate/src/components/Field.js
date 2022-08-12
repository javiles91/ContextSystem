import React from "react";
import LanguageContext from "../context/LanguageContext";

const Field = () => {
  const contextType = LanguageContext;

  const text = contextType._currentValue === "english" ? "Name" : "Naam";

  return (
    <div className="ui field">
      <label>{text}</label>
      <input />
    </div>
  );
};

export default Field;
