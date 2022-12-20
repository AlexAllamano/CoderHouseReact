import ItemList from "../../components/itemList/itemList";
import { React } from "react";

const Apps = ({listaApps, titulo}) => {
  


  return (
    <>
    <div className="container pt-4 text-white">
        <h2 >Todas las apps</h2>
      </div>
      <ItemList listaApps={listaApps} titulo={titulo}/>
    </>
  );
};

export default Apps;

