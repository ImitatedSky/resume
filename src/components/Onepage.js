import { useState, useEffect, useContext } from "react";

import React from "react";
import LanguageContext from "./LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

import en from "../languages/en.json";
import zh from "../languages/zh.json";

export default function Onepage() {
  const [language, setLanguage] = useState("en");
  const languages = {
    en: en,
    zh: zh,
  };

  return (
    <>
      <div>Onepage</div>
      <O_AboutMe />
      <O_Work_Experience />
    </>
  );
}

const O_AboutMe = () => {
  return (
    <>
      <div>姓名 中 英 </div>
      <div>職稱 </div>
    </>
  );
};
const O_Education = () => {};

function O_Work_Experience() {
  return <div> this is O_Work_Experience used by function</div>;
}
function O_Skill() {}
