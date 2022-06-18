// lib
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// components
import * as S from "../../styles/navStyle/TabMenuStyle";

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
    <S.TabMenuWrapper
      onClick={() => clickTabMenuHandle(props.tapName)}
      isActive={props.isActive}
    >
      <S.MenuImageBox>
        <S.MenuImage
          src={props.isActive ? props.darkImg : props.whiteImg}
          alt="메뉴사진"
        />
      </S.MenuImageBox>
      <S.MenuTitle isActive={props.isActive}>{props.tapName}</S.MenuTitle>
    </S.TabMenuWrapper>
  );
}
