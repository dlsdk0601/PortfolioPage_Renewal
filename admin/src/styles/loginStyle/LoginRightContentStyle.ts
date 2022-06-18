import styled from "styled-components";

export const Wrapper = styled.div`
  width: 50%;
  height: 100%;
  background-color: ${(props) => props.theme.SubTextColor};
`;

export const RightArticle = styled.article`
  width: 50%;
  margin: 100px auto 0 auto;
`;

export const RightTitle = styled.h2`
  text-align: center;
  width: 100%;
  margin-bottom: 100px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -10px;
    transform: translate(-50%, 0);
    width: 30px;
    height: 3px;
    background-color: ${(props) => props.theme.SubColor};
  }
`;

export const LoginForm = styled.form``;

export const InputTag = styled.input`
  width: 100%;
  margin: 20px auto 10px auto;
  border: none;
  border-bottom: 1px solid #b3b3b3;

  &:focus {
    outline: none;
    background-color: none;
  }
`;

export const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginButton = styled.button`
  margin: 0 auto;
  margin-top: 80px;
  width: 150px;
  font-size: 16px;
  line-height: 3;
  border: none;
  border-radius: 16px;
  background-color: ${(props) => props.theme.SubColor};
  color: ${(props) => props.theme.SubTextColor};
  cursor: pointer;
`;

export const ErrorText = styled.span`
  font-size: 11px;
  color: #ee0000;
`;
