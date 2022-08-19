// lib
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import {
  useRecoilValue,
  useRecoilValueLoadable,
  useSetRecoilState,
} from "recoil";
import { loginState, userDataFetch } from "./state/atom";

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
  const isLogged = useRecoilValue(loginState);
  const isUserData = useRecoilValueLoadable(userDataFetch);
  const selector = useSetRecoilState(userDataFetch);

  useEffect(() => {
    if (isUserData.state === "hasValue") {
      const user = isUserData.contents;
      selector({ id: user.id, name: user.name, role: user.role });
    }
  }, [isUserData.state]);

  return (
    <Wrapper>
      <BrowserRouter>
        {isLogged && <NavBar />}
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
