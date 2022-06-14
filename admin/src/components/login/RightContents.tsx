// lib
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";

// components
import { loginState } from "../../state/atom";
import { passwordValidation } from "../../utils/Validation";

// img

export default function RightContents() {
  // push
  const navigate = useNavigate();

  // recoil
  const setIsLogged = useSetRecoilState(loginState);

  // id and pw
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");

  // error
  const [userIdError, setUserIdError] = useState(false);
  const [userPwError, setUserPwError] = useState(false);
  const [loginError, setLoginError] = useState(false);

  // loginHandle
  const loginSubmit = () => {
    if (userId === "") {
      setUserIdError((prev): boolean => true);
      return;
    }

    if (!passwordValidation.test(userPw)) {
      setUserIdError((prev): boolean => false);
      setUserPwError((prev): boolean => true);
      return;
    }

    const REALUSERID = process.env.REACT_APP_userID;
    const REALUSERPASSWORD = process.env.REACT_APP_userPW;

    if (userId === REALUSERID && userPw === REALUSERPASSWORD) {
      navigate("/list");
      setIsLogged((prev): boolean => true);
    } else {
      setUserIdError((prev): boolean => false);
      setUserPwError((prev): boolean => false);
      setLoginError((prev): boolean => true);
    }
  };

  // enter키 handle
  const enterKeyPressHandle = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;

    if (key === "Enter") {
      loginSubmit();
    }
  };

  return (
    <Wrapper>
      <RightArticle>
        <RightTitle>SignIn</RightTitle>
        <LoginForm>
          <InputTag
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            onKeyDown={enterKeyPressHandle}
            placeholder="Enter Admin ID"
            type="text"
            name="adminId"
          />
          <InputTag
            value={userPw}
            onChange={(e) => setUserPw(e.target.value)}
            onKeyDown={enterKeyPressHandle}
            placeholder="Enter Admin PassWord"
            type="password"
            name="adminPw"
          />
        </LoginForm>
        <ErrorText>{userIdError && "아이디를 입력해주세요."}</ErrorText>
        <ErrorText>{userPwError && "비밀번호형식이 잘못되었습니다."}</ErrorText>
        <ErrorText>{loginError && "로그인에 실패하였습니다."}</ErrorText>
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
  margin: 20px auto 10px auto;
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

const ErrorText = styled.span`
  font-size: 11px;
  color: #ee0000;
`;
