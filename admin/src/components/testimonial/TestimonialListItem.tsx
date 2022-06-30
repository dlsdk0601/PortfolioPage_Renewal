// lib
import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../../styles/testomonial/TestimonialListItemStyle";

// component

function TestimonialListItem(props: {
  photo: string;
  tes_oneline: string;
  id: number;
  tes_name: string;
}) {
  const navigate = useNavigate();

  const clickTestimonialHandle = () => {
    navigate(`/testimoniallist/${props.id}`);
  };
  return (
    <S.TestimonialList onClick={clickTestimonialHandle}>
      <S.ImgBox>
        <S.Poster alt="poster" src={props.photo} />
      </S.ImgBox>
      <S.PortfolioTtile>
        {props.tes_oneline} - {props.tes_name}
      </S.PortfolioTtile>
    </S.TestimonialList>
  );
}

export default React.memo(TestimonialListItem);
