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
import KidCollection from "./modules/products/components/kids-collection/KidCollection";
import MenCollection from "./modules/products/components/mens-collection/MenCollection";
import WomenCollection from "./modules/products/components/womens-collection/WomenCollection";


function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <NavbarRB/>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/registration" element={<Registration />}/>
            <Route path="/kidscollection" element={<KidCollection/>}/>
            <Route path="/mencollection" element={<MenCollection/>}/>
            <Route path="/womenscollection" element={<WomenCollection/>}/>
            {/* <Route path='/cart' element={<Cart/>}></Route>  */}
          </Routes>
          <FOOTERM />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
