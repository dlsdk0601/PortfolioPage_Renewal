import styled from "styled-components";

export const NavWrapper = styled.nav`
  width: 10vw;
  height: 100vh;
  background-color: ${(props) => props.theme.MainColor};
  color: ${(props) => props.theme.SubTextColor};
`;

export const Account = styled.div`
  width: 100%;
  height: 20%;
  border-bottom: 1px solid white;
  margin-bottom: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

export const ProfileBox = styled.figure`
  width: 40px;
  height: 40px;
`;

export const Profile = styled.img`
  widht: 100%;
  height: 100%;
`;

export const UserLevel = styled.span``;

export const Logout = styled.button`
  color: ${(props) => props.theme.SubTextColor};
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
`;

export const Logo = styled.h1`
  font-size: 18px;
  cursor: pointer;
`;
