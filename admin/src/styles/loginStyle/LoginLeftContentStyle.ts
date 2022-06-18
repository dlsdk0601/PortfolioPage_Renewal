import styled from "styled-components";

export const LeftContentsWrapper = styled.div`
  width: 50%;
  height: 100%;
  background-color: ${(props) => props.theme.SubColor};
`;

export const WelcomeWrapper = styled.div`
  width: 60%;
  margin: auto;
`;

export const ContentsTitle = styled.h1`
  margin: 150px 0 50px 0;
  color: ${(props) => props.theme.SubTextColor};
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 100px;
    height: 2px;
    background-color: ${(props) => props.theme.SubTextColor};
    position: absolute;
    left: 0;
    bottom: -10px;
  }
`;

export const ContentsBody = styled.p`
  color: ${(props) => props.theme.SubTextColor};
  line-height: 2;
  font-size: 14px;
`;

export const MailLink = styled.a`
  color: ${(props) => props.theme.SubTextColor};
  display: block;
  padding: 5px;
  margin-top: 50px;
  width: 100px;
  height: 32px;
  border: 1px solid white;
  text-align: center;
  line-height: 1.5;
  border-radius: 16px;
`;
