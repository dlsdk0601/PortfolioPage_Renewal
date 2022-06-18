// lib
import React from "react";
import styled from "styled-components";

// components
import LeftContents from "./LeftContents";
import RightContents from "./RightContents";
import * as S from "../../styles/loginStyle/LoginWrapper";

// img

export default function LoginSection() {
  return (
    <S.Wrapper>
      <LeftContents />
      <RightContents />
    </S.Wrapper>
  );
}
