import styled from "styled-components";

export const PortfolioListBox = styled.ul`
  max-height: 80vh;
  padding-right: 10px;
  overflow: auto;

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

export const PortfolioListItem = styled.li`
  width: 100%;
  height: 80px;
  margin: 20px 0;
  padding: 10px 30px;
  border-radius: 30px;
  border: 1px solid ${(props) => props.theme.SubColor};
  transition: 0.3s;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &:hover {
    box-shadow: 3px 3px 3px 3px ${(props) => props.theme.SubColor};
  }
`;

export const ImgBox = styled.figure`
  width: 50px;
  height: 50px;
`;

export const Poster = styled.img`
  width: 100%;
  height: 100%;
`;

export const PortfolioTtile = styled.p`
  margin-left: 20px;
`;
