// lib
import React from "react";

// components
import * as S from "../../../styles/skeleton/PortfolioListItemSkeletonStyle";

export default function PortfolioListItemSkeleton() {
  return (
    <S.PortfolioList>
      <S.ImgBox></S.ImgBox>
      <S.PortfolioTtile></S.PortfolioTtile>
    </S.PortfolioList>
  );
}
