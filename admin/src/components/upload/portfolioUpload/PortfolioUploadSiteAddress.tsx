// lib
import React from "react";
import * as S from "../../../styles/upload/portfolio/PortfolioUploadSiteAddressStyle";

export default function PortfolioUploadSiteAddress() {
  return (
    <S.SiteAddressWrapper>
      <S.SiteAddressTitle>Site Address</S.SiteAddressTitle>
      <S.SiteAddressInputName>리드미 주소</S.SiteAddressInputName>
      <S.SiteAddressInput type="text" />
      <S.SiteAddressInputName>사이트 주소</S.SiteAddressInputName>
      <S.SiteAddressInput type="text" />
      <S.SiteAddressInputName>프로젝트 기간</S.SiteAddressInputName>
      <S.SiteAddressInput type="text" />
      <S.SiteAddressCheckBox>
        <S.SiteAddressResponsive>반응형</S.SiteAddressResponsive>
        <S.SiteAddressColor>색상</S.SiteAddressColor>
        <S.SiteAddressCheckBoxInput type="checkbox" />
        <S.SiteAddressColorInput type="text" />
      </S.SiteAddressCheckBox>
      <S.SiteAddressInputName>기능들</S.SiteAddressInputName>
      <S.SiteAddressInput type="text" />
    </S.SiteAddressWrapper>
  );
}
