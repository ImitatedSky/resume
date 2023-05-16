import React, { useContext } from "react";
import LanguageContext from "./LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const options = [
    { value: "en", label: "English" },
    { value: "zh", label: "中文" },
  ];

  return (
    <>
      <select value={language} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="zh">中文</option>
      </select>
    </>
  );
};

export default LanguageSwitcher;
