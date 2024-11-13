import React from "react";
import styled from "styled-components";
// import TestIcon from "../assets/icons/test-icon.svg?react";

const Header = () => {
  return (
    <StyleHeader>
      {/* <TestIcon /> */}
      <TitleDiv>
        <StyleH1>Test builder</StyleH1>
      </TitleDiv>
    </StyleHeader>
  );
};

export default Header;

const StyleHeader = styled.header`
  width: 100%;
  height: 80px;
  background-color: rgb(233, 241, 251);
  display: flex;
  flex-direction: row;
`;

const StyleH1 = styled.h1`
  font-size: 24px;
  font-weight: 500;
  text-align: center;
`;

const TitleDiv = styled.div`
  width: 450px;
  height: 40px;
  border: 1px solid black;
  border-radius: 40px;
  /* margin-left: 400px; */
  position: absolute;
  left: 545px;
  top: 15px;
`;
