import React from "react";
import { IPortfolioList } from "../../../api/schema";
import * as S from "../../../styles/dashboardStyle/dashboardDetailStyle/DashboardDetailCaptureStyle";

export default function DashboardDetailCapture(props: {
  selectedPortfolio: IPortfolioList;
}) {
  return (
    <S.DashboardCaptureBox>
      <S.DashboardCapture alt="capture" src={props.selectedPortfolio.capture} />
    </S.DashboardCaptureBox>
  );
}
