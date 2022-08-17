// components
import * as S from "../../../styles/dashboardStyle/dashboardDetailStyle/DashboardDetailMakingStyle";
import { IPortfolioList } from "../../../api/schema";

// lib

export default function DashboardDetailMaking(props: {
  selectedPortfolio: IPortfolioList;
}) {
  return (
    <>
      <S.DashboardDetailTitle>
        {props.selectedPortfolio.name}
      </S.DashboardDetailTitle>
      <S.DashboardDescription>
        <S.DashboardUl>
          <S.DashboardLi>
            <S.DashboardDescriptionTitle>
              사이트 이름
            </S.DashboardDescriptionTitle>
            <S.DashboardDescriptionOption>
              {props.selectedPortfolio.sitename}
            </S.DashboardDescriptionOption>
          </S.DashboardLi>
          <S.DashboardLi>
            <S.DashboardDescriptionTitle>참여도</S.DashboardDescriptionTitle>
            <S.DashboardDescriptionOption>
              {props.selectedPortfolio.part}
            </S.DashboardDescriptionOption>
          </S.DashboardLi>
          <S.DashboardLi>
            <S.DashboardDescriptionTitle>제작기간</S.DashboardDescriptionTitle>
            <S.DashboardDescriptionOption>
              {props.selectedPortfolio.howlong}
            </S.DashboardDescriptionOption>
          </S.DashboardLi>
          <S.DashboardLi>
            <S.DashboardDescriptionTitle>Site URL</S.DashboardDescriptionTitle>
            <S.DashboardDescriptionOption>
              {props.selectedPortfolio.sitepage}
            </S.DashboardDescriptionOption>
          </S.DashboardLi>
          <S.DashboardLi>
            <S.DashboardDescriptionTitle>Skill</S.DashboardDescriptionTitle>
            <S.DashboardDescriptionOption>
              {props.selectedPortfolio.skill}
            </S.DashboardDescriptionOption>
          </S.DashboardLi>
          <S.DashboardLi>
            <S.DashboardDescriptionTitle>기능</S.DashboardDescriptionTitle>
            <S.DashboardDescriptionOption>
              {props.selectedPortfolio.func}
            </S.DashboardDescriptionOption>
          </S.DashboardLi>
        </S.DashboardUl>
      </S.DashboardDescription>
    </>
  );
}
