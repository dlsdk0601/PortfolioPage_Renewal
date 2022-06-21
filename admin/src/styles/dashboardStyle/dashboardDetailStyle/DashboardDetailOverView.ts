import styled from "styled-components";

export const DashboardOverViewTitle = styled.h1`
  color: ${(props) => props.theme.MainTextColor};
  font-weight: 700;
  font-size: 22px;
`;

export const DashboardOverViewText = styled.p`
  padding-left: 3%;
  width: 90%;
  border-left: 1.5px solid ${(props) => props.theme.MainTextColor};
`;
