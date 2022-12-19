import ItemList from "../../components/itemList/itemList";
import { React } from "react";

const Juegos = ({listaApps, titulo}) => {
  


  return (
    <>
      <ItemList listaApps={listaApps} titulo={titulo}/>
    </>
  );
};

export default Juegos;

