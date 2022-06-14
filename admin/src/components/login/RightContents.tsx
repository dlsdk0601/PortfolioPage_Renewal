// lib
import React, { useState } from "react";
import styled from "styled-components";

// components

// img

export default function RightContents() {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");

  const loginSubmit = () => {
    console.log(userId);
    console.log(userPw);

    if (userId === "") return;
    if (userPw === "") return;
  };

  const validation = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;

    if (key === "Enter") {
      loginSubmit();
    }
  };

  return (
    <Wrapper>
      <RightArticle>
        <RightTitle>SignIn</RightTitle>
        <LoginForm onSubmit={loginSubmit}>
          <InputTag
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            onKeyDown={validation}
            placeholder="Enter Admin ID"
            type="text"
            name="adminId"
          />
          <InputTag
            value={userPw}
            onChange={(e) => setUserPw(e.target.value)}
            onKeyDown={validation}
            placeholder="Enter Admin PassWord"
            type="password"
            name="adminPw"
          />
        </LoginForm>
        <ButtonBox>
          <LoginButton onClick={loginSubmit} type="submit">
            LOGIN
          </LoginButton>
        </ButtonBox>
      </RightArticle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 50%;
  height: 100%;
  background-color: white;
`;

const RightArticle = styled.article`
  width: 50%;
  margin: 100px auto 0 auto;
`;

const RightTitle = styled.h2`
  text-align: center;
  width: 100%;
  margin-bottom: 100px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -10px;
    transform: translate(-50%, 0);
    width: 30px;
    height: 3px;
    background-color: #35464e;
  }
`;

const LoginForm = styled.form``;

const InputTag = styled.input`
  width: 100%;
  margin: 20px auto 20px auto;
  border: none;
  border-bottom: 1px solid #b3b3b3;

  &:focus {
    outline: none;
    background-color: none;
  }
`;

const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginButton = styled.button`
  margin: 0 auto;
  margin-top: 80px;
  width: 150px;
  font-size: 16px;
  line-height: 3;
  border: none;
  border-radius: 16px;
  background-color: #35464e;
  color: white;
  cursor: pointer;
`;
