// components
import * as S from "../../../styles/dashboardStyle/dashboardDetailStyle/DashboardDetailSectionStyle";
import { fakePortfolioList, IPortfolioList } from "../../../mok/Mok";
import DashboardDetailMaking from "./DashboardDetailMaking";
import DashboardDetailOverView from "./DashboardDetailOverView";
import DashboardDetailFocus from "./DashboardDetailFocus";

// lib
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../../common/BackButton";
import DashboardDetailThumnail from "./DashboardDetailThumnail";
import DashboardDetailCapture from "./DashboardDetailCapture";

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

    const filterArray: IPortfolioList = fakePortfolioList.find(
      (portfolio): boolean => portfolio.num === parseInt(selectedId)
    ) || { ...selectedPortfolio };

    setSelectedPortfoilo({ ...filterArray });
  }, []);

  return (
    <>
      <BackButton />
      <S.DashboardDetailSectionWrapper>
        <div>
          <DashboardDetailMaking selectedPortfolio={selectedPortfolio} />
          <DashboardDetailOverView selectedPortfolio={selectedPortfolio} />
          <DashboardDetailFocus selectedPortfolio={selectedPortfolio} />
        </div>
        <DashboardDetailThumnail selectedPortfolio={selectedPortfolio} />
        <DashboardDetailCapture selectedPortfolio={selectedPortfolio} />
      </S.DashboardDetailSectionWrapper>
    </>
  );
}
