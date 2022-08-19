// lib
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { userDataFetch } from "./state/atom";

// components
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import MainPage from "./pages/MainPage";
import NavBar from "./components/nav/NavBar";
import DashboardDetailPage from "./pages/DashboardDetailPage";
import UploadPage from "./pages/UploadPage";
import TestimonialListPage from "./pages/TestimonialListPage";
import TestimonialDetailPage from "./pages/TestimonialDetailPage";

function App() {
  const isUserData = useRecoilValueLoadable(userDataFetch);
  const [get, selector] = useRecoilState(userDataFetch);

  useEffect(() => {
    if (isUserData.state === "hasValue") {
      const { name, id, token, role } = isUserData.contents;
      console.log(isUserData.contents);
      selector({ name, id, token, role });
    }
  }, [isUserData.state]);
  console.log(get.token);
  return (
    <Wrapper>
      <BrowserRouter>
        {get.token && <NavBar />}
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/portfoliolist" element={<DashboardPage />} />
          <Route
            path="/portfoliolist/:selectedId"
            element={<DashboardDetailPage />}
          />
          <Route path="/upload/*" element={<UploadPage />} />
          <Route path="/testimoniallist" element={<TestimonialListPage />} />
          <Route
            path="/testimoniallist/:selectedId"
            element={<TestimonialDetailPage />}
          />
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export default App;
