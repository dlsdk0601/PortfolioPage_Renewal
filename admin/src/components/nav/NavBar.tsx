// lib
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { loginState } from "../../state/atom";
import TapMenu from "./TapMenu";

// components

export default function NavBar() {
  const setIsLogged = useSetRecoilState(loginState);
  const navigate = useNavigate();

  const logoutHandle = () => {
    setIsLogged((prev) => false);
    sessionStorage.removeItem("Access_Token");
    navigate("/");
  };

  return (
    <NavWrapper>
      <Account>
        <Logo>Portpolio Admin</Logo>
        <ProfileBox>
          <Profile alt="프로필" src={require("../../styles/img/profile.png")} />
        </ProfileBox>
        <UserLevel>Admin</UserLevel>
        <Logout onClick={logoutHandle}>Logout</Logout>
      </Account>
      <TapMenu />
    </NavWrapper>
  );
}

const NavWrapper = styled.nav`
  width: 10vw;
  height: 100vh;
  background-color: #283138;
  color: white;
`;

const Account = styled.div`
  width: 100%;
  height: 20%;
  border-bottom: 1px solid white;
  margin-bottom: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

const ProfileBox = styled.figure`
  width: 45px;
  height: 45px;
`;

const Profile = styled.img``;
const UserLevel = styled.span``;

const Logout = styled.button`
  color: white;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
`;

const Logo = styled.h1`
  font-size: 22px;
`;
