// lib
import React from "react";
import * as S from "../../../styles/upload/portfolio/PortfolioUploadInformationStyle";

export default function PortfolioUploadInformation() {
  return (
    <S.InformationWrapper>
      <S.InformationTitle>Information</S.InformationTitle>
      <S.InformationInputName>포트폴리오 이름</S.InformationInputName>
      <S.InformationInput type="text" />
      <S.InformationInputName>사이트 이름</S.InformationInputName>
      <S.InformationInput type="text" />
      <S.InformationInputName>한줄 설명</S.InformationInputName>
      <S.InformationInput type="text" />
      <S.InformationInputName>참여도</S.InformationInputName>
      <S.InformationInput type="text" />
      <S.InformationInputName>스킬</S.InformationInputName>
      <S.InformationInput type="text" />
    </S.InformationWrapper>
  );
}
