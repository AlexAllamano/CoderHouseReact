import ItemList from "../../components/itemList/itemList";
import { React, useContext } from "react";
import { ListaContext } from "../../context/ListaContext";

const Apps = () => {
  
  // listaApps={listaApps.filter((item) => item.tipo === "app")}
  const { listaApps } = useContext(ListaContext);

  return (
    <>
    <div className="container pt-4 text-white">
        <h2 >Todas las apps</h2>
      </div>
      <ItemList listaApps={listaApps.filter((item) => item.tipo === "app")} />
    </>
  );
};

export default Apps;

