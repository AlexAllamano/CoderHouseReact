import { Route, Routes, Navigate } from "react-router-dom";

import Home from "../pages/home/home";
import Juegos from "../pages/juegos/juegos";
import Apps from "../pages/apps/apps";
import { useEffect, useState, React } from "react";
import { API_Endpoints, API_Verbos, consultaApi } from "../services/ApiService";

export const Router = () => {

  const [listaApps, setListaApps] = useState([]);

  useEffect(() => {
    consultaApi(API_Endpoints.APPS, API_Verbos.GET).then((arr) => {
      setListaApps(arr.data);
      console.log(arr.data[0].tipo)
      console.log(listaApps.filter((item) => item.tipo === "juego"), 'lista de juegos')
    });
  }, []);



  return (
    <div className="vistaPrincipal pb-5">
      <Routes>
        <Route path="/" element={<Navigate to={"/home"} />} />
        <Route path="/home" element={<Home listaApps={listaApps.filter(item => item.principal === true)} />} />
        <Route path="/juegos" element={<Juegos listaApps={listaApps.filter(item => item.tipo === "juego")} />} />
        <Route path="/apps" element={<Apps listaApps={listaApps.filter(item => item.tipo === "app")} />}  />
      </Routes>
    </div>
  );
};
