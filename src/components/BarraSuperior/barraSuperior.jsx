import React from "react";
import estilos from "./barraSuperior.css";
import logo from "../../assets/img/storeLogo.png";

const BarraSuperior = () => {
  return (
    <>
       <div className="barraSuperior ps-4 pe-4">
        <ul className="d-flex justify-content-between align-items-center">
          <li className="d-flex align-items-center">
            <img src={logo} alt="logo" />
            <p className="ms-2">Microsoft Store</p>
          </li>
          <li>
            <input
              type="search"
              className="inputTextBarra"
              placeholder="Buscar aplicaciones, juegos, películas y mucho más"
            />
          </li>
          <li>
            <i class="fa-solid fa-user"></i>
          </li>
        </ul>
      </div>
    </>
  );
};

export default BarraSuperior;
