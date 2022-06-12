// lib
import React from "react";
import styled from "styled-components";

// components
import LeftContents from "./LeftContents";
import RightContents from "./RightContents";

// img

export default function LoginSection() {
  return (
    <Wrapper>
      <LeftContents />
      <RightContents />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 1200px;
  height: 600px;
  width: 100%;
  border-radius: 25px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
