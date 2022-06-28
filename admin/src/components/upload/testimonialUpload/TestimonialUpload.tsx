// lib
import React from "react";

// component
import * as S from "../../../styles/upload/testimonial/TestimonialUploadStyle";
import TestimonialUploadButton from "./TestimonialUploadButton";
import TestimonialUploadDescription from "./TestimonialUploadDescription";
import TestimonialUploadInformation from "./TestimonialUploadInformation";

export default function () {
  return (
    <S.TestimonialUploadWrapper>
      <TestimonialUploadInformation />
      <TestimonialUploadDescription />
      <TestimonialUploadButton />
    </S.TestimonialUploadWrapper>
  );
}
