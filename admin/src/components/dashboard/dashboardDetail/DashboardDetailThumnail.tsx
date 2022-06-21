// lib
import React from "react";

// component
import { IPortfolioList } from "../../../mok/Mok";
import * as S from "../../../styles/dashboardStyle/dashboardDetailStyle/DashboardDetailThumnailStye";

export default function DashboardDetailThumnail(props: {
  selectedPortfolio: IPortfolioList;
}) {
  return (
    <S.DashboardThumnailWrapper>
      <S.DashboardImgBox>
        <S.DashboardImg alt="thumnail" src={props.selectedPortfolio.img1} />
      </S.DashboardImgBox>
      <S.DashboardImgBox>
        <S.DashboardImg alt="thumnail" src={props.selectedPortfolio.img2} />
      </S.DashboardImgBox>
      <S.DashboardImgBox>
        <S.DashboardImg alt="thumnail" src={props.selectedPortfolio.img3} />
      </S.DashboardImgBox>
    </S.DashboardThumnailWrapper>
  );
}
