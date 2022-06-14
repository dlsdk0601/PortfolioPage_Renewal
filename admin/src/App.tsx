// lib
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import LoginPage from "./pages/LoginPage";
import ListPage from "./pages/ListPage";
import NavBar from "./components/nav/NavBar";
import { useRecoilValue } from "recoil";
import { loginState } from "./state/atom";

// img

// type or interfacc

function App() {
  const isLogged = useRecoilValue<boolean>(loginState);

  return (
    <>
      {isLogged && <NavBar />}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/list" element={<ListPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
