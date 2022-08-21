// lib
import React from "react";
import * as S from "../../../styles/upload/portfolio/PortfolioUploadSiteAddressStyle";

export default function PortfolioUploadSiteAddress() {
  return (
    <S.SiteAddressWrapper>
      <S.SiteAddressTitle>Site Address</S.SiteAddressTitle>
      <S.SiteAddressInputName>github 주소</S.SiteAddressInputName>
      <S.SiteAddressInput type="text" />
      <S.SiteAddressInputName>사이트 주소</S.SiteAddressInputName>
      <S.SiteAddressInput type="text" />
      <S.SiteAddressInputName>프로젝트 기간</S.SiteAddressInputName>
      <S.SiteAddressInput type="text" />
      <S.SiteAddressCheckBox></S.SiteAddressCheckBox>
      <S.SiteAddressInputName>기능들</S.SiteAddressInputName>
      <S.SiteAddressInput type="text" />
    </S.SiteAddressWrapper>
  );
}
