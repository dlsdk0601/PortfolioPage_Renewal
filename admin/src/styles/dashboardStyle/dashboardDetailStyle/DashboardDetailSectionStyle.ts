import styled from "styled-components";

export const DashboardDetailSectionWrapper = styled.div`
  width: 85%;
  max-height: 90vh;
  overflow: auto;
  margin: 50px 0 0 3%;
  display: flex;
  justify-content: flex-satrt;
  align-items: flex-start;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.SubTextColor};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.MainColor};
    border-radius: 30px;
  }
`;
