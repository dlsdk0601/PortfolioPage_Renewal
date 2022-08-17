import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 300px;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.SubColor};
  background: #fff;
  overflow: hidden;
  z-index: 2;
`;

export const BackGround = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  content: "";
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
`;

export const TitleBox = styled.div`
  padding: 84px 0 86px;
`;

export const Title = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 1;
  text-align: center;
  color: #000000;
`;

export const ButtonBox = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  font-size: 16px;
  line-height: 1;
  padding: 10px 0;
  border: 1px solid ${(props) => props.theme.MainColor};
  border-radius: 10px;
  background: none;
  width: 20%;
  margin: 0 auto;
`;
