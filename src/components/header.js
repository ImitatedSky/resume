import { useState, useEffect } from "react";
import "../style/nav.css";

export default function Header() {
  const [scrollDownBool, setScrollDownBool] = useState(false);
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

      if (downScrollCount >= 50) {
        console.log("連續向下滾動超過50次");
        downScrollCount = 0;
        setScrollDownBool(true);
      }

      if (upScrollCount >= 25 || currentScroll == 0) {
        console.log("連續向上滾動超過25次");
        upScrollCount = 0;
        setScrollDownBool(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navStyle = {
    opacity: scrollDownBool ? 0.2 : 1,
  };

  return (
    <>
      <nav className="Header" style={navStyle}>
        <div>1333</div>
        <div>
          關於我們<a href="https://ex.com"></a>
        </div>
        <div>Email</div>
      </nav>
      <div></div>
    </>
  );
}
