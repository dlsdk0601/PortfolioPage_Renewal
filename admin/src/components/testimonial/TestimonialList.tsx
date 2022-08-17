// lib
import React, { useEffect, useState } from "react";

// component
import { fakeTestimonialList } from "../../mok/Mok";
import { ITestimonialList } from "../../api/schema";
import * as S from "../../styles/testomonial/TestimonialListStyle";
import TestimonialListSkeleton from "../skeleton/testimonial/TestimonialListSkeleton";
import TestimonialListItem from "./TestimonialListItem";

export default function TestimonialList() {
  const [testimonialList, setTestimonialList] = useState<
    ITestimonialList[] | []
  >([]);
  const [testimonialListLoading, setTestmonialListLoading] = useState(true);

  const fetchingHandle = async () => {
    if (testimonialListLoading) return;

    if (fakeTestimonialList.length > 0) {
      setTestimonialList((prev) => fakeTestimonialList);
    }
  };

  useEffect(() => {
    fetchingHandle();
    setTimeout(() => {
      setTestmonialListLoading(false);
    }, 1000);
  }, [testimonialListLoading]);

  return (
    <S.TestimonialBox
      isData={testimonialListLoading && testimonialList.length > 0}
    >
      {testimonialListLoading && <TestimonialListSkeleton />}
      {!testimonialListLoading &&
        testimonialList.length > 0 &&
        testimonialList.map((testi) => (
          <TestimonialListItem
            id={testi.num}
            tes_oneline={testi.tes_oneline}
            photo={testi.photo}
            tes_name={testi.tes_name}
            key={testi.num}
          />
        ))}
      {!testimonialListLoading && testimonialList.length === 0 && (
        <S.NoDataText>조회된 데이터가 없습니다.</S.NoDataText>
      )}
    </S.TestimonialBox>
  );
}
