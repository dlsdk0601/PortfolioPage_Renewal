// lib
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

// components
import { userDataFetch } from "../../state/atom";
import TapList from "./TapList";
import * as S from "../../styles/navStyle/NavBarStyle";

export default function NavBar() {
  const navigate = useNavigate();

  const selector = useSetRecoilState(userDataFetch);

  const logoutHandle = () => {
    selector({ id: "", name: "", role: null, token: null });
    sessionStorage.removeItem("accessToken");
    navigate("/");
  };

  const goToMainPage = () => {
    navigate("/main");
  };

  return (
    <S.NavWrapper>
      <S.Account>
        <S.Logo onClick={goToMainPage}>Portpolio Admin</S.Logo>
        <S.ProfileBox>
          <S.Profile
            alt="프로필"
            src={require("../../styles/img/logo_white.png")}
          />
        </S.ProfileBox>
        <S.UserLevel>Master</S.UserLevel>
        <S.Logout onClick={logoutHandle}>Logout</S.Logout>
      </S.Account>
      <TapList />
    </S.NavWrapper>
  );
}
