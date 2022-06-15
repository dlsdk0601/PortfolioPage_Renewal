// lib
import React, { useEffect, useState } from "react";
import styled from "styled-components";

// components

export default function TapMenu() {
  const tabMenuList: string[] = ["Dashboard, upload", "testimonial"];

  return (
    <>
      {tabMenuList.map((item: string) => (
        <div>{item}</div>
      ))}
    </>
  );
}
