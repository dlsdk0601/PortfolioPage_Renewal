// lib
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import LoginPage from "./pages/LoginPage";
import ListPage from "./pages/ListPage";

// img

function App() {
  return (
    <>
      {/* <div>header</div> */}
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
