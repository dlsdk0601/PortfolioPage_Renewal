// lib
import React from "react";
import styled from "styled-components";

// components

// img

export default function LeftContents() {
  return (
    <Wrapper>
      <WelcomeWrapper>
        <ContentsTitle>Welcome to Admin</ContentsTitle>
        <ContentsBody>
          포트폴리오 관리자 페이지에 오신 것을 환영합니다. 관리자 페이지에서
          Admin 아이디로 로그인 할 경우, 포트폴리오 데이터를 등록, 읽기, 수정
          그리고 삭제가 가능합니다.
          <br />
          관리자 모드 아이디, 비밀번호를 모르시면 밑에 태그를 클릭하셔서 메일을
          보내주세요.
        </ContentsBody>
        <MailLink>Send Mail</MailLink>
      </WelcomeWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 50%;
  height: 100%;
  background-color: #35464e;
`;

const WelcomeWrapper = styled.div`
  width: 60%;
  margin: auto;
`;

const ContentsTitle = styled.h1`
  margin: 150px 0 50px 0;
  color: white;
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 100px;
    height: 2px;
    background-color: white;
    position: absolute;
    left: 0;
    bottom: -10px;
  }
`;

const ContentsBody = styled.p`
  color: white;
  line-height: 2;
  font-size: 14px;
`;

const MailLink = styled.a`
  color: white;
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
