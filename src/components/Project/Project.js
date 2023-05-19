import { useState } from "react";
import styled from "styled-components";

const Div = styled.div`
  height: 25px;
  width: 25px;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 50%;
  display: inline-block;
  border: none;
  box-shadow: 0 0 7px #ccc;
  position: relative;
  left: 100px;
  top: 50px;

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
  transition: all 0.8s ease; //  transition:  opacity 1.2s ease,visibility 0.6s ${(
    props
  ) => (props.show ? "0s" : "0.6s")};
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

const Project = () => {
  const [backgroundColor, setBackgroundColor] = useState("#9b90c2");
  // useState(() => {
  //   const storedColor = localStorage.getItem("backgroundColor");
  //   return storedColor || "#bbb";
  // });

  const [showHoverDivs, setShowHoverDivs] = useState(false);

  const changeBackgroundColor = () => {
    const newColor = getRandomColor();
    setBackgroundColor(newColor);
  };

  const handleMouseEnter = (event) => {
    // if (event.target === event.currentTarget) {
    setShowHoverDivs(true);
    // }
  };

  const handleMouseLeave = () => {
    setShowHoverDivs(false);
  };

  // const getRandomColor = () => {
  //   const letters = "0123456789ABCDEF";
  //   let color = "#";
  //   for (let i = 0; i < 6; i++) {
  //     color += letters[Math.floor(Math.random() * 16)];
  //   }
  //   return color;
  // };

  return (
    <>
      <div>
        <Div
          backgroundColor={backgroundColor}
          // onClick={changeBackgroundColor}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <>
            <HoverContainer show={showHoverDivs}>
              <HoverDivs backgroundColor="#bbb" />
              <HoverDivs backgroundColor="#d30038" />
              <HoverDivs backgroundColor="#007936" />
              <HoverDivs backgroundColor="#872bff" />
              <HoverDivs backgroundColor="#0085f2" />
            </HoverContainer>
          </>
        </Div>
      </div>
    </>
  );
};

export default Project;
