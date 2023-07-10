import { useState, useEffect, useContext } from "react";

import React from "react";
import LanguageContext from "../LanguageContext";
import LanguageSwitcher from "../LanguageSwitcher";

import en from "../../languages/en.json";
import zh from "../../languages/zh.json";

export default function Home() {
  const [language, setLanguage] = useState("en");
  const languages = {
    en: en,
    zh: zh,
  };

  return (
    <>
      <h1>Home</h1>
      <LanguageContext.Consumer>
        {(vvvvssss) => (
          <div>
            {/* 根據當前語言改變文本 */}
            {languages[vvvvssss.language].web_construction}
          </div>
        )}
      </LanguageContext.Consumer>

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <LanguageContext.Provider value={{ language, setLanguage }}>
        <LanguageSwitcher />

        <div>
          {/* 根據當前語言改變文本 */}
          {languages[language].welcomeMessage}
          {/* {languages[language].web_construction} */}
        </div>
      </LanguageContext.Provider>
    </>
  );
}
