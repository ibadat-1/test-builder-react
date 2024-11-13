import React from "react";
import styled from "styled-components";

const Input = ({ value, placeholder, onChange, type = "text", ...props }) => {
  return (
    <StyledInput
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default Input;

const StyledInput = styled.input`
  width: 300px;
  height: 55px;
  border-radius: 3px;
  border: 0.5px solid grey;
  padding-left: 20px;

  &:hover {
    border: 1.5px solid black;
    box-shadow: -6px 14px 55px 23px rgba(0,0,0,0.1);
  }
`;
