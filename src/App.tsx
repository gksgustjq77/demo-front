import React from "react";
import logo from "./logo.svg";
import Home from "./pages/home/home";
import Join from "./pages/home/join";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Joinbirth from "./pages/home/joinBirth";
import Email from "./pages/home/email";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home/join" element={<Join />}></Route>
          <Route path="/home/email" element={<Email />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
