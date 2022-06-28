// lib
import React from "react";
import { useNavigate } from "react-router-dom";

// components
import * as S from "../../styles/dashboardStyle/PortfolioListItemStyle";

// img

export default function PortfolioListItem(props: {
  portfolioName: string;
  portfolioPoster: string;
  portfolioId: number;
}) {
  const navigate = useNavigate();

  const clickPortfolioHandle = () => {
    navigate(`/portfoliolist/${props.portfolioId}`);
  };

  return (
    <S.PortfolioList onClick={clickPortfolioHandle}>
      <S.ImgBox>
        <S.Poster alt="poster" src={props.portfolioPoster} />
      </S.ImgBox>
      <S.PortfolioTtile>{props.portfolioName}</S.PortfolioTtile>
    </S.PortfolioList>
  );
}
