// lib
import React from "react";

// components
import PortfolioList from "./PortfolioList";
import * as S from "../../styles/dashboardStyle/DashboardSectionStyle";

// img

export default function DashboardSection() {
  return (
    <S.DashboardSectionWrapper>
      <S.DashboardTitle>Dashboard</S.DashboardTitle>
      <PortfolioList />
    </S.DashboardSectionWrapper>
  );
}
