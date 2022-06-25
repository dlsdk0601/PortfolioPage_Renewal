// lib
import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

// components
import { loginState } from "../../state/atom";
import { passwordValidation } from "../../utils/Validation";
import * as S from "../../styles/loginStyle/LoginRightContentStyle";
import { Axios } from "../../api/Axios";
import { AxiosResponse } from "axios";

// img

export default function RightContents() {
  // push
  const navigate = useNavigate();

  // env
  const REALUSERID = process.env.REACT_APP_userID;
  const REALUSERPASSWORD = process.env.REACT_APP_userPW;

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
  const loginSubmit = useCallback(async () => {
    if (userId === "") {
      setUserIdError((prev): boolean => true);
      return;
    }

    if (!passwordValidation.test(userPw)) {
      setUserIdError((prev): boolean => false);
      setUserPwError((prev): boolean => true);
      return;
    }

    const loginRequset = {
      id: userId,
      password: userPw,
    };
    const loginData: AxiosResponse<any> = await Axios.post(
      "/login",
      loginRequset
    );
    const {
      data: { userInfo, result },
    } = loginData;

    if (!result) {
      alert("통신 실패");
      return;
    }

    if (userInfo) {
      const { token } = userInfo;
      setIsLogged((prev): boolean => true);
      sessionStorage.setItem("JWTTOKEN", token);
      navigate("/main");
    } else {
      setLoginError((prev): boolean => true);
      setUserIdError((prev): boolean => false);
      setUserPwError((prev): boolean => false);
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
        <S.ErrorText>{userIdError && "아이디를 입력해주세요."}</S.ErrorText>
        <S.ErrorText>
          {userPwError && "비밀번호형식이 잘못되었습니다."}
        </S.ErrorText>
        <S.ErrorText>{loginError && "로그인에 실패하였습니다."}</S.ErrorText>
        <S.ButtonBox>
          <S.LoginButton onClick={loginSubmit} type="submit">
            LOGIN
          </S.LoginButton>
        </S.ButtonBox>
      </S.RightArticle>
    </S.Wrapper>
  );
}
