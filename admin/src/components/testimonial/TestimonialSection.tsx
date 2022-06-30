// lib
import React, { useEffect, useState } from "react";

// component
import * as S from "../../styles/testomonial/TestimonialSectionStyle";
import TestimonialList from "./TestimonialList";

export default function TestimonialSection() {
  return (
    <S.TestimonialWrapper>
      <S.TestimonialTitle>Testimonial</S.TestimonialTitle>
      <TestimonialList />
    </S.TestimonialWrapper>
  );
}
