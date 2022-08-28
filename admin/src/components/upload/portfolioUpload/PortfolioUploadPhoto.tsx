// lib
import React, { ChangeEvent, Dispatch, SetStateAction } from "react";
import api from "../../../api/api";
import { Axios } from "../../../api/Axios";
import { isBlank } from "../../../ex/ex";
import * as S from "../../../styles/upload/portfolio/PortfolioUploadPhotoStyle";

export default function PortfolioUploadPhoto(props: {
  setImge: Dispatch<SetStateAction<File | null>>;
}) {
  const onChangeFile = async (e: ChangeEvent<HTMLInputElement>) => {
    if (isBlank(e.target?.files)) {
      return;
    }

    const file = e.target.files[0];
    console.log(file);

    const form = new FormData();
    form.append("file", file);

    const res = await api.fileTest(form);
    console.log("res===");
    console.log(res);
  };

  return (
    <S.PhotoWrapper>
      <S.PhotoTitle>Photo Zone</S.PhotoTitle>
      <S.InputBox>
        <S.PhotoLabel htmlFor="photo">+ thumnail</S.PhotoLabel>
        <S.PhotoInput accept="image/jpeg, image/png" id="photo" type="file" />
      </S.InputBox>
    </S.PhotoWrapper>
  );
}
