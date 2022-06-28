// lib
import React from "react";
import * as S from "../../../styles/upload/portfolio/PortfolioUploadPhotoStyle";

export default function PortfolioUploadPhoto() {
  return (
    <S.PhotoWrapper>
      <S.PhotoTitle>Photo Zone</S.PhotoTitle>
      <S.InputBox>
        <S.PhotoInput type="file" />
      </S.InputBox>
    </S.PhotoWrapper>
  );
}
