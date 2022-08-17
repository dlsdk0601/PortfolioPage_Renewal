// lib
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fakeTestimonialList } from "../../../mok/Mok";
import { ITestimonialList } from "../../../api/schema";

// component
import * as S from "../../../styles/testomonial/testimonialDetail/TestimonialDetailSectionStyle";
import BackButton from "../../common/BackButton";
import TestimonialDetailSkeleton from "../../skeleton/testimonialDetail/TestimonialDetailSkeleton";

export default function TestimonialDetailSection() {
  const { selectedId } = useParams();
  const [testimonialLoading, setTestimonialLoading] = useState(true);
  const [testimonial, setTestimonial] = useState<ITestimonialList>({
    num: 0,
    tes_name: "",
    tes_text: "",
    tex_real: "",
    tes_oneline: "",
    photo: "",
  });

  useEffect(() => {
    if (selectedId === undefined) {
      return;
    }

    if (!testimonialLoading) {
      return;
    }

    const fakeTestimonial: ITestimonialList = fakeTestimonialList.find(
      (testi) => testi.num === parseInt(selectedId)
    ) || { ...testimonial };

    setTestimonial({ ...fakeTestimonial });
    setTimeout(() => {
      setTestimonialLoading(false);
    }, 1000);
  }, [testimonialLoading]);

  return (
    <>
      <BackButton />
      {testimonialLoading && <TestimonialDetailSkeleton />}
      {!testimonialLoading && (
        <S.TestimonialDetailSectionWrapper>
          <S.TestimonialBox>
            <S.ProfileBox>
              <S.ProfilPhoto alt="profile" src={testimonial.photo} />
            </S.ProfileBox>

            <S.TestimonialName>{testimonial.tes_name}</S.TestimonialName>
            <S.TestimonialDescriptionBox>
              <S.TestimonialDescriptionItem>
                <p>{testimonial.tes_oneline}</p>
              </S.TestimonialDescriptionItem>
              <S.TestimonialDescriptionItem>
                <p>{testimonial.tex_real}</p>
              </S.TestimonialDescriptionItem>
              <S.TestimonialDescriptionItem>
                <S.TestimonialText>{testimonial.tes_text}</S.TestimonialText>
              </S.TestimonialDescriptionItem>
            </S.TestimonialDescriptionBox>
          </S.TestimonialBox>
        </S.TestimonialDetailSectionWrapper>
      )}
    </>
  );
}
