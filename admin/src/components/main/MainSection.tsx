// lib
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// components

// img

export default function MainSection() {
  const navigate = useNavigate();

  const clickListCard = (path: string) => {
    navigate(path);
  };

  return (
    <MainWrapper>
      <MainTitle>Amin Page에 오신걸 환영합니다.</MainTitle>
      <MainListUl>
        <MainListLi onClick={() => clickListCard("/dashboard")}>
          <FigureForList>
            <ImgForList
              alt="logo"
              src={require("../../styles/img/darkDashboard.png")}
            />
          </FigureForList>
          <Description>
            <ListTitle>Dashboard</ListTitle>
            <ListDescription>리스트 조회</ListDescription>
          </Description>
        </MainListLi>
        <MainListLi onClick={() => clickListCard("/upload")}>
          <FigureForList>
            <ImgForList
              alt="logo"
              src={require("../../styles/img/darkUpload.png")}
            />
          </FigureForList>
          <Description>
            <ListTitle>Upload</ListTitle>
            <ListDescription>포트폴이로 및 추천서 등록</ListDescription>
          </Description>
        </MainListLi>
        <MainListLi onClick={() => clickListCard("/testimonial")}>
          <FigureForList>
            <ImgForList
              alt="logo"
              src={require("../../styles/img/darkPeople.png")}
            />
          </FigureForList>
          <Description>
            <ListTitle>Testimonial</ListTitle>
            <ListDescription>추천서 조회</ListDescription>
          </Description>
        </MainListLi>
      </MainListUl>
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  width: 70%;
  margin: 200px auto 0 auto;
  height: 100%;
  color: #283138;
`;

const MainTitle = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
`;

const MainListUl = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MainListLi = styled.li`
  width: 300px;
  height: 150px;
  padding-left: 10px;
  border: 1px solid #283138;
  border-left: 20px solid #283138;
  border-radius: 20px;
  margin: 40px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    box-shadow: 3px 3px 3px 3px gray;
  }
`;

const FigureForList = styled.figure`
  width: 35px;
  height: 35px;
`;

const ImgForList = styled.img`
  width: 100%;
  height: 100%;
`;

const Description = styled.div`
  margin-left: 20px;
`;

const ListTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 5px;
`;

const ListDescription = styled.p`
  font-size: 16px;
`;
