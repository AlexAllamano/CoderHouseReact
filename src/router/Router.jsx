import { Route, Routes, Navigate } from "react-router-dom";
import { useEffect, useState, React, useContext } from "react";

import Home from "../pages/home/home";
import Juegos from "../pages/juegos/juegos";
import Apps from "../pages/apps/apps";
import ItemDetalles from "../components/itemDetalles/itemDetalles";
import {Loader} from "../components/loader/loader";
import { faL } from "@fortawesome/free-solid-svg-icons";
import { consultarFireBase } from "../services/ApiService";
import { ListaContext, ListaProvider } from "../context/ListaContext";
import Carrito from "../pages/carrito/carrito";



export const Router = () => {
  
  const { cargando } = useContext(ListaContext);




  

  if (cargando) {
    return (
        <Loader></Loader>
    );
  } else {
    return (
        <div className="vistaPrincipal pb-5">
          <Routes>
            <Route path="/" element={<Navigate to={"/home"} />} />
            <Route path="/home" element={<Home />}/>
            <Route path="/home/:id" element={<Navigate to={"/apps"} />} />
            <Route path="/juegos" element={<Juegos />}/>
            <Route path="/carrito" element={<Carrito />}/>
            <Route path="/juego/:id" element={<ItemDetalles  />}/>
            <Route path="/apps" element={<Apps />}/>
            <Route path="/app/:id" element={<ItemDetalles  />}/>
          </Routes>
        </div>
    );
  }
};
