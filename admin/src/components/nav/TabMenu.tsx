// lib
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// components
import * as S from "../../styles/navStyle/TabMenuStyle";

export default function TabMenu(props: {
  tapName: string;
  darkImg: string;
  whiteImg: string;
  tapLink: string;
}) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <S.TabMenuWrapper
      onClick={() => navigate(props.tapLink)}
      isActive={pathname === props.tapLink}
    >
      <S.MenuImageBox>
        <S.MenuImage
          src={pathname === props.tapLink ? props.darkImg : props.whiteImg}
          alt="메뉴사진"
        />
      </S.MenuImageBox>
      <S.MenuTitle isActive={pathname === props.tapLink}>
        {props.tapName}
      </S.MenuTitle>
    </S.TabMenuWrapper>
  );
}
