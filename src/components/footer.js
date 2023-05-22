import { useState, useEffect } from "react";
import "../styles.css";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  left: 50%;
  top: 50px;

  height: 25px;
  width: 25px;

  background-color: ${(props) => props.backgroundColor};
  border-radius: 50%;

  border: none;
  box-shadow: 0 0 7px #ccc;
  position: relative;

  &:hover {
    box-shadow: 0 0 11px #ccc;
  }
`;
const HoverContainer = styled.div`
  display: flex;
  position: absolute;
  top: -35px;
  left: 50%;

  transform: translateX(-50%);
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: all 0.8s ease;
  //  transition:  opacity 1.2s ease,visibility 0.6s ${(props) =>
    props.show
      ? "0s"
      : "0.6s"}; 這邊使用 visibility trans 特性使 container 到0(hidden)時就不能點擊
`;

const HoverDivs = styled.div`
  height: 25px;
  width: 25px;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 50%;
  display: inline-block;
  margin-right: 5px;

  &:hover {
    border: none;
    box-shadow: 0 0 5px #ccc;
  }
`;

const Footer = () => {
  const [backgroundColor, setBackgroundColor] = useState("#9b90c2");
  const [showHoverDivs, setShowHoverDivs] = useState(false);

  useState(() => {
    const storedColor = localStorage.getItem("backgroundColor");
    return storedColor || "#bbb";
  });

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const changeBackgroundColor = () => {
    const newColor = getRandomColor();
    // setBackgroundColor(newColor);
    document.body.style.backgroundColor = newColor;
  };

  const handleMouseEnter = (event) => {
    // if (event.target === event.currentTarget) {
    setShowHoverDivs(true);
    // }
  };

  const handleMouseLeave = () => {
    setShowHoverDivs(false);
  };
  const changeColor = (color, e) => {
    e.stopPropagation();
    console.log(color);
    document.body.style.backgroundColor = color;
  };

  return (
    <>
      <div>
        <Div
          backgroundColor={backgroundColor}
          onClick={(e) => changeColor(backgroundColor, e)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <>
            <HoverContainer show={showHoverDivs}>
              <HoverDivs
                onClick={(e) => changeColor("#bbb", e)}
                backgroundColor="#bbb"
              />
              <HoverDivs
                onClick={(e) => changeColor("#d30038", e)}
                backgroundColor="#d30038"
              />
              <HoverDivs
                onClick={(e) => changeColor("#007936", e)}
                backgroundColor="#007936"
              />
              <HoverDivs
                onClick={(e) => changeColor("#872bff", e)}
                backgroundColor="#872bff"
              />
              <HoverDivs
                onClick={(e) => changeColor("#0085f2", e)}
                backgroundColor="#0085f2"
              />
            </HoverContainer>
          </>
        </Div>
      </div>
    </>
  );
};

export default Footer;
