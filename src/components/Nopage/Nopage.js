import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Div = styled.div`
  height: 25px;
  width: 25px;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 50%;
  display: inline-block;
  box-shadow: 0 0 7px #ccc; /* 環形邊框 */
`;

const Nopage = () => {
  const [backgroundColor, setBackgroundColor] = useState("#9b90c2");
  // useEffect(() => {
  //   const newColor = "#9b90c2";
  //   document.body.style.backgroundColor = newColor;

  //   return () => {
  //     document.body.style.backgroundColor = ""; // 清除顏色
  //     console.log("useEffect");
  //   };
  // }, []);

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
      <Div
        backgroundColor={backgroundColor}
        onClick={() => (document.body.style.backgroundColor = getRandomColor())}
      />
    </div>
  );
};

export default Nopage;
