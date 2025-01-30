import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./modules/layout/components/home/Home";
import NavbarRB from "./modules/layout/components/navbar/NavbarRB";
import FOOTERM from "./modules/layout/components/footer/FOOTERM";
import Login from "./modules/users/components/login/Login";
import ErrorPage from "./modules/users/components/ErrorPage/ErrorPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<NavbarRB />} />
          </Routes>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/" element={<FOOTERM />} />
          </Routes>
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
          <Routes>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
