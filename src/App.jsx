import { useState } from "react";
import "./App.css";
import Login from "./components/login/Index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page1 from "../src/components/page1/Index";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Page1" element={<Page1 />} />
        {/* Adicione outras rotas conforme necessário */}
      </Routes>
    </Router>
  );
};

  

export default App;
