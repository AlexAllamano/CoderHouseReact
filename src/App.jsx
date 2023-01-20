import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import NavBar from "./components/navbar/navBar";
import { Router } from "./router/Router";
import { Loader } from "./components/loader/loader";
import { ListaProvider } from "./context/ListaContext";

const App = () => {
  return (
    <>
      <ListaProvider>
        <NavBar />
        <Router />
      </ListaProvider>
    </>
  );
};

export default App;
