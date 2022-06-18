// lib
import React from "react";

// components
import * as S from "../../styles/dashboardStyle/ProtfolioListStyle";
// img

export default function PortfolioList() {
  return (
    <S.PortfolioListBox>
      <S.PortfolioListItem>
        <S.ImgBox>
          <S.Poster
            alt="poster"
            src={require("../../styles/img/dummyImg.png")}
          />
        </S.ImgBox>
        <S.PortfolioTtile>admin page</S.PortfolioTtile>
      </S.PortfolioListItem>
    </S.PortfolioListBox>
  );
}
