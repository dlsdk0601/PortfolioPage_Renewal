import styled from "styled-components";

export const DashboardDetailTitle = styled.h1`
  color: ${(props) => props.theme.MainColor};
  font-weight: 600;
  font-size: 32px;
`;

export const DashboardDescription = styled.div`
  border-left: 1.5px solid ${(props) => props.theme.MainTextColor};
  margin-bottom: 30px;
`;

export const DashboardUl = styled.ul`
  width: 100%;
`;

export const DashboardLi = styled.li`
  width: 30%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const DashboardDescriptionOption = styled.p`
  text-align: left;
  width: 80%;
  margin: 0 auto;
`;

export const DashboardDescriptionTitle = styled(DashboardDescriptionOption)`
  font-size: 22px;
  font-weight: 700;
`;
