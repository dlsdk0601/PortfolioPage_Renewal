// lib
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

// components
import TabMenu from "./TabMenu";

interface ITabMenuList {
  id: number;
  tapName: string;
  darkImg: string;
  whiteImg: string;
}

export default function TapList() {
  const tabMenuList: ITabMenuList[] = [
    {
      id: 1,
      tapName: "Dashboard",
      darkImg: require("../../styles/img/darkDashboard.png"),
      whiteImg: require("../../styles/img/whiteDashboard.png"),
    },
    {
      id: 2,
      tapName: "Upload",
      darkImg: require("../../styles/img/darkUpload.png"),
      whiteImg: require("../../styles/img/whiteUpload.png"),
    },
    {
      id: 3,
      tapName: "Testimonial",
      darkImg: require("../../styles/img/darkPeople.png"),
      whiteImg: require("../../styles/img/whitePeople.png"),
    },
  ];

  const { pathname } = useLocation();

  return (
    <>
      {tabMenuList.map((item: ITabMenuList) => (
        <TabMenu
          key={item.id}
          tapName={item.tapName}
          darkImg={item.darkImg}
          whiteImg={item.whiteImg}
          isActive={pathname === "/" + item?.tapName?.toLowerCase()}
        />
      ))}
    </>
  );
}
