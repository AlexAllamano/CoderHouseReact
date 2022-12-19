import React from "react";
import "./itemCard.css";

const ItemCard = ({ app }) => {
  const { nombre, descripcion, imagen, precio, categoria, valoracion } = app;

  return (
    <div className="d-flex tarjetaItem">
      <img src={imagen} height="110" alt="img app" />
      <div className="w-75 ms-3">
        <h5 className="tituloTarjeta">{nombre}</h5>
        <p>{categoria}</p>
        <b className="mt-3">${precio}</b>
      </div>
    </div>
  );
};

export default ItemCard;
