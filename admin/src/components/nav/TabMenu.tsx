// lib
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// components

export default function TabMenu(props: {
  tapName: string;
  darkImg: string;
  whiteImg: string;
  isActive: boolean;
}) {
  const navigate = useNavigate();

  const clickTabMenuHandle = (tapName: string) => {
    const path: string = "/" + tapName.toLocaleLowerCase();

    navigate(path);
  };

  return (
    <TabMenuWrapper
      onClick={() => clickTabMenuHandle(props.tapName)}
      isActive={props.isActive}
    >
      <MenuImageBox>
        <MenuImage
          src={props.isActive ? props.darkImg : props.whiteImg}
          alt="메뉴사진"
        />
      </MenuImageBox>
      <MenuTitle isActive={props.isActive}>{props.tapName}</MenuTitle>
    </TabMenuWrapper>
  );
}

const TabMenuWrapper = styled.div<{ isActive: boolean }>`
  width: 95%;
  padding: 5%;
  margin: 20px 5%;
  border-radius: 20px 0 0 20px;
  cursor: pointer;
  transition: 0.3s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => (props.isActive ? "#e5e5e7" : "none")};
  &:hover {
    background-color: ${(props) => (props.isActive ? "none" : "#35464e")};
  }
`;

const MenuImageBox = styled.figure`
  width: 30px;
  height: 30px;
`;

const MenuImage = styled.img`
  width: 100%;
  height: 100%;
`;

const MenuTitle = styled.span<{ isActive: boolean }>`
  display: inline-block;
  width: 60%;
  font-size: 16px;
  color: ${(props) => (props.isActive ? "#283138" : "white")};
`;
