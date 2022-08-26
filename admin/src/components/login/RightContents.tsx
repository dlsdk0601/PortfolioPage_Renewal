// lib
import React, { useCallback, useRef, useState } from "react";
import ReactDom from "react-dom";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

// components
import { passwordValidation } from "../../utils/Validation";
import * as S from "../../styles/loginStyle/LoginRightContentStyle";
import ServerFailModal from "../common/ServerFailModal";
import api from "../../api/api";
import { errorTextHandle, isBlank, isResSuccess } from "../../ex/ex";
import useClickOutside from "../../utils/useClickOutside";
import { userDataFetch } from "../../state/atom";
import CustomModal from "../modal/CustomModal";

export default function RightContents() {
  // push
  const navigate = useNavigate();

  // recoil
  const selector = useSetRecoilState(userDataFetch);

  // id and pw
  const [userId, setUserId] = useState<string>("");
  const [userPw, setUserPw] = useState<string>("");

  // error
  const [errorCode, setErrorCode] = useState<number | null>(null);

  const serverFailRef = useRef(null);

  const { isOpen, setIsOpen } = useClickOutside(serverFailRef);

  // loginHandle
  const loginSubmit = useCallback(async () => {
    if (userId === "") {
      setErrorCode(504);
      return;
    }

    if (!passwordValidation.test(userPw)) {
      setErrorCode(505);
      return;
    }

    const loginRequset = {
      id: userId,
      password: userPw,
    };

    const loginData = await api.login(loginRequset);

    if (!isResSuccess(loginData)) {
      errorTextHandle(loginData.code);
      return;
    }

    if (!isBlank(loginData.data)) {
      const { token, name, id, role } = loginData.data;
      selector({ token, name, id, role });
      sessionStorage.setItem("accessToken", token);
      navigate("/main");
    } else {
      setErrorCode(1000);
    }
  }, [userId, userPw]);

  // enter키 handle
  const enterKeyPressHandle = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;

    if (key === "Enter") {
      loginSubmit();
    }
  };

  return (
    <S.Wrapper>
      {isOpen && errorCode && (
        <CustomModal
          title={errorTextHandle(errorCode)}
          onClick={() => setIsOpen((prev) => false)}
        />
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
        <S.ErrorText>{errorCode && errorTextHandle()}</S.ErrorText>
        <S.ButtonBox>
          <S.LoginButton onClick={loginSubmit} type="submit">
            LOGIN
          </S.LoginButton>
        </S.ButtonBox>
      </S.RightArticle>
    </S.Wrapper>
  );
}
