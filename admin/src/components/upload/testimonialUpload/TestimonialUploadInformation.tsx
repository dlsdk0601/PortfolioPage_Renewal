// lib
import React from "react";
import * as S from "../../../styles/upload/testimonial/TestimonialUploadInformationStyle";

export default function TestimonialUploadInformation() {
  return (
    <S.InformationWrapper>
      <S.InformationTitle>Information</S.InformationTitle>
      <S.InformationInputName>추천인 이름</S.InformationInputName>
      <S.InformationInput type="text" />
      <S.InformationInputName>한줄 평</S.InformationInputName>
      <S.InformationInput type="text" />
      <S.InformationInputName>관계</S.InformationInputName>
      <S.InformationInput type="text" />
      <S.InformationInputName>본인 사진</S.InformationInputName>
      <S.InformationInput type="file" />
    </S.InformationWrapper>
  );
}
