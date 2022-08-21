// lib
import React from "react";

// components
import * as S from "../../../styles/upload/portfolio/PortfolioUploadStyle";
import PortfolioUploadButton from "./PortfolioUploadButton";
import PortfolioUploadInformation from "./PortfolioUploadInformation";
import PortfolioUploadPhoto from "./PortfolioUploadPhoto";
import PortfolioUploadPoint from "./PortfolioUploadPoint";
import PortfolioUploadSiteAddress from "./PortfolioUploadSiteAddress";

export default function PortfolioUpload() {
  return (
    <>
      <S.PortfolioUploadWrapper>
        <PortfolioUploadInformation />
        <PortfolioUploadSiteAddress />
        {/* <PortfolioUploadPlan /> */}
        <PortfolioUploadPoint />
        <PortfolioUploadPhoto />
        <PortfolioUploadButton />
      </S.PortfolioUploadWrapper>
    </>
  );
}
