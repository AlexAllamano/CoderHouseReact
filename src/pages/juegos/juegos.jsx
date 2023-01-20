import ItemList from "../../components/itemList/itemList";
import { React, useContext } from "react";
import { ListaContext } from "../../context/ListaContext";

const Juegos = () => {
  
  // listaApps={listaApps.filter((item) => item.tipo === "juego")}
  const { listaApps } = useContext(ListaContext);

  return (
    <>
      <div className="container pt-4 text-white">
        <h2 >Todos los juegos</h2>
      </div>

      <ItemList listaApps={listaApps.filter((item) => item.tipo === "juego")} />
    </>
  );
};

export default Juegos;

