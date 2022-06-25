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
  const [isLoading, setIsLoading] = useState(true);

  const fetchingFunc = async () => {
    if (isLoading) return;

    if (fakePortfolioList.length > 0) {
      setPortfolioList((prev) => fakePortfolioList);
    }
  };

  useEffect(() => {
    fetchingFunc();
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, [isLoading]);

  return (
    <S.PortfolioListBox isData={isLoading && portfolioList.length > 0}>
      {isLoading && <PortfolioListItemSkeleton />}
      {!isLoading &&
        portfolioList.length > 0 &&
        portfolioList.map((listItem) => (
          <PortfolioListItem
            key={listItem.num}
            portfolioId={listItem.num}
            portfolioName={listItem.name}
            portfolioPoster={listItem.img1}
          />
        ))}
      {!isLoading && portfolioList.length === 0 && (
        <S.NoSelectText>조회된 데이터 없습니다</S.NoSelectText>
      )}
    </S.PortfolioListBox>
  );
}
