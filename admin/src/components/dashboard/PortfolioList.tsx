// lib
import React, { useEffect, useState } from "react";
import { fakePortfolioList, IPortfolioList } from "../../mok/Mok";

// components
import * as S from "../../styles/dashboardStyle/PortfolioListStyle";
import PortfolioListItemSkeleton from "../skeleton/dashboard/PortfolioListItemSkeleton";
import PortfolioListItem from "./PortfolioListItem";

// img

export default function PortfolioList() {
  const [portfolioList, setPortfolioList] = useState<IPortfolioList[] | []>([]);
  const [portfolioListisLoading, setPortfolioListIsLoading] = useState(true);

  const fetchingFunc = async () => {
    if (portfolioListisLoading) return;

    if (fakePortfolioList.length > 0) {
      setPortfolioList((prev) => fakePortfolioList);
    }
  };

  useEffect(() => {
    fetchingFunc();
    setTimeout(() => {
      setPortfolioListIsLoading(false);
    }, 1000);
  }, [portfolioListisLoading]);

  return (
    <S.PortfolioListBox
      isData={portfolioListisLoading && portfolioList.length > 0}
    >
      {portfolioListisLoading && <PortfolioListItemSkeleton />}
      {!portfolioListisLoading &&
        portfolioList.length > 0 &&
        portfolioList.map((listItem) => (
          <PortfolioListItem
            key={listItem.num}
            portfolioId={listItem.num}
            portfolioName={listItem.name}
            portfolioPoster={listItem.img1}
          />
        ))}
      {!portfolioListisLoading && portfolioList.length === 0 && (
        <S.NoSelectText>조회된 데이터가 없습니다</S.NoSelectText>
      )}
    </S.PortfolioListBox>
  );
}
