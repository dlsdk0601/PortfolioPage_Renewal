// lib
import React from "react";
import * as S from "../../../styles/skeleton/DashboardDetailSkeletonStyle";

export default function DashboardDetailSkeleton() {
  return (
    <S.SkeletonWrapper>
      <S.OuterCircle></S.OuterCircle>
      <S.InnerCircle></S.InnerCircle>
    </S.SkeletonWrapper>
  );
}
