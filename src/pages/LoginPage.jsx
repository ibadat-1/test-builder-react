import React, { useState } from "react";
import Header from "../layout/Header";
import Input from "../components/UI/Input";
import styled from "styled-components";
import Button from "../components/UI/Button";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/authSlice";

const LoginPage = ({onLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  //   const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@") || password.length < 6) {
      alert("Введите корректный email и пароль (минимум 6 символов).");
      return;
    }
    ;
    dispatch(login({ email }));
    if (email === "admin@gmail.com") {
      onLogin("/create-test");
    } else {
      onLogin("/take-test");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Header />

      <StyleDiv>
        <Input
          type="email"
          value={email}
          placeholder={"Email"}
          onChange={handleEmail}
          style={{ marginTop: "40px", marginLeft: "23px" }}
        />

        <Input
          type="password"
          value={password}
          placeholder={"Password"}
          onChange={handlePassword}
          style={{ marginLeft: "23px" }}
        />

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <Button style={{ marginLeft: "23px" }} variant={"linear"}>Login</Button>
      </StyleDiv>
    </form>
  );
};

export default LoginPage;

const StyleDiv = styled.div`
  margin-top: 160px;
  margin-left: 590px;
  width: 350px;
  height: 250px;
  background-color: white;
  border-radius: 5px;
  box-shadow: -6px 14px 55px 23px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  gap: 15px;
`;
