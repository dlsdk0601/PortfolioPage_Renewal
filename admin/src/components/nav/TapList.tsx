// lib
import React from "react";

// components
import TabMenu from "./TabMenu";

interface ITabMenuList {
  id: number;
  tapName: string;
  darkImg: string;
  whiteImg: string;
  tapLink: string;
}

export default function TapList() {
  const tabMenuList: ITabMenuList[] = [
    {
      id: 1,
      tapName: "Dashboard",
      darkImg: require("../../styles/img/darkDashboard.png"),
      whiteImg: require("../../styles/img/whiteDashboard.png"),
      tapLink: "/dashboard",
    },
    {
      id: 2,
      tapName: "Upload",
      darkImg: require("../../styles/img/darkUpload.png"),
      whiteImg: require("../../styles/img/whiteUpload.png"),
      tapLink: "/upload/portfolio",
    },
    {
      id: 3,
      tapName: "Testimonial",
      darkImg: require("../../styles/img/darkPeople.png"),
      whiteImg: require("../../styles/img/whitePeople.png"),
      tapLink: "/testimonial",
    },
  ];

  return (
    <>
      {tabMenuList.map((tab: ITabMenuList) => (
        <TabMenu
          key={tab.id}
          tapName={tab.tapName}
          darkImg={tab.darkImg}
          whiteImg={tab.whiteImg}
          tapLink={tab.tapLink}
        />
      ))}
    </>
  );
}
