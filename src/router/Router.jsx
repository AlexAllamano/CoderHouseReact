import { Route, Routes, Navigate } from "react-router-dom";

import Home from "../pages/home/home";
import Juegos from "../pages/juegos/juegos";
import Apps from "../pages/apps/apps";
import { useEffect, useState, React } from "react";
import { API_Endpoints, API_Verbos, consultaApi } from "../services/ApiService";
import ItemDetalles from "../components/itemDetalles/itemDetalles";

export const Router = () => {

  const [listaApps, setListaApps] = useState([]);

  useEffect(() => {
    consultaApi(API_Endpoints.APPS, API_Verbos.GET).then((arr) => {
      setListaApps(arr.data);
    });
  }, []);



  return (
    <div className="vistaPrincipal pb-5">
      <Routes>
        <Route path="/" element={<Navigate to={"/home"} />} />
        {/* <Route path="*" element={<Navigate to={"/home"} />} /> */}
        <Route path="/home" element={<Home listaApps={listaApps.filter(item => item.principal === true)} />} />
        <Route path="/home/:id" element={<Navigate to={"/apps"}/>} />
        <Route path="/juegos" element={<Juegos listaApps={listaApps.filter(item => item.tipo === "juego")}  />} />
        <Route path="/juego/:id" element={<ItemDetalles listaApps={listaApps} />} />
        <Route path="/apps" element={<Apps listaApps={listaApps.filter(item => item.tipo === "app")} />}  />
        <Route path="/app/:id" element={<ItemDetalles listaApps={listaApps}/>}  />
      </Routes>
    </div>
  );
};
