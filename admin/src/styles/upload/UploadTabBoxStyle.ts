import styled from "styled-components";

export const UploadTabBoxWrapper = styled.ul`
  width: 12vw;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 13vw;
  top: 25px;
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.MainColor};
`;

export const UploadTabBoxItem = styled.li`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UploadTabBoxBackground = styled.div<{ isLeft: boolean }>`
  width: 6vw;
  height: 30px;
  position: absolute;
  left: ${(props) => (props.isLeft ? "13vw" : "19vw")};
  top: 25px;
  background: ${(props) => props.theme.MainColor};
  opacity: 0.6;
  z-index: 2;
  transition: 0.3s;
  cursor: pointer;
`;
