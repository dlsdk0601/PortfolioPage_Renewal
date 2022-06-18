// lib
import React from "react";
import { useNavigate } from "react-router-dom";

// components
import * as S from "../../styles/mainStyle/MainSectionStyle";

// img

export default function MainSection() {
  const navigate = useNavigate();

  const clickListCard = (path: string) => {
    navigate(path);
  };

  return (
    <S.MainWrapper>
      <S.MainTitle>Amin Page에 오신걸 환영합니다.</S.MainTitle>
      <S.MainListUl>
        <S.MainListLi onClick={() => clickListCard("/dashboard")}>
          <S.FigureForList>
            <S.ImgForList
              alt="logo"
              src={require("../../styles/img/darkDashboard.png")}
            />
          </S.FigureForList>
          <S.Description>
            <S.ListTitle>Dashboard</S.ListTitle>
            <S.ListDescription>리스트 조회</S.ListDescription>
          </S.Description>
        </S.MainListLi>
        <S.MainListLi onClick={() => clickListCard("/upload")}>
          <S.FigureForList>
            <S.ImgForList
              alt="logo"
              src={require("../../styles/img/darkUpload.png")}
            />
          </S.FigureForList>
          <S.Description>
            <S.ListTitle>Upload</S.ListTitle>
            <S.ListDescription>포트폴이로 및 추천서 등록</S.ListDescription>
          </S.Description>
        </S.MainListLi>
        <S.MainListLi onClick={() => clickListCard("/testimonial")}>
          <S.FigureForList>
            <S.ImgForList
              alt="logo"
              src={require("../../styles/img/darkPeople.png")}
            />
          </S.FigureForList>
          <S.Description>
            <S.ListTitle>Testimonial</S.ListTitle>
            <S.ListDescription>추천서 조회</S.ListDescription>
          </S.Description>
        </S.MainListLi>
      </S.MainListUl>
    </S.MainWrapper>
  );
}
