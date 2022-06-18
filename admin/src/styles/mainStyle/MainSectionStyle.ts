import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 70%;
  margin: 200px auto 0 auto;
  height: 100%;
`;

export const MainTitle = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
  color: ${(props) => props.theme.MainColor};
`;

export const MainListUl = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MainListLi = styled.li`
  width: 300px;
  height: 150px;
  padding-left: 10px;
  border: 1px solid ${(props) => props.theme.MainColor};
  border-left: 20px solid ${(props) => props.theme.MainColor};
  border-radius: 20px;
  margin: 40px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    box-shadow: 3px 3px 3px 3px ${(props) => props.theme.SubColor};
  }
`;

export const FigureForList = styled.figure`
  width: 35px;
  height: 35px;
`;

export const ImgForList = styled.img`
  width: 100%;
  height: 100%;
`;

export const Description = styled.div`
  margin-left: 20px;
`;

export const ListTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 5px;
`;

export const ListDescription = styled.p`
  font-size: 16px;
`;
