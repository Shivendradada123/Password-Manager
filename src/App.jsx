import React from "react";
import Navbar from "./components/Navbar";
import Loginpage from "./components/Loginpage";
import Head from "./components/Head";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Passwordpage from "./components/Passwordpage";

const App = () => {
  return (
    <div>
        <BrowserRouter>
          <Navbar/>
              <Head/>
        




          <Routes>

      <Route   path="/"  element={<Loginpage/>}  />
      <Route   path="/home"  element={<Home/>}  />
      <Route   path="/Pass"  element={<Passwordpage/>}  />


          </Routes>

          


</BrowserRouter>

    </div>
  );
};

export default App;
//