// lib
import React, { useCallback, useState } from "react";
import ReactDom from "react-dom";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

// components
import { loginState } from "../../state/atom";
import { passwordValidation } from "../../utils/Validation";
import * as S from "../../styles/loginStyle/LoginRightContentStyle";
import { Axios } from "../../api/Axios";
import ServerFailModal from "../common/ServerFailModal";

type IuserInfo = {
  name?: string;
  id?: string;
  email?: string;
  password?: string;
  role?: number;
  token: string;
  tokenExp?: number;
};

type ILoginData = {
  message: string;
  result: boolean;
  userInfo: IuserInfo | null;
};

export default function RightContents() {
  // push
  const navigate = useNavigate();

  // recoil
  const setIsLogged = useSetRecoilState(loginState);

  // id and pw
  const [userId, setUserId] = useState<string>("");
  const [userPw, setUserPw] = useState<string>("");

  // error
  const [userIdError, setUserIdError] = useState<boolean>(false);
  const [userPwError, setUserPwError] = useState<boolean>(false);
  const [loginError, setLoginError] = useState<boolean>(false);

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
    const loginData: ILoginData = await Axios.post("/login", loginRequset);

    const { userInfo, result } = loginData;

    if (!result) {
      alert("통신 실패");
      return;
    }

    if (userInfo) {
      const { token } = userInfo;
      setIsLogged((prev): boolean => true);
      sessionStorage.setItem("accessToken", token);
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
      {ReactDom.createPortal(
        <ServerFailModal />,
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
