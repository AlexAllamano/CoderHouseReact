import "./carrito.css";
import { React } from "react";
import { useContext } from "react";
import { ListaContext } from "../../context/ListaContext";
import CarritoItem from "../../components/carritoItem/carritoItem";

const Carrito = () => {
  // listaApps={listaApps.filter((item) => item.principal === true)}

  const { listaCarrito } = useContext(ListaContext);


  if (listaCarrito.length != 0) {
    return (
      <>
        <div className="colorClaro mb-4">
          <div className="container pt-4">
            <h1 className="text-white text-center mt-4">Resumen de Carrito</h1>
            <hr />

            {listaCarrito.map((app) => (
              <CarritoItem key={app.id} app={app}></CarritoItem>
            ))}

            <div className="d-flex justify-content-center">
              <a
                className=""
                target="_blank"
                href="https://www.microsoft.com/es-ad/store/b/home"
              >
                <button className="btn btn-secondary btn-lg btn-block centrado">
                  Comprar
                </button>
              </a>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="colorClaro mb-4">
          <div className="container pt-4">
            <h1 className="text-white text-center mt-4">Resumen de Carrito</h1>
            <hr />

            <h1 className="text-center mt-5">
              Aún no has agregado nada al carrito
            </h1>
          </div>
        </div>
      </>
    );
  }
};

export default Carrito;
