import { useState, useEffect, useContext } from "react";

import React from "react";
import LanguageContext from "./LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

import styled from "styled-components";


import en from "../languages/en.json";
import zh from "../languages/zh.json";

const Div = styled.div`
  height: 25px;
  width: 25px;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 50%;
  display: inline-block;
  box-shadow: 0 0 7px #ccc; /* 環形邊框 */
`;

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
