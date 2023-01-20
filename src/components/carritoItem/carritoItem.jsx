import React, { useContext } from "react";
import "./carritoItem.css";
import { Link, NavLink } from "react-router-dom";
import { ListaContext } from "../../context/ListaContext";

const CarritoItem = ({ app }) => {
  const { borrarItem } = useContext(ListaContext);

  const { nombre, imagen, precio, categoria, valoracion, id } = app;

  return (
    <>
      <div className="container-carrito row mt-2 mb-3 text-white  itemCarrito">
        <img src={imagen} alt="" className="imagenBorde col-md-2" />

        <div className="col-md-9">
          <div>
            <h2 className="">{nombre}</h2>
            <h5>{categoria}</h5>
            <h5>{valoracion}/100</h5>
          </div>

          <h2>${precio}</h2>
        </div>

        <div className="col-md-1 d-flex align-items-center">
          <i
            onClick={() => borrarItem(app)}
            className="fa-regular fa-square-minus borrarItem "
          ></i>
        </div>
      </div>
    </>
  );
};

export default CarritoItem;
