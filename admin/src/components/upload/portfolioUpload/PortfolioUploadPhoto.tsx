// lib
import React from "react";
import * as S from "../../../styles/upload/portfolio/PortfolioUploadPhotoStyle";

export default function PortfolioUploadPhoto() {
  return (
    <S.PhotoWrapper>
      <S.PhotoTitle>Photo Zone</S.PhotoTitle>
      <S.InputBox>
        <S.PhotoLabel htmlFor="photo">+ thumnail</S.PhotoLabel>
        <S.PhotoInput accept="image/jpeg, image/png" id="photo" type="file" />
      </S.InputBox>
    </S.PhotoWrapper>
  );
}
