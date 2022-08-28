// lib
import React, { useState } from "react";

// components
import * as S from "../../../styles/upload/portfolio/PortfolioUploadStyle";
import PortfolioUploadButton from "./PortfolioUploadButton";
import PortfolioUploadInformation from "./PortfolioUploadInformation";
import PortfolioUploadPhoto from "./PortfolioUploadPhoto";
import PortfolioUploadPoint from "./PortfolioUploadPoint";
import PortfolioUploadSiteAddress from "./PortfolioUploadSiteAddress";

export default function PortfolioUpload() {
  const [img, setImg] = useState<File | null>(null);

  return (
    <>
      <S.PortfolioUploadWrapper>
        <PortfolioUploadInformation />
        <PortfolioUploadSiteAddress />
        <PortfolioUploadPoint />
        <PortfolioUploadPhoto setImg={setImg} />
        <PortfolioUploadButton />
      </S.PortfolioUploadWrapper>
    </>
  );
}
