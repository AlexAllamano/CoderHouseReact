import ItemList from "../../components/itemList/itemList";
import { React } from "react";

const Juegos = ({listaApps, titulo}) => {
  


  return (
    <>
      <div className="container pt-4 text-white">
        <h2 >Todos los juegos</h2>
      </div>

      <ItemList listaApps={listaApps} titulo={titulo}/>
    </>
  );
};

export default Juegos;

