// components
import * as S from "../../../styles/dashboardStyle/dashboardDetailStyle/DashboardDetailSectionStyle";
import { fakePortfolioList, IPortfolioList } from "../../../mok/Mok";

// lib
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../../common/BackButton";

//img

export default function DashboardDetailSection() {
  const { selectedId } = useParams();
  const [selectedPortfolio, setSelectedPortfoilo] = useState<IPortfolioList>({
    num: 0,
    name: "",
    sitename: "",
    subs: "",
    part: "",
    mission: "",
    exp: "",
    skill: "",
    func: "",
    git: "",
    sitepage: "",
    thum: "",
    howlong: "",
    responsive: "",
    color: "",
  });

  useEffect(() => {
    if (selectedId === undefined) return;

    const filterArray: IPortfolioList = fakePortfolioList.find(
      (portfolio): boolean => portfolio.num === parseInt(selectedId)
    ) || { ...selectedPortfolio };

    setSelectedPortfoilo({ ...filterArray });
  }, []);

  return (
    <>
      <BackButton />
      <S.DashboardDetailSectionWrapper>
        <S.DashboardDetailTitle>
          {selectedPortfolio.name}
        </S.DashboardDetailTitle>
      </S.DashboardDetailSectionWrapper>
    </>
  );
}
