import { useState, useEffect } from "react";
import "../style/nav.css";

export default function Header() {
  let Header = "Header";

  const [hclassName, setHClassName] = useState("Header");
  let lastScrollTop = 0;
  let downScrollCount = 0;
  let upScrollCount = 0;

  useEffect(() => {
    function handleScroll() {
      const currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScroll > lastScrollTop) {
        // 向下滾動
        downScrollCount++;
        upScrollCount = 0;
      } else if (currentScroll < lastScrollTop) {
        // 向上滾動
        upScrollCount++;
        downScrollCount = 0;
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // 防止無限滾動

      if (downScrollCount >= 50 && !Header.includes("navOpa")) {
        // console.log("連續向下滾動超過50次");
        downScrollCount = 0;
        Header += " navOpa";
        setHClassName(Header);
      }

      if (upScrollCount >= 25 || currentScroll == 0) {
        // console.log("連續向上滾動超過25次");
        upScrollCount = 0;
        Header = Header.replace(/ navOpa/g, "");
        setHClassName(Header);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={hclassName}
        // style={navStyle}
      >
        <div>Home</div>
        <div>AboutMe</div>
        <div>Experience</div>
        <div>Project</div>
        <div>Contact</div>
      </nav>
      <div></div>
    </>
  );
}
