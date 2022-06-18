// lib
import React from "react";
import styled from "styled-components";

// components

// img

export default function DashboardSection() {
  return (
    <DashboardSectionWrapper>
      <DashboardTitle>Dashboard</DashboardTitle>
    </DashboardSectionWrapper>
  );
}

const DashboardSectionWrapper = styled.div`
  width: 70%;
  margin: 100px auto 0 auto;
`;

const DashboardTitle = styled.h1`
  color: ${(props) => props.theme.MainColor};
  font-size: 32px;
`;
