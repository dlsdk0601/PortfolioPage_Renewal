// lib
import React, { ChangeEvent, Dispatch, SetStateAction } from "react";
import api from "../../../api/api";
import { fileToBase64 } from "../../../ex/fileToBlob";
import { isBlank } from "../../../ex/ex";
import * as S from "../../../styles/upload/portfolio/PortfolioUploadPhotoStyle";

export default function PortfolioUploadPhoto(props: {
  img: string;
  setImg: Dispatch<SetStateAction<string>>;
}) {
  const onChangeFile = async (e: ChangeEvent<HTMLInputElement>) => {
    if (isBlank(e.target?.files)) {
      return;
    }

    const file = e.target.files[0];
    const fileUrl = URL.createObjectURL(file);

    props.setImg(fileUrl);
    // const base64 = await fileToBase64(file);

    // const res = await api.fileTest({ base64 });
    // console.log("res===");
    // console.log(res);
  };

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
            {props.img && <S.PhotoImg src={props.img} alt="phto" />}
          </S.FigureBox>
        </S.photoBox>
        <S.photoBox>
          <S.PhotoLabel htmlFor="mainPhoto">+ mainPhoto</S.PhotoLabel>
          <S.PhotoInput
            accept="image/jpeg, image/png"
            id="mainPhoto"
            type="file"
          />
          <S.FigureBox>
            <S.PhotoImg src="" alt="phto" />
          </S.FigureBox>
        </S.photoBox>
        <S.photoBox>
          <S.PhotoLabel htmlFor="banner1">+ banner1</S.PhotoLabel>
          <S.PhotoInput
            accept="image/jpeg, image/png"
            id="banner1"
            type="file"
          />
          <S.FigureBox>
            <S.PhotoImg src="" alt="phto" />
          </S.FigureBox>
        </S.photoBox>
        <S.photoBox>
          <S.PhotoLabel htmlFor="banner2">+ banner2</S.PhotoLabel>
          <S.PhotoInput
            accept="image/jpeg, image/png"
            id="banner2"
            type="file"
          />
          <S.FigureBox>
            <S.PhotoImg src="" alt="phto" />
          </S.FigureBox>
        </S.photoBox>
        <S.photoBox>
          <S.PhotoLabel htmlFor="banner3">+ banner3</S.PhotoLabel>
          <S.PhotoInput
            accept="image/jpeg, image/png"
            id="banner3"
            type="file"
          />
          <S.FigureBox>
            <S.PhotoImg src="" alt="phto" />
          </S.FigureBox>
        </S.photoBox>
        <S.photoBox>
          <S.PhotoLabel htmlFor="banner4">+ banner4</S.PhotoLabel>
          <S.PhotoInput
            accept="image/jpeg, image/png"
            id="banner4"
            type="file"
          />
          <S.FigureBox>
            <S.PhotoImg src="" alt="phto" />
          </S.FigureBox>
        </S.photoBox>
      </S.InputBox>
    </S.PhotoWrapper>
  );
}
