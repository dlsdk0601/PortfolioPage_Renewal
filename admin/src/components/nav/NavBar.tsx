// lib
import React, { useState } from "react";
import styled from "styled-components";

// components

// img

export default function NavBar() {
  return (
    <NavWrapper>
      <p>header</p>
    </NavWrapper>
  );
}

const NavWrapper = styled.nav`
  width: 10vw;
  height: 100vh;
  background-color: red;
`;
