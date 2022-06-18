// lib
import React from "react";
import * as S from "../../styles/loginStyle/LoginLeftContentStyle";

// components

// img

export default function LeftContents() {
  return (
    <S.LeftContentsWrapper>
      <S.WelcomeWrapper>
        <S.ContentsTitle>Welcome to Admin</S.ContentsTitle>
        <S.ContentsBody>
          포트폴리오 관리자 페이지에 오신 것을 환영합니다. 관리자 페이지에서
          Admin 아이디로 로그인 할 경우, 포트폴리오 데이터를 등록, 읽기, 수정
          그리고 삭제가 가능합니다.
          <br />
          관리자 모드 아이디, 비밀번호를 모르시면 밑에 태그를 클릭하셔서 메일을
          보내주세요.
        </S.ContentsBody>
        <S.MailLink>Send Mail</S.MailLink>
      </S.WelcomeWrapper>
    </S.LeftContentsWrapper>
  );
}
