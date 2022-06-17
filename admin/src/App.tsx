// lib
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

// components
import LoginPage from "./pages/LoginPage";
import ListPage from "./pages/ListPage";
import MainPage from "./pages/MainPage";
import NavBar from "./components/nav/NavBar";
import { useRecoilState } from "recoil";
import { loginState } from "./state/atom";

// img

// type or interfacc

function App() {
  const [isLogged, setIsLogged] = useRecoilState<boolean>(loginState);

  useEffect(() => {
    const TOKEN = sessionStorage.getItem("Access_Token");

    if (TOKEN) {
      setIsLogged((prev): boolean => true);
    }
  }, []);

  return (
    <Wrapper>
      <BrowserRouter>
        {isLogged && <NavBar />}
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/dashboard" element={<ListPage />} />
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
