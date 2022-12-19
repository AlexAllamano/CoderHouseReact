import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import NavBar from "./components/navbar/navBar";
import { Router } from "./router/Router";

const App = () => {
  return (
    <>
      <NavBar />
      
        <Router/>
        
      
      
    </>
  );
};

export default App;
