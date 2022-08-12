import React, { useState } from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";

const App = () => {
  const [language, setLanguage] = useState("english");

  const onLanguageChange = function (language) {
    setLanguage(language);
  };

  return (
    <div className="ui container">
      <div>
        Select a language:
        <i className="flag us" onClick={() => onLanguageChange("english")} />
        <i className="flag nl" onClick={() => onLanguageChange("dutch")} />
      </div>
      <ColorContext.Provider value="red">
        <LanguageContext.Provider value={language}>
          <UserCreate />
        </LanguageContext.Provider>
      </ColorContext.Provider>
    </div>
  );
};

export default App;
