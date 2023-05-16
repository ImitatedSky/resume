import * as EducationObj from "./EducationObj";
import LanguageContext from "../LanguageContext";


class nonono{
    
}

export default function Education() {
  const Education = {
    zh: EducationObj.Education_zh,
    en: EducationObj.Education_en,
  };
  return (
    <>
      <LanguageContext.Consumer>
        {(value) => (
          <>
            <div>
              {/* 根據當前語言改變文本 */}
              {Education[value.language][0].school}
            </div>
            <div>
              {Education[value.language][0].Date.start} ↦{" "}
              {Education[value.language][0].Date.end}
            </div>
            <div>{Education[value.language][0].Department}</div>
          </>
        )}
      </LanguageContext.Consumer>
    </>
  );
}

export function Education_onepage() {
  return;
}
