// lib
import React, { useCallback, useRef, useState } from "react";
import ReactDom from "react-dom";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

// components
import { loginState } from "../../state/atom";
import { passwordValidation } from "../../utils/Validation";
import * as S from "../../styles/loginStyle/LoginRightContentStyle";
import { Axios } from "../../api/Axios";
import ServerFailModal from "../common/ServerFailModal";
import api from "../../api/api";
import { isBlank, isResSuccess } from "../../ex/ex";
import useClickOutside from "../../utils/useClickOutside";

export default function RightContents() {
  // push
  const navigate = useNavigate();

  // recoil
  const setIsLogged = useSetRecoilState(loginState);

  // id and pw
  const [userId, setUserId] = useState<string>("");
  const [userPw, setUserPw] = useState<string>("");

  // error
  const [loginError, setLoginError] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string>("");

  const serverFailRef = useRef(null);

  const { isOpen, setIsOpen } = useClickOutside(serverFailRef);

  // error Text
  const ErrorTextHanle = useCallback((code: number): void => {
    if (code === 601) {
      setIsOpen((prev) => true);
      setErrorText("아이디가 잘못됐습니다.");
      return;
    }

    if (code === 602) {
      setIsOpen((prev) => true);
      setErrorText("비밀번호가 잘못됐습니다.");
      return;
    }

    if (code === 603) {
      setIsOpen((prev) => true);
      setErrorText("토큰 저장 실패했습니다.");
      return;
    }

    if (code === 504) {
      setLoginError((prev) => true);
      setErrorText("아이디를 입력해주세요.");
      return;
    }

    if (code === 505) {
      setLoginError((prev) => true);
      setErrorText("비밀번호 형식이 잘못됐습니다.");
      return;
    }
  }, []);

  // loginHandle
  const loginSubmit = useCallback(async () => {
    if (userId === "") {
      ErrorTextHanle(504);
      return;
    }

    if (!passwordValidation.test(userPw)) {
      ErrorTextHanle(505);
      return;
    }

    const loginRequset = {
      id: userId,
      password: userPw,
    };

    const loginData = await api.login(loginRequset);

    if (!isResSuccess(loginData)) {
      ErrorTextHanle(loginData.code);
      return;
    }

    if (!isBlank(loginData.data)) {
      const { token } = loginData.data;
      setIsLogged((prev): boolean => true);
      sessionStorage.setItem("accessToken", token);
      navigate("/main");
    } else {
      setLoginError((prev): boolean => true);
    }
  }, [userId, userPw]);

  // enter키 handle
  const enterKeyPressHandle = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;

    if (key === "Enter") {
      loginSubmit();
    }
  };

  const onClickOkButton = () => {
    setIsOpen((prev) => false);
  };

  return (
    <S.Wrapper>
      {isOpen &&
        ReactDom.createPortal(
          <ServerFailModal
            title={errorText}
            onClickOkButton={() => onClickOkButton()}
          />,
          // @ts-ignore
          document.getElementById("modal-root")
        )}
      <S.RightArticle>
        <S.RightTitle>SignIn</S.RightTitle>
        <S.LoginForm>
          <S.InputTag
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            onKeyDown={enterKeyPressHandle}
            placeholder="Enter Admin ID"
            type="text"
            name="adminId"
          />
          <S.InputTag
            value={userPw}
            onChange={(e) => setUserPw(e.target.value)}
            onKeyDown={enterKeyPressHandle}
            placeholder="Enter Admin PassWord"
            type="password"
            name="adminPw"
          />
        </S.LoginForm>
        <S.ErrorText>{loginError && errorText}</S.ErrorText>
        <S.ButtonBox>
          <S.LoginButton onClick={loginSubmit} type="submit">
            LOGIN
          </S.LoginButton>
        </S.ButtonBox>
      </S.RightArticle>
    </S.Wrapper>
  );
}
