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
  const [img, setImg] = useState<string>("");
  console.log("img===");
  console.log(img);
  return (
    <>
      <S.PortfolioUploadWrapper>
        <PortfolioUploadInformation />
        <PortfolioUploadSiteAddress />
        <PortfolioUploadPoint />
        <PortfolioUploadPhoto img={img} setImg={setImg} />
        <PortfolioUploadButton />
      </S.PortfolioUploadWrapper>
    </>
  );
}
