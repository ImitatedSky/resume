import { useState, useEffect, useContext } from "react";

import React from "react";
import LanguageContext from "../LanguageContext";
import LanguageSwitcher from "../LanguageSwitcher";

import en from "../../languages/en.json";
import zh from "../../languages/zh.json";

export default function AboutMe() {
  const { language } = useContext(LanguageContext);

  const languages = {
    en: en,
    zh: zh,
  };

  return (
    <>
      <h1>About Me</h1>
      <LanguageContext.Consumer>
        {(languageContext) => (
          <div>
            {/* 根据当前语言改变文本 */}
            {languages[languageContext.language].welcomeMessage}
          </div>
        )}
      </LanguageContext.Consumer>
    </>
  );
}
