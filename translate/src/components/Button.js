import React from "react";
import LanguageContext from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";

const Button = () => {
  // const contextType = LanguageContext;

  // const text =
  //   contextType._currentValue === "english" ? "Submit" : "Voorleggen";

  return (
    <ColorContext.Consumer>
      {(color) => (
        <button className={`ui button ${color}`}>
          <LanguageContext.Consumer>
            {(value) => (value === "english" ? "Submit" : "Voorleggen")}
          </LanguageContext.Consumer>
        </button>
      )}
    </ColorContext.Consumer>
  );
};

export default Button;
