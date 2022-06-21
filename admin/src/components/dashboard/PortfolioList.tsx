// lib
import React, { useEffect, useState } from "react";
import { fakePortfolioList, IPortfolioList } from "../../mok/Mok";

// components
import * as S from "../../styles/dashboardStyle/PortfolioListStyle";
import PortfolioListItem from "./PortfolioListItem";

// img

export default function PortfolioList() {
  const [portfolioList, setPortfolioList] = useState<IPortfolioList[] | []>([]);

  useEffect(() => {
    setPortfolioList((prev) => fakePortfolioList);
  }, []);

  return (
    <S.PortfolioListBox isData={portfolioList.length > 0}>
      {portfolioList.length > 0 ? (
        portfolioList.map((listItem) => (
          <PortfolioListItem
            key={listItem.num}
            portfolioId={listItem.num}
            portfolioName={listItem.name}
            portfolioPoster={listItem.img1}
          />
        ))
      ) : (
        <S.NoSelectText>조회된 데이터 없습니다</S.NoSelectText>
      )}
    </S.PortfolioListBox>
  );
}
