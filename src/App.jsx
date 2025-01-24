import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./modules/layout/components/home/Home";
import NavbarRB from "./modules/layout/components/navbar/NavbarRB";
import FOOTERM from "./modules/layout/components/footer/FOOTERM";
import Registration  from './modules/users/components/register/Registrtion'
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <NavbarRB />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/registration" element={<Registration />}></Route>
            {/* <Route path='/cart' element={<Cart/>}></Route>  */}
          </Routes>
          <FOOTERM />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
