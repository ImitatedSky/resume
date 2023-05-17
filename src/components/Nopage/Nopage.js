import React, { useEffect } from "react";

const Nopage = () => {
  useEffect(() => {
    const newColor = "#9b90c2";
    document.body.style.backgroundColor = newColor;

    return () => {
      document.body.style.backgroundColor = ""; // 清除顏色
      console.log("useEffect");
    };
  }, []);

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div>
      <button
        onClick={() => (document.body.style.backgroundColor = getRandomColor())}
      >
        Change Color
      </button>
    </div>
  );
};

export default Nopage;
