import styled from "styled-components";

export const TabMenuWrapper = styled.div<{ isActive: boolean }>`
  width: 95%;
  padding: 5%;
  margin: 20px 5%;
  border-radius: 20px 0 0 20px;
  cursor: pointer;
  transition: 0.3s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => (props.isActive ? "#e5e5e7" : "none")};
  &:hover {
    background-color: ${(props) =>
      props.isActive ? "none" : props.theme.SubColor};
  }
`;

export const MenuImageBox = styled.figure`
  width: 25px;
  height: 25px;
`;

export const MenuImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const MenuTitle = styled.span<{ isActive: boolean }>`
  display: inline-block;
  width: 78%;
  font-size: 16px;
  color: ${(props) =>
    props.isActive ? props.theme.MainColor : props.theme.SubTextColor};
`;
