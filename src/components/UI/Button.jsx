import React from "react";
import styled from "styled-components";

const Button = ({ onClick, type, disabled, variant, children, ...props }) => {
  return (
    <StyleButton
      type={type}
      onClick={onClick}
      variant={variant}
      {...props}
      disabled={disabled}
    >
      {children}
    </StyleButton>
  );
};

export default Button;

const StyleButton = styled.button`
  width: 300px;
  height: 50px;
  border-radius: 3px;
  border: none;
  background: ${(props) =>
    props.variant === "linear"
      ? "linear-gradient(to right, rgb(33, 223, 219), rgb(76, 117, 205))"
      : props.variant === "blue"
      ? "rgb(25, 118, 210)"
      : "rgb(88, 180, 91)"};
  color: white;
  font-weight: 700;

  &:hover {
    background: ${(props) =>
      props.variant === "linear"
        ? "linear-gradient(to right, rgb(76, 117, 205), rgb(33, 223, 219))"
        : props.variant === "blue"
        ? "rgb(21, 101, 192)"
        : "rgb(63, 149, 67)"};
    box-shadow: -6px 14px 55px 23px rgba(0, 0, 0, 0.1);
  }
`;
