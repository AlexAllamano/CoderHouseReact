import ItemList from "../../components/itemList/itemList";
import { React } from "react";
import { useContext } from "react";
import { ListaContext } from "../../context/ListaContext";

const Home = () => {
  // listaApps={listaApps.filter((item) => item.principal === true)}

  const { listaApps } = useContext(ListaContext);


  return (
    <>
      <ItemList
        listaApps={listaApps.filter(
          (item) => item.principal === true && item.tipo === "app"
        )}
        titulo={"Principales apps gratuitas"}
      />
      <ItemList
        listaApps={listaApps.filter(
          (item) => item.principal === true && item.tipo === "juego"
        )}
        titulo={"Principales juegos"}
      />
    </>
  );
};

export default Home;
