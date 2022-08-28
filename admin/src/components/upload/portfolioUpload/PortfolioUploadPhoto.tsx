// lib
import React, { ChangeEvent, Dispatch, SetStateAction } from "react";
import api from "../../../api/api";
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
