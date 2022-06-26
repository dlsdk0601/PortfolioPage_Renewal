// lib
import React from "react";
import { Route, Routes } from "react-router-dom";

// component
import PortfolioUpload from "../components/upload/portfolioUpload/PortfolioUpload";
import TestimonialUpload from "../components/upload/testimonialUpload/TestimonialUpload";
import UploadTabBox from "../components/upload/UploadTabBox";

export default function UploadPage() {
  return (
    <>
      <UploadTabBox />
      <Routes>
        <Route path="portfolio" element={<PortfolioUpload />} />
        <Route path="testimonial" element={<TestimonialUpload />} />
      </Routes>
    </>
  );
}
