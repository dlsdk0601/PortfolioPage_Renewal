import React from "react";
import { IPortfolioList } from "../../../mok/Mok";
import * as S from "../../../styles/dashboardStyle/dashboardDetailStyle/DashboardDetailOverView";

export default function DashboardDetailOverView(props: {
  selectedPortfolio: IPortfolioList;
}) {
  return (
    <>
      <S.DashboardOverViewTitle>Overview</S.DashboardOverViewTitle>
      <S.DashboardOverViewText>
        {props.selectedPortfolio.exp}
      </S.DashboardOverViewText>
    </>
  );
}
