import React from "react";
import Navbar from "./components/Navbar";
import Loginpage from "./components/Loginpage";
import Head from "./components/Head";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Passwordpage from "./components/Passwordpage";
import Signup from "./components/Signup";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
        <BrowserRouter>
          <Navbar/>
              <Head/>
        




          <Routes>

      <Route   path="/"  element={<Loginpage/>}  />
      <Route   path="/home"  element={<Home/>}  />
      <Route   path="/Pass"  element={<Passwordpage/>}  />

      <Route     path="/signup" element={<Signup/>}    />
          </Routes>

          


</BrowserRouter>

    </div>
  );
};

export default App;
//