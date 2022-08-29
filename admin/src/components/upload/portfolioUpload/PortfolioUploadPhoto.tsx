// lib
import React, { ChangeEvent } from "react";
import { useRecoilState } from "recoil";

// component
import { portfolio } from "../../../state/atom";
import api from "../../../api/api";
import { fileToBase64 } from "../../../ex/fileToBlob";
import { isBlank } from "../../../ex/ex";
import { AtomPortfolio } from "../../../api/schema";

// style
import * as S from "../../../styles/upload/portfolio/PortfolioUploadPhotoStyle";

export default function PortfolioUploadPhoto() {
  const [portfolioState, setPortfolioState] =
    useRecoilState<AtomPortfolio>(portfolio);

  const onChangeFile = async (e: ChangeEvent<HTMLInputElement>) => {
    if (isBlank(e.target?.files)) {
      return;
    }

    if (isBlank(e.target.id)) {
      return;
    }

    const file = e.target.files[0];
    const fileUrl = URL.createObjectURL(file);
    const object = { ...portfolioState, [e.target.id]: fileUrl };
    setPortfolioState(object);

    // const base64 = await fileToBase64(file);

    // const res = await api.fileTest({ base64 });
    // console.log("res===");
    // console.log(res);
  };

  console.log("portfolioState===");
  console.log(portfolioState);

  return (
    <S.PhotoWrapper>
      <S.PhotoTitle>Photo Zone</S.PhotoTitle>
      <S.InputBox>
        <S.photoBox>
          <S.PhotoLabel htmlFor="thumnail">+ thumnail</S.PhotoLabel>
          <S.PhotoInput
            onChange={(e) => onChangeFile(e)}
            accept="image/jpeg, image/png"
            id="thumnail"
            type="file"
          />
          <S.FigureBox>
            {portfolioState.thumnail && (
              <S.PhotoImg src={portfolioState.thumnail} alt="phto" />
            )}
          </S.FigureBox>
        </S.photoBox>
        <S.photoBox>
          <S.PhotoLabel htmlFor="banner">+ mainPhoto</S.PhotoLabel>
          <S.PhotoInput
            onChange={(e) => onChangeFile(e)}
            accept="image/jpeg, image/png"
            id="banner"
            type="file"
          />
          <S.FigureBox>
            {portfolioState.banner && (
              <S.PhotoImg src={portfolioState.banner} alt="phto" />
            )}
          </S.FigureBox>
        </S.photoBox>
        <S.photoBox>
          <S.PhotoLabel htmlFor="slideImage1">+ slideImage1</S.PhotoLabel>
          <S.PhotoInput
            onChange={(e) => onChangeFile(e)}
            accept="image/jpeg, image/png"
            id="slideImage1"
            type="file"
          />
          <S.FigureBox>
            {portfolioState.slideImage1 && (
              <S.PhotoImg src={portfolioState.slideImage1} alt="phto" />
            )}
          </S.FigureBox>
        </S.photoBox>
        <S.photoBox>
          <S.PhotoLabel htmlFor="slideImage2">+ slideImage2</S.PhotoLabel>
          <S.PhotoInput
            onChange={(e) => onChangeFile(e)}
            accept="image/jpeg, image/png"
            id="slideImage2"
            type="file"
          />
          <S.FigureBox>
            {portfolioState.slideImage2 && (
              <S.PhotoImg src={portfolioState.slideImage2} alt="phto" />
            )}
          </S.FigureBox>
        </S.photoBox>
        <S.photoBox>
          <S.PhotoLabel htmlFor="slideImage3">+ slideImage3</S.PhotoLabel>
          <S.PhotoInput
            onChange={(e) => onChangeFile(e)}
            accept="image/jpeg, image/png"
            id="slideImage3"
            type="file"
          />
          <S.FigureBox>
            {portfolioState.slideImage3 && (
              <S.PhotoImg src={portfolioState.slideImage3} alt="phto" />
            )}
          </S.FigureBox>
        </S.photoBox>
        <S.photoBox>
          <S.PhotoLabel htmlFor="slideImage4">+ slideImage4</S.PhotoLabel>
          <S.PhotoInput
            onChange={(e) => onChangeFile(e)}
            accept="image/jpeg, image/png"
            id="slideImage4"
            type="file"
          />
          <S.FigureBox>
            {portfolioState.slideImage4 && (
              <S.PhotoImg src={portfolioState.slideImage4} alt="phto" />
            )}
          </S.FigureBox>
        </S.photoBox>
      </S.InputBox>
    </S.PhotoWrapper>
  );
}
