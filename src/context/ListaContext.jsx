import React, { createContext, useEffect, useState } from "react";
import { consultarFireBase } from "../services/ApiService";

const initialState = {
  listaApps: [],
  listaCarrito: [],
  setListaApps: () => {},
  setlistaCarrito: () => {},
  agregarItem: () => {},
  borrarItem: () => {},
  CantidadCarrito: 0,
  cargando: true,
};

export const ListaContext = createContext(initialState);

export const ListaProvider = ({ children }) => {
  const [listaApps, setListaApps] = useState([]);
  const [CantidadCarrito, setCantidadCarrito] = useState([]);
  const [listaCarrito, setlistaCarrito] = useState([]);
  const [cargando, setCargando] = useState(true);



  const obtenerApps = async () => {
    try {
      setCargando(true);
      const apps = await consultarFireBase();
      setListaApps(apps);
    } catch (e) {
      console.log(e);
    } finally {
      setCargando(false);
    }
  };

  const agregarItem = (id) => {
    
    const app = listaApps.find((apps) => apps.id == id);

      if(listaCarrito?.length == 0){
        setlistaCarrito([app]);
      }else{
        setlistaCarrito([...listaCarrito, app]);
      }

    setCantidadCarrito(listaCarrito.length);
    console.log(CantidadCarrito)

  };

  const borrarItem = (app) => {
    console.log(listaCarrito.splice(listaCarrito.indexOf(app), 1));
    setlistaCarrito(
      listaCarrito.filter(item => item !== item.id)
    )
  }

  useEffect(() => {
    obtenerApps();
  }, []);

  return (
    <ListaContext.Provider
      value={{
        listaApps,
        cargando,
        setListaApps,
        listaCarrito,
        setlistaCarrito,
        agregarItem,
        borrarItem,
        CantidadCarrito
      }}
    >
      {children}
    </ListaContext.Provider>
  );
};
