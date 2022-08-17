// lib
import React from "react";

// component
import * as S from "../../../styles/dashboardStyle/dashboardDetailStyle/DashboardDetailFocusStyle";
import { IPortfolioList } from "../../../api/schema";

export default function DashboardDetailFocus(props: {
  selectedPortfolio: IPortfolioList;
}) {
  return (
    <>
      <S.DashboardFocusTitle>Focus</S.DashboardFocusTitle>
      <S.DashboardFocusText>
        {props.selectedPortfolio.mission}
      </S.DashboardFocusText>
    </>
  );
}
