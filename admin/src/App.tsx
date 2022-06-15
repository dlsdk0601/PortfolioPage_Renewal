// lib
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import LoginPage from "./pages/LoginPage";
import ListPage from "./pages/ListPage";
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
    <>
      <BrowserRouter>
        {isLogged && <NavBar />}
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/list" element={<ListPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
