// lib
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import { useRecoilState } from "recoil";
import { loginFetch, loginState } from "./state/atom";

// components
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import MainPage from "./pages/MainPage";
import NavBar from "./components/nav/NavBar";
import DashboardDetailPage from "./pages/DashboardDetailPage";
import UploadPage from "./pages/UploadPage";
import TestimonialListPage from "./pages/TestimonialListPage";
import TestimonialDetailPage from "./pages/TestimonialDetailPage";
import { isBlank } from "./ex/ex";
import api from "./api/api";

// img

// type or interfacc

function App() {
  const [isLogged, setIsLogged] = useRecoilState<boolean>(loginState);
  // const [ get, set ] = useRecoilState(loginFetch);

  const userData = async () => {
    const res = await api.userData();
    console.log("res===");
    console.log(res);
  };

  useEffect(() => {
    const TOKEN = sessionStorage.getItem("accessToken");
    if (!isBlank(TOKEN)) {
      setIsLogged((prev) => true);
    }
    userData();
    // set(TOKEN);
  }, []);

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
