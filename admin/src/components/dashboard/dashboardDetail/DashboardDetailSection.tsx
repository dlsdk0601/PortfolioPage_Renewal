// components
import * as S from "../../../styles/dashboardStyle/dashboardDetailStyle/DashboardDetailSectionStyle";
import { fakePortfolioList } from "../../../mok/Mok";
import { IPortfolioList } from "../../../api/schema";
import DashboardDetailMaking from "./DashboardDetailMaking";
import DashboardDetailOverView from "./DashboardDetailOverView";
import DashboardDetailFocus from "./DashboardDetailFocus";
import DashboardDetailThumnail from "./DashboardDetailThumnail";
import DashboardDetailCapture from "./DashboardDetailCapture";
import DashboardDetailSkeleton from "../../skeleton/dashboardDetail/DashboardDetailSkeleton";

// lib
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../../common/BackButton";

//img

export default function DashboardDetailSection() {
  const { selectedId } = useParams();
  const [portfolioIsLoading, setPortflioIsLoading] = useState(true);
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
    img1: "",
    img2: "",
    img3: "",
    capture: "",
    howlong: "",
    responsive: "",
    color: "",
  });

  useEffect(() => {
    if (selectedId === undefined) return;
    if (!portfolioIsLoading) {
      return;
    }

    const filterArray: IPortfolioList = fakePortfolioList.find(
      (portfolio): boolean => portfolio.num === parseInt(selectedId)
    ) || { ...selectedPortfolio };

    setSelectedPortfoilo({ ...filterArray });
    setTimeout(() => {
      setPortflioIsLoading((prev) => false);
    }, 1000);
  }, []);

  return (
    <>
      <BackButton />
      {portfolioIsLoading && <DashboardDetailSkeleton />}
      {!portfolioIsLoading && (
        <S.DashboardDetailSectionWrapper>
          <div>
            <DashboardDetailMaking selectedPortfolio={selectedPortfolio} />
            <DashboardDetailOverView selectedPortfolio={selectedPortfolio} />
            <DashboardDetailFocus selectedPortfolio={selectedPortfolio} />
          </div>
          <DashboardDetailThumnail selectedPortfolio={selectedPortfolio} />
          <DashboardDetailCapture selectedPortfolio={selectedPortfolio} />
        </S.DashboardDetailSectionWrapper>
      )}
    </>
  );
}
