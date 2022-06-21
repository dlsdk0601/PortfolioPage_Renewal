import styled from "styled-components";

export const DashboardFocusTitle = styled.h1`
  font-size: 22px;
  font-weight: 700;
  color: ${(props) => props.theme.MainTextColor};
  margin-top: 50px;
`;

export const DashboardFocusText = styled.p`
  padding-left: 3%;
  width: 90%;
  border-left: 1.5px solid ${(props) => props.theme.MainTextColor};
`;
