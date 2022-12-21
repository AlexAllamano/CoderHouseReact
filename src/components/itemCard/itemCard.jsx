import React from "react";
import "./itemCard.css";
import { Link, NavLink } from "react-router-dom";

const ItemCard = ({ app }) => {
  const { nombre, descripcion, imagen, precio, categoria, valoracion, id, tipo } = app;

  return (
    <NavLink to={`/${tipo}/${id}`} style={{textDecoration: 'none'}}>
      <div className="d-flex tarjetaItem">
      <img src={imagen} height="110" alt="img app" className=""/>
      <div className="w-75 ms-3 ">
        <h5 className=" tituloTarjeta">{nombre}</h5>
        <p >{categoria}</p>
        <b className="mt-3 ">${precio}</b>
      </div>
    </div>
    </NavLink>
  );
};

export default ItemCard;
