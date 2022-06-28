import styled from "styled-components";

export const PortfolioUploadWrapper = styled.div`
  width: 85%;
  padding-right: 20px;
  max-height: 90vh;
  overflow: auto;
  margin: 70px 0 0 3%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;

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
