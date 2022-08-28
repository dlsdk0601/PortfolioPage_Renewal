// lib
import React, { ChangeEvent, Dispatch, SetStateAction } from "react";
import api from "../../../api/api";
import { fileToBase64 } from "../../../ex/fileToBlob";
import { isBlank } from "../../../ex/ex";
import * as S from "../../../styles/upload/portfolio/PortfolioUploadPhotoStyle";

export default function PortfolioUploadPhoto(props: {
  setImg: Dispatch<SetStateAction<string>>;
}) {
  const onChangeFile = async (e: ChangeEvent<HTMLInputElement>) => {
    if (isBlank(e.target?.files)) {
      return;
    }

    const file = e.target.files[0];
    const fileUrl = URL.createObjectURL(file);
    props.setImg(fileUrl);
    const base64 = await fileToBase64(file);

    const res = await api.fileTest({ base64 });
    console.log("res===");
    console.log(res);
  };

  return (
    <S.PhotoWrapper>
      <S.PhotoTitle>Photo Zone</S.PhotoTitle>
      <S.InputBox>
        <S.PhotoLabel htmlFor="photo">+ thumnail</S.PhotoLabel>
        <S.PhotoInput
          onChange={(e) => onChangeFile(e)}
          accept="image/jpeg, image/png"
          id="photo"
          type="file"
        />
      </S.InputBox>
    </S.PhotoWrapper>
  );
}
