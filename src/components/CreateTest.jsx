import React, { useState } from "react";
import Input from "./UI/Input";
import Button from "./UI/Button";
import styled from "styled-components";

const CreateTest = () => {
  const [testName, setTestName] = useState("");

  const handleCreateTest = () => {
    localStorage.setItem("testName", testName);
    window.location.href = "/test-details";
  };
  return (
    <StyleDiv>
      <Input
        type="text"
        placeholder={"Введите название теста"}
        value={testName}
        onChange={(e) => setTestName(e.target.value)}
        style={{ marginTop: "30px" }}
      />
      <Button onClick={handleCreateTest}>Создать</Button>
    </StyleDiv>
  );
};

export default CreateTest;


const StyleDiv = styled.div`
  background-color: white;
  width: 380px;
  height: 180px;
  margin-left: 580px;
  display: flex;
  gap: 15px;
  flex-direction: column;
  align-items: center;
  box-shadow: -6px 14px 55px 23px rgba(0, 0, 0, 0.1);
`;
