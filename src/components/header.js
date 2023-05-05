import { useState, useEffect } from "react";
import "../styles.css";

export default function Header() {
  const [isTransparent, setIsTransparent] = useState(true);
  const scrollThreshold = 100; // 滾動閾值

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > scrollThreshold) {
        setIsTransparent(false);
      } else {
        setIsTransparent(true);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="Header"
      style={{
        backgroundColor: isTransparent ? "transparent" : "#666",
        opacity: isTransparent ? 0.7 : 1,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        padding: "15px",
        textAlign: "center",
        fontSize: "35px",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        zIndex: 9999
      }}
    >
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
  );
}
