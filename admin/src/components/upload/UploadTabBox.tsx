// lib
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as S from "../../styles/upload/UploadTabBoxStyle";

export default function UploadTabBox() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <>
      <S.UploadTabBoxWrapper>
        <S.UploadTabBoxItem onClick={() => navigate("/upload/portfolio")}>
          Portfolio
        </S.UploadTabBoxItem>
        <S.UploadTabBoxItem onClick={() => navigate("/upload/testimonial")}>
          Testmonial
        </S.UploadTabBoxItem>
      </S.UploadTabBoxWrapper>
      <S.UploadTabBoxBackground
        isLeft={pathname === "/upload/portfolio"}
      ></S.UploadTabBoxBackground>
    </>
  );
}
