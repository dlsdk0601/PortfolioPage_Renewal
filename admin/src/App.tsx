// lib
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import LoginPage from "./pages/LoginPage";

// img

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
