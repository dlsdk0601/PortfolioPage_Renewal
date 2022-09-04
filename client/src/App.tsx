// lib
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// component
import MainPage from "./pages/mainpage/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
