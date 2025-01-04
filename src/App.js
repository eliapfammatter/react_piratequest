import React from "react";
import { Routes, Route } from "react-router-dom";
import DynamicPage from "./components/DynamicPage";
import './styles/style.css';
import './styles/mobileStyle.css';

import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<DynamicPage slug="description" />} />
        <Route path="/sketch" element={<DynamicPage slug="sketch" />} />
        <Route path="/mockup" element={<DynamicPage slug="mockup" />} />
        <Route path="/flowdiagram" element={<DynamicPage slug="flow-diagram" />} />
        <Route path="/logbook" element={<DynamicPage slug="logbook" />} />
        <Route path="/game" element={<DynamicPage slug="game" />} />
        <Route path="/forms" element={<DynamicPage slug="forms" />} />
        <Route path="/video-tutorial" element={<DynamicPage slug="video-tutorial" />} />
      </Routes>
    </div>
  );
};

export default App;
